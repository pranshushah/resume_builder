<script lang="ts">
	import { onMount } from 'svelte';
	import { v1 as uuid } from 'uuid';
	import Button from '../../UI/Button.svelte';
	import Input from '../../UI/Input.svelte';
	import Tags from '../../UI/Tags.svelte';
	import { localStorageKeyValue } from '../../../utils/types';
	import type { tagElement } from '../../../utils/types';
	import { getValueFromLocalStorage } from '../../../utils/helper_function/getLocalStorage';
	let skillValue = '';
	let selectedTags: tagElement[] = [];
	let innerWidth;

	onMount(() => {
		selectedTags = getValueFromLocalStorage<tagElement[]>('skills', []);
	});

	function onEnterHandler(
		e: KeyboardEvent & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		if (!e.altKey && !e.ctrlKey && e.code === 'Enter') {
			addHandler();
		}
	}

	function addHandler() {
		if (skillValue.trim() !== '') {
			selectedTags = [...selectedTags, { id: uuid(), value: skillValue.trim() }];
			skillValue = '';
			window.localStorage.setItem(localStorageKeyValue.skills, JSON.stringify(selectedTags));
		}
	}

	function deleteHandler(id: string) {
		const deleteIndex = selectedTags.findIndex((tag) => tag.id === id);
		if (deleteIndex !== -1) {
			const newSelectedTags = [...selectedTags];
			newSelectedTags.splice(deleteIndex, 1);
			selectedTags = [...newSelectedTags];
			window.localStorage.setItem(localStorageKeyValue.skills, JSON.stringify(selectedTags));
		}
	}
</script>

<svelte:window bind:innerWidth />

<div class="container">
	<Input
		bind:value={skillValue}
		labelName="Add skill"
		on:keyup={onEnterHandler}
		small={innerWidth < 767}
	/>
	<div class="button_container">
		<Button on:click={addHandler}>Add</Button>
	</div>
</div>
<div class="tag_container" role="list">
	<Tags tagElements={selectedTags} {deleteHandler} />
</div>

<style lang="scss">
	@import '../../../utils/scss/_spaces.scss';
	@import '../../../utils/scss/_media.scss';

	.container {
		display: flex;
		padding: getSpace(3) * 1px 0;
		margin: 0 getSpace(1) * 1px;
	}

	.button_container {
		padding-top: getSpace(0.5) * 1px;
		padding-left: getSpace(3) * 1px;
		@include fold_small() {
			padding-left: getSpace(2) * 1px;
		}
	}

	.tag_container {
		display: flex;
		width: 550px;
		flex-wrap: wrap;
		@include mobile() {
			max-width: 350px;
		}
		@include se() {
			max-width: 290px;
		}
		@include fold_small() {
			max-width: 270px;
		}
	}
</style>
