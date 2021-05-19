<script lang="ts">
	import Input from '../UI/Input.svelte';
	import Button from '../UI/Button.svelte';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	export let inputValue: string;
	export let error: boolean;
	export let errorMessage: string;
	export let labelName: string;
	export let disabled: boolean;
	export let type;
	export let inputRef: HTMLInputElement;

	function onButtonClicked() {
		dispatch('save');
	}
	function onEnterHandler(
		e: KeyboardEvent & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		if (!e.altKey && !e.ctrlKey && e.code === 'Enter') {
			dispatch('save');
		}
	}
</script>

<div class="container">
	<Input
		bind:value={inputValue}
		on:keyup={onEnterHandler}
		on:
		{error}
		bind:inputRef
		{labelName}
		{type}
		on:check_error
		{errorMessage}
	/>
</div>
<div class="button_container">
	<Button {disabled} on:click={onButtonClicked} dimension="small" mode="save">Save</Button>
</div>

<style lang="scss">
	@import '../../utils/scss/spaces';
	@import '../../utils/scss/media';

	.button_container {
		display: flex;
		justify-content: flex-end;
		margin-top: getSpace(1.5) * 1px;
		margin-right: getSpace(9) * 1px;

		@include mobile() {
			margin-right: getSpace(3.5) * 1px;
		}
	}

	.container {
		padding-top: getSpace(3) * 1px;
		padding-left: getSpace(1) * 1px;
		width: 500px;
		@include mobile() {
			max-width: 350px;
		}
		@include se() {
			max-width: 310px;
		}
	}
</style>
