<script lang="ts">
	import type { resumeDetailsURL, templaetURLType } from '../../utils/types';
	import { urlObj, templateURL } from '../../utils/types';
	export let backLink: resumeDetailsURL | templaetURLType;
	export let nextLink: resumeDetailsURL | templaetURLType;
	export let mode: 'details' | 'template' = 'details';
</script>

{#if mode === 'details'}
	<div class="container">
		<a href={urlObj[backLink]} class="link inverted">back</a>
		<a href={urlObj[nextLink]} class="link normal">next</a>
	</div>
{:else}
	<div class="container">
		<a href={templateURL[backLink]} class="link inverted">back</a>
		<a href={templateURL[nextLink]} class="link normal">next</a>
	</div>
{/if}

<style lang="scss">
	@import '../../utils/scss/_spaces.scss';
	@import '../../utils/scss/_variables.scss';
	@import '../../utils/scss/_lineHeight.scss';
	@import '../../utils/scss/_fontSize.scss';

	.container {
		display: flex;
		justify-content: space-between;
		margin: getSpace(5) * 1px getSpace(1) * 1px;
	}
	.link {
		border: 1px solid rgba(0, 0, 0, 0);
		text-decoration: none;
		cursor: pointer;
		outline-style: none;
		border-radius: 0.1rem;
		transition: 0.1s background-color ease-in-out;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		font-size: getFontSize(5) * 1px;
		padding: 12px getSpace(3) * 1px;
		&:focus-visible {
			outline: 2px solid black;
		}
	}
	.normal {
		color: $whiteColor;
		background-color: $primaryColor;
		&:hover {
			background: darken($color: $primaryColor, $amount: 3)
				radial-gradient(circle, transparent 1%, darken($color: $primaryColor, $amount: 3) 1%)
				center/15000%;
		}
		&:active {
			background-color: lighten($color: $primaryColor, $amount: 6);
			background-size: 100%;
		}
	}
	.inverted {
		background-color: transparent;
		color: $primaryColor;
		border: 1px solid $primaryColor;
		&:hover {
			color: $primaryColor;
			background-color: rgba($color: $primaryColor, $alpha: 0.2);
		}
		&:active {
			color: darken($color: $primaryColor, $amount: 10);
			border: 1px solid darken($color: $primaryColor, $amount: 10);
		}
	}
</style>
