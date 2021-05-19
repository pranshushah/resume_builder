<script lang="ts">
	import type { localStoragekey } from '../../utils/types';

	import Card from '../UI/Card.svelte';
	export let title: string;
	export let content: string;
	export let icon: localStoragekey;
	let iconClass: string = '';
	if (icon) {
		if (icon === 'twitter') {
			iconClass = 'twitter';
		} else if (icon === 'behance') {
			iconClass = 'behance';
		} else if (icon === 'dribble') {
			iconClass = 'dribble';
		} else if (icon === 'facebook') {
			iconClass = 'facebook';
		} else if (icon === 'github') {
			iconClass = 'github';
		} else if (icon === 'instagram') {
			iconClass = 'instagram';
		} else if (icon === 'youtube') {
			iconClass = 'youtube';
		} else if (icon === 'blog') {
			iconClass = 'blog';
		} else if (icon === 'website') {
			iconClass = 'website';
		} else if (icon === 'email') {
			iconClass = 'email';
		} else if (icon === 'phone') {
			iconClass = 'phone';
		} else if (icon === 'linkdin') {
			iconClass = 'linkdin';
		} else if (icon === 'address') {
			iconClass = 'address';
		}
	}
</script>

<Card on:edit>
	<p>
		<span class="title">
			{title}
			{#if iconClass}
				<span aria-hidden="true" class={`icon ${iconClass}`} />
			{/if} :
		</span>
		<span class="content">{content}</span>
	</p>
</Card>

<style lang="scss">
	@import '../../utils/scss/_variables.scss';
	@import '../../utils/scss/_fontSize.scss';
	@import '../../utils/scss/_spaces.scss';
	@import '../../utils/scss/_lineHeight.scss';
	@import '../../utils/scss/_media.scss';
	p {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.title {
		color: $blackColor;
		font-size: getFontSize(6) * 1px;
		margin-right: getSpace(0.5) * 1px;
		font-weight: 500;
		line-height: map-get($map: $line-height, $key: 'extra-large') * 1px;
		@include mobile() {
			font-size: getFontSize(5) * 1px;
			line-height: map-get($map: $line-height, $key: 'large') * 1px;
		}
	}

	.content {
		color: lighten($color: $blackColor, $amount: 10);
		font-size: getFontSize(5) * 1px;
		margin-left: getSpace(0.5) * 1px;
		@include mobile() {
			font-size: getFontSize(4) * 1px;
		}
	}
	.icon {
		margin: -4px 4px;
		display: inline-block;
		background-size: contain;
		background-repeat: no-repeat;
		width: 24px;
		height: 24px;
		@include mobile() {
			margin: -3px 4px;
			width: 20px;
			height: 20px;
		}
	}
	.twitter {
		background-image: url('img/social/twitter.svg');
		margin: -4px 4px;
	}

	.facebook {
		background-image: url('img/social/facebook.svg');
	}

	.behance {
		background-image: url('img/social/behance.svg');
	}

	.dribble {
		background-image: url('img/social/dribbble.svg');
		margin: -3px 4px;
	}
	.github {
		background-image: url('img/social/github.svg');
	}

	.instagram {
		background-image: url('img/social/instagram.svg');
		margin: -4px 4px;
	}

	.linkdin {
		background-image: url('img/social/linkedin.svg');
	}

	.youtube {
		background-image: url('img/social/youtube.svg');
		margin: -4px 4px;
	}

	.website {
		background-image: url('img/social/website.svg');
	}
	.blog {
		background-image: url('img/social/blog.svg');
	}

	.email {
		background-image: url('img/social/email.svg');
		margin: -6px 4px;
		width: 28px;
		height: 28px;
		@include mobile() {
			margin: -4px 4px;
			width: 24px;
			height: 24px;
		}
	}
	.address {
		background-image: url('img/social/home.svg');
	}

	.phone {
		background-image: url('img/social/phone.svg');
		margin: -3px 4px;
		width: 20px;
		height: 20px;
	}
</style>
