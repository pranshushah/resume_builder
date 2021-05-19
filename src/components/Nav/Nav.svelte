<script lang="ts">
	import { templateURL, urlObj } from '../../utils/types';

	import logo from './logo/RB.png';
	export let navFor: 'details' | 'template' | 'none' = 'none';
</script>

<nav>
	<a href="/" class="logo"><img src={logo} alt="Resumebuilder logo" /></a>
	{#if navFor === 'details'}
		<a href="#main" class="visible-hidden">Jump directly to main content</a>
	{/if}
	{#if navFor === 'template'}
		<a href="#template" class="visible-hidden">Jump directly to main content</a>
	{/if}
	<ul>
		{#if navFor === 'details'}
			<li><a class="img_a" href={templateURL.template1}>explore resumes</a></li>
		{/if}
		{#if navFor === 'template'}
			<li><a class="img_a" href={urlObj.NAMEANDTITLE}>edit details</a></li>
		{/if}
	</ul>
</nav>

<style lang="scss">
	@import '../../utils/scss/_variables.scss';
	@import '../../utils/scss/_spaces.scss';
	@import '../../utils/scss/_fontSize.scss';
	@import '../../utils/scss/_lineHeight.scss';
	@import '../../utils/scss/_media.scss';

	.visible-hidden {
		clip: rect(1px, 1px, 1px, 1px);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	.visible-hidden:focus {
		clip: auto;
		height: auto;
		overflow: auto;
		position: absolute;
		width: auto;
		color: whitesmoke;
		text-decoration: none;
		border: 1px solid whitesmoke;
		left: 300px;
		top: 20px;
		padding: 4px 8px;
		@include tablet() {
			left: 200px;
		}
		@include mobile() {
			left: 90px;
			padding: 0px;
		}
	}

	nav {
		display: flex;
		background: $primaryColor;
		justify-content: space-between;
		margin: 0;
		@include print() {
			display: none;
		}
	}

	.logo {
		display: block;
		padding: getSpace(0.5) * 1px getSpace(5) * 1px;
		padding-left: getSpace(10) * 1px;
		margin: 3px;
		@include mobile() {
			padding: getSpace(0.5) * 1px getSpace(3) * 1px;
		}
		@include se() {
			padding: getSpace(0.5) * 1px getSpace(2.5) * 1px;
		}
		@include fold_small() {
		}
	}

	img {
		height: getSpace(6) * 1px;
		margin-top: getSpace(0.5) * 1px;
		@include fold_small() {
			height: getSpace(6) * 1px;
		}
	}

	.img_a {
		color: inherit;
		display: block;
		text-decoration: none;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		padding: getSpace(3) * 1px getSpace(1.5) * 1px;
		&:hover {
			cursor: pointer;
			background-color: lighten($color: $primaryColorDark, $amount: 7);
		}
		@include fold_small() {
			padding: getSpace(2.5) * 1px getSpace(1.5) * 1px;
		}
	}

	ul {
		list-style: none;
		color: $whiteColor;
		text-transform: capitalize;
		font-size: getFontSize(5) * 1px;
		letter-spacing: 1px;
		padding: 0;
		margin: 0;
		margin-right: getSpace(10) * 1px;
		@include mobile() {
			margin-right: getSpace(3) * 1px;
		}
		@include se() {
			margin-right: getSpace(2) * 1px;
		}
		@include fold_small() {
			margin-right: getSpace(1) * 1px;
			font-size: getFontSize(4) * 1px;
		}
	}
</style>
