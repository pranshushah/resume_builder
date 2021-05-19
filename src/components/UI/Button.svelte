<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let secondary = false;
	export let danger = false;
	export let dimension: 'small' | 'medium' | 'large' | 'huge' = 'medium';
	export let inverted = false;
	export let disabled = false;
	export let mode: 'add' | 'edit' | 'delete' | 'save' | 'download' | 'none' = 'none';

	let typeClasses;
	if (secondary) {
		if (inverted) {
			typeClasses = 'invertedSecondary';
		} else {
			typeClasses = 'secondary';
		}
	} else if (danger) {
		if (inverted) {
			typeClasses = 'invertedDanger';
		} else {
			typeClasses = 'danger';
		}
	} else {
		if (inverted) {
			typeClasses = 'invertedPrimary';
		} else {
			typeClasses = 'primary';
		}
	}
	function clickHandler(
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	) {
		if (disabled) {
			e.preventDefault();
		} else {
			dispatch('click');
		}
	}
</script>

<button
	class={`button ${dimension} ${typeClasses}`}
	on:click={clickHandler}
	class:is_disabled={disabled}
	aria-disabled={disabled}
>
	{#if mode !== 'none'}
		<span
			aria-hidden="true"
			class="icon"
			class:delete={mode === 'delete'}
			class:edit={mode === 'edit'}
			class:add={mode === 'add'}
			class:save={mode === 'save'}
			class:download={mode === 'download'}
		/>
	{/if}
	<slot>Please provide text for button</slot>
</button>

<style lang="scss">
	@import '../../utils/scss/_variables.scss';
	@import '../../utils/scss/_spaces.scss';
	@import '../../utils/scss/_lineHeight.scss';
	@import '../../utils/scss/_variables.scss';
	@import '../../utils/scss/_fontSize.scss';
	@import '../../utils/scss/media';

	.is_disabled {
		cursor: not-allowed;
		opacity: 0.5;
		pointer-events: none;
	}
	.button {
		border: none;
		cursor: pointer;
		outline-style: none;
		transition: 0.1s all ease-in-out;
	}

	.button:focus-visible {
		outline: 3px dashed darken($color: #620518, $amount: 5);
	}

	.icon {
		margin: -4px 0px;
		display: inline-block;
		background-size: contain;
		background-repeat: no-repeat;
		width: 21px;
		height: 21px;
	}
	.download {
		background-image: url('icons/download.svg');
		margin: -3px 6px;
	}

	.delete {
		background-image: url('icons/delete.svg');
	}

	.edit {
		background-image: url('icons/edit.svg');
		margin: -2px 2px;
		height: 19px;
		width: 19px;
		transform: rotate(-5deg);
	}

	.add {
		background-image: url('icons/add.svg');
		margin-right: 4px;
		height: 21px;
		width: 17px;
	}

	.save {
		background-image: url('icons/save.svg');
		margin-right: 5px;
		width: 20px;
		height: 20px;
	}

	.button:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	.primary {
		color: $whiteColor;
		background-color: $secondaryColorDark;
	}

	.primary:hover {
		background: darken($color: $secondaryColorDark, $amount: 3)
			radial-gradient(circle, transparent 1%, darken($color: $secondaryColorDark, $amount: 3) 1%)
			center/15000%;
	}
	.primary:active {
		background-color: lighten($color: $secondaryColorDark, $amount: 3);
		background-size: 100%;
		transition: background-color 0s;
	}

	.invertedPrimary {
		background-color: transparent;
		color: $secondaryColorDark;
		border: 1px solid $secondaryColorDark;
	}

	.invertedPrimary:hover {
		color: $secondaryColorDark;
		background-color: rgba($color: $secondaryColorDark, $alpha: 0.2);
	}

	.invertedPrimary:active {
		color: darken($color: $secondaryColorDark, $amount: 10);
		border: 1px solid darken($color: $secondaryColorDark, $amount: 10);
	}

	.secondary {
		color: $whiteColor;
		background-color: lighten($color: $primaryColorLight, $amount: 2);
	}

	.secondary:hover {
		background: darken($color: $primaryColorLight, $amount: 3)
			radial-gradient(circle, transparent 1%, darken($color: $primaryColorLight, $amount: 3) 1%)
			center/15000%;
	}
	.secondary:active {
		background-color: lighten($color: $primaryColorLight, $amount: 6);
		background-size: 100%;
	}

	.invertedSecondary {
		background-color: transparent;
		color: $primaryColorLight;
		border: 1px solid $primaryColorLight;
	}

	.invertedSecondary:hover {
		color: $primaryColorLight;
		background-color: rgba($color: $primaryColorLight, $alpha: 0.2);
	}

	.invertedSecondary:active {
		color: darken($color: $primaryColorLight, $amount: 10);
		border: 1px solid darken($color: $primaryColorLight, $amount: 10);
	}

	.danger {
		color: $whiteColor;
		background-color: $dangerColor;
	}

	.danger:hover {
		background: darken($color: $dangerColor, $amount: 3)
			radial-gradient(circle, transparent 1%, darken($color: $dangerColor, $amount: 3) 1%)
			center/15000%;
	}
	.danger:active {
		background-color: lighten($color: $dangerColor, $amount: 4);
		background-size: 100%;
		transition: background-color 0s;
	}

	.invertedDanger {
		background-color: transparent;
		color: $dangerColor;
		border: 1px solid $dangerColor;
	}

	.invertedDanger:hover {
		color: $dangerColor;
		background-color: rgba($color: $dangerColor, $alpha: 0.2);
	}

	.invertedDanger:active {
		color: darken($color: $dangerColor, $amount: 10);
		border: 1px solid darken($color: $dangerColor, $amount: 10);
	}

	.medium {
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		font-size: getFontSize(5) * 1px;
		padding: 12px getSpace(2) * 1px;
	}

	.small {
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		font-size: getFontSize(4) * 1px;
		padding: getSpace(1) * 1px getSpace(2) * 1px;
		@include se() {
			padding: getSpace(1) * 1px getSpace(1.5) * 1px;
		}
	}

	.large {
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		font-size: getFontSize(7) * 1px;
		padding: getSpace(2) * 1px getSpace(3) * 1px;
	}

	.huge {
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		font-size: getFontSize(8) * 1px;
		padding: getSpace(3) * 1px getSpace(5) * 1px;
	}
</style>
