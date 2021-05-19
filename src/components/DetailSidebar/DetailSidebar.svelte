<script lang="ts">
	import { urlObj } from '../../utils/types/index';
	export let currentPath: string;
</script>

<div class="container">
	<ul class="list_container">
		<li class="list_element">
			<a
				class:active={currentPath === urlObj.NAMEANDTITLE}
				href={urlObj.NAMEANDTITLE}
				aria-current={currentPath === urlObj.NAMEANDTITLE ? 'page' : undefined}>Personal Details</a
			>
		</li>
		<li class="list_element">
			<a
				class:active={currentPath === urlObj.CONTACT}
				href={urlObj.CONTACT}
				aria-current={currentPath === urlObj.CONTACT ? 'page' : undefined}>Contact</a
			>
		</li>
		<li class="list_element">
			<a
				href={urlObj.SOCIALMEDIA}
				class:active={currentPath === urlObj.SOCIALMEDIA}
				aria-current={currentPath === urlObj.SOCIALMEDIA ? 'page' : undefined}>Social Media</a
			>
		</li>
		<li class="list_element">
			<a
				href={urlObj.EDUCATION}
				class:active={currentPath === urlObj.EDUCATION}
				aria-current={currentPath === urlObj.EDUCATION ? 'page' : undefined}>education</a
			>
		</li>
		<li class="list_element">
			<a
				href={urlObj.EXPERIENCE}
				class:active={currentPath === urlObj.EXPERIENCE}
				aria-current={currentPath === urlObj.EXPERIENCE ? 'page' : undefined}>experience</a
			>
		</li>
		<li class="list_element">
			<a
				href={urlObj.PROJECTS}
				class:active={currentPath === urlObj.PROJECTS}
				aria-current={currentPath === urlObj.PROJECTS ? 'page' : undefined}>projects</a
			>
		</li>
		<li class="list_element">
			<a
				href={urlObj.CERTIFICATE}
				class:active={currentPath === urlObj.CERTIFICATE}
				aria-current={currentPath === urlObj.CERTIFICATE ? 'page' : undefined}>certificates</a
			>
		</li>
		<li class="list_element">
			<a
				href={urlObj.SKILLS}
				class:active={currentPath === urlObj.SKILLS}
				aria-current={currentPath === urlObj.SKILLS ? 'page' : undefined}>skills</a
			>
		</li>
	</ul>
</div>

<style lang="scss">
	@import '../../utils/scss/_variables.scss';
	@import '../../utils/scss/_media.scss';
	@import '../../utils/scss/_spaces.scss';
	@import '../../utils/scss/_fontSize.scss';
	@import '../../utils/scss/_lineHeight.scss';

	.container {
		min-height: 100vh;
		width: 250px;
		background-color: $primaryColor;
		@include tablet() {
			display: none;
		}
	}

	.list_container {
		padding-top: getSpace(9) * 1px;
		padding-left: 0;
		color: $whiteColor;
		margin: 0;
	}

	a {
		text-decoration: none;
		color: inherit;
		display: block;
		padding-left: getSpace(3) * 1px;
		cursor: pointer;
		text-transform: capitalize;
		font-size: getFontSize(6) * 1px;
		line-height: map-get($map: $line-height, $key: 'large') * 1px;
		&:hover {
			background-color: lighten($color: $primaryColor, $amount: 7);
		}
	}

	.active {
		background-color: lighten($color: $primaryColor, $amount: 7);
	}
</style>
