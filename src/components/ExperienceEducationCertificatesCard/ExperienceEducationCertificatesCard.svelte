<script lang="ts">
	import Card from '../UI/Card.svelte';

	export let content1: string;
	export let content2: string;
	export let startingDate: string;
	export let lastDate: string;
	export let present: boolean;
	export let moreDetails: string[];

	export let titleName1: string = '';
	export let titleName2: string = '';
	export let titleName3: string = '';
</script>

<Card on:delete on:edit showDelete>
	<p>
		<span class="title">{titleName1} : </span>
		<span class="content">{content1}</span>
	</p>
	<p>
		<span class="title">{titleName2} : </span>
		<span class="content">{content2}</span>
	</p>
	{#if titleName3}
		<p>
			<span class="title">{titleName3} : </span>
			<span class={'content'}>
				( {startingDate.split('-').reverse().join('-')}
			</span>
			<span class={'content'}> to </span>
			<span class={'content'}>
				{#if present}
					' Present '
				{:else}
					{lastDate.split('-').reverse().join('-')}{' '}
				{/if}
				)
			</span>
		</p>
	{/if}
	{#if moreDetails.length > 0 && moreDetails[0].trim().length > 0}
		<ul>
			{#each moreDetails as detail}
				<li>{detail.trim()}</li>
			{/each}
		</ul>
	{/if}
</Card>

<style lang="scss">
	@import '../../utils/scss/spaces';
	@import '../../utils/scss/fontSize';
	@import '../../utils/scss/_variables.scss';
	@import '../../utils/scss/spaces';
	@import '../../utils/scss/lineHeight';
	@import '../../utils/scss/_media.scss';

	ul {
		padding: 0;
		list-style: disc;
		padding-left: getSpace(2.5) * 1px;
		font-size: getFontSize(4) * 1px;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
	}

	p {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.title {
		color: $blackColor;
		font-size: getFontSize(5) * 1px;
		margin-right: getSpace(0.5) * 1px;
		font-weight: 500;
		text-transform: capitalize;
		line-height: map-get($map: $line-height, $key: 'large') * 1px;
		@include mobile() {
			font-size: getFontSize(4) * 1px;
		}
	}

	.content {
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		color: lighten($color: $blackColor, $amount: 15);
		font-size: getFontSize(5) * 1px;
		margin-left: getSpace(0.5) * 1px;
		@include mobile() {
			font-size: getFontSize(4) * 1px;
		}
	}
</style>
