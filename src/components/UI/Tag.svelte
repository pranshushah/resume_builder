<script lang="ts">
	import type { tagElement } from '../../utils/types';
	export let deleteHandler: (id: string) => void;
	export let tag: tagElement;
	function closeClickHandler() {
		deleteHandler(tag.id);
	}
</script>

<span class="container" role="listitem">
	{tag.value}
	<button aria-label="delete the skill" on:click={closeClickHandler} class="close">
		&#x2715;
	</button>
</span>

<style lang="scss">
	@import '../../utils/scss/_spaces.scss';
	@import '../../utils/scss/_fontSize.scss';
	@import '../../utils/scss/_lineHeight.scss';
	@import '../../utils/scss/_variables.scss';
	@import '../../utils/scss/_media.scss';

	.container {
		display: inline-block;
		margin-top: 10px;
		background-color: $primaryColorDark;
		padding: getSpace(0.5) * 1px getSpace(2) * 1px;
		padding-right: getSpace(1.5) * 1px;
		font-size: getFontSize(4) * 1px;
		color: $whiteColor;
		border-radius: 25px;
		margin: getSpace(0.5) * 1px;
		@include mobile() {
			font-size: getFontSize(3) * 1px;
		}
		@include fold_small() {
			padding: getSpace(1) * 1px getSpace(2) * 1px;
		}
	}

	.close {
		display: inline-block;
		margin-left: 8px;
		padding: 1px 3px;
		color: rgba($color: $whiteColor, $alpha: 0.9);
		font-size: getFontSize(3) * 1px;
		cursor: pointer;
		background: none;
		border: none;
		transition: 0.1s all ease;
		@include mobile() {
			font-size: getFontSize(2) * 1px;
		}
		&:hover {
			color: $whiteColor;
			transform: scale(1.2);
		}
	}
</style>
