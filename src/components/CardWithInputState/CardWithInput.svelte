<script lang="ts">
	import { setValueToLocalStorage } from '../../utils/helper_function/setLocalStorage';
	import { onMount } from 'svelte';
	import { getValueFromLocalStorage } from '../../utils/helper_function/getLocalStorage';
	import type { localStoragekey } from '../../utils/types';
	import CardContent from '../CardContent/CardContent.svelte';
	import InputWithSaveButton from '../InputWithSaveButton/InputWithSaveButton.svelte';

	type error_check = {
		value: string;
	};

	export let keyforLocalStorage: localStoragekey;
	export let labelName: string;
	export let type = 'text';
	export let errorMessage: string;
	export let errorChecker: (val: string) => boolean;

	let inputRef: HTMLInputElement;
	let inputValue: string = '';
	let inputError = false;
	let triedTosaveOnce = false;
	let showCard = true;

	onMount(() => {
		inputValue = getValueFromLocalStorage(keyforLocalStorage, '');
	});

	function showInputWithSaveButtonHandler() {
		showCard = false;
	}

	function saveHandler() {
		inputError = errorChecker(inputValue);
		if (!triedTosaveOnce) {
			triedTosaveOnce = true;
		}
		if (inputError) {
			inputRef.focus();
		} else {
			setValueToLocalStorage(keyforLocalStorage, inputValue.trim());
			showCard = true;
			inputError = false;
			triedTosaveOnce = false;
		}
	}
	function checkError(e: CustomEvent<error_check>) {
		if (triedTosaveOnce) {
			inputError = errorChecker(e.detail.value);
		}
	}
</script>

{#if showCard}
	<CardContent
		title={labelName}
		content={inputValue}
		icon={keyforLocalStorage}
		on:edit={showInputWithSaveButtonHandler}
	/>
{:else}
	<InputWithSaveButton
		{labelName}
		{type}
		bind:inputRef
		error={inputError && triedTosaveOnce}
		{errorMessage}
		disabled={inputError}
		on:save={saveHandler}
		on:check_error={checkError}
		bind:inputValue
	/>
{/if}
