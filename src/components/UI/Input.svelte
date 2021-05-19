<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let error = false;
	export let type = 'text';
	export let labelName: string;
	export let errorMessage = '';
	export let a11ylabelFor: string = '';
	export let small = false;
	export let value: string;
	export let required = false;
	export let max = '';
	export let disabled = false;
	export let inputRef: HTMLInputElement;

	function inputChangeHandler(
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		value = e.currentTarget.value;
		dispatch('check_error', { value });
	}
</script>

<div class="input_group">
	<input
		placeholder=" "
		id={a11ylabelFor ? a11ylabelFor : labelName}
		class="input"
		class:input_error={error}
		class:small
		on:keyup
		on:input={inputChangeHandler}
		bind:this={inputRef}
		aria-invalid={error}
		aria-describedby={a11ylabelFor ? `error_message_${a11ylabelFor}` : `error_message_${labelName}`}
		{value}
		{required}
		{type}
		{max}
		{disabled}
	/>
	<label
		for={a11ylabelFor ? a11ylabelFor : labelName}
		class={error ? 'label label_error' : 'label'}
	>
		{labelName}
	</label>
</div>
<p
	class="error_message"
	id={a11ylabelFor ? `error_message_${a11ylabelFor}` : `error_message_${labelName}`}
	class:visually_hidden={!(error && errorMessage)}
>
	{errorMessage}
</p>

<style lang="scss">
	@import '../../utils/scss/_fontSize.scss';
	@import '../../utils/scss/_spaces.scss';
	@import '../../utils/scss/_lineHeight.scss';
	@import '../../utils/scss/_variables.scss';
	@import '../../utils/scss/_media.scss';

	.input_group {
		position: relative;
		width: auto;
	}

	.label {
		font-size: getFontSize(5) * 1px;
		position: absolute;
		left: 0;
		top: 50%;
		background-color: white;
		color: gray;
		transform: translateY(-50%);
		padding: 0 getSpace(0.5) * 1px;
		margin: 0 getSpace(2) * 1px;
		pointer-events: none;
		transition: 0.1s ease-in;
		@include se() {
			font-size: getFontSize(4) * 1px;
		}
	}

	.input {
		outline: none;
		font-size: getFontSize(5) * 1px;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		border-radius: 4px;
		width: 420px;
		border: 1px solid gray;
		color: $blackColor;
		padding: getSpace(2) * 1px getSpace(1.5) * 1px;
		transition: 0.1s ease-in;
		@include mobile() {
			max-width: 320px;
		}
		@include se() {
			max-width: 290px;
			font-size: getFontSize(4) * 1px;
		}
		@include se() {
			max-width: 240px;
		}
		&::-webkit-calendar-picker-indicator {
			cursor: pointer;
			transition: 0.1s all ease;
		}
		&::-webkit-calendar-picker-indicator:hover {
			transform: scale(1.2);
		}
		&:focus {
			border-color: $secondaryColorDark;
			box-shadow: 0 0 0 1px $secondaryColorDark;
		}
		&:focus + .label {
			color: $secondaryColorDark;
			top: 0;
			font-size: getFontSize(4) * 1px;
		}
		&:not(:placeholder-shown) + .label {
			top: 0;
			font-size: getFontSize(4) * 1px;
		}
		&:disabled {
			cursor: not-allowed;
			opacity: 0.6;
		}
		&::-webkit-calendar-picker-indicator {
			cursor: pointer;
			transition: 0.1s all ease;
		}
		&::-webkit-calendar-picker-indicator:hover {
			transform: scale(1.2);
		}
	}
	.input_error {
		border-color: $dangerColor !important;
	}
	.label_error {
		color: $dangerColor !important;
	}
	.error_message {
		margin-top: 4px;
		margin-left: 2px;
		color: $dangerColor;
		text-align: left;
		font-weight: 400;
		letter-spacing: 1px;
		font-size: getFontSize(4) * 1px;
	}

	.small {
		width: 205px;
		font-size: getFontSize(4) * 1px;
		@include fold_small() {
			width: 155px;
		}
		&:focus + .label {
			color: $secondaryColorDark;
			top: 0;
			font-size: getFontSize(3) * 1px;
		}
		&:not(:placeholder-shown) + .label {
			top: 0;
			font-size: getFontSize(3) * 1px;
		}
	}
	.visually_hidden {
		position: absolute;
		overflow: hidden;
		clip: rect(0 0 0 0);
		height: 1px;
		width: 1px;
		margin: -1px;
		padding: 0;
		border: 0;
	}
</style>
