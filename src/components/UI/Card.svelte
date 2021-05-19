<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';

	const dispatch = createEventDispatcher();

	export let showDelete = false;
	function deleteHandler() {
		dispatch('delete');
	}

	function editHandler() {
		dispatch('edit');
	}
</script>

<div class="contanier">
	<div class="contentContainer">
		<slot><h1>Please provide content</h1></slot>
	</div>
	<div class="buttonContainer">
		{#if showDelete}
			<div class="delete_button">
				<Button danger dimension="small" on:click={deleteHandler} mode="delete">Delete</Button>
			</div>
		{/if}

		<Button dimension="small" on:click={editHandler} mode="edit">Edit</Button>
	</div>
</div>

<style lang="scss">
	@import '../../utils/scss/_spaces.scss';
	@import '../../utils/scss/_variables.scss';
	@import '../../utils/scss/_media.scss';

	.contanier {
		min-width: 450px;
		border-radius: 2px;
		background-color: $whiteColor;
		margin: getSpace(1) * 1px;
		padding: getSpace(0.5) * 1px getSpace(1.5) * 1px;
		padding-bottom: getSpace(1.5) * 1px;
		box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
			0 1px 5px 0 rgb(0 0 0 / 20%);

		@include mobile() {
			min-width: 291px;
			max-width: 315px;
		}
		@include se() {
			min-width: 271px;
			max-width: 290px;
			margin: getSpace(1.5) * 1px;
		}
		@include fold_small() {
			min-width: 210px;
			max-width: 260px;
			margin: getSpace(1) * 1px;
		}
	}

	.contentContainer {
		padding: 0 getSpace(1) * 1px;
		@include mobile() {
			padding: getSpace(1) * 1px;
		}
	}

	.buttonContainer {
		display: flex;
		justify-content: flex-end;
		margin-top: getSpace(1.5) * 1px;
		@include mobile() {
			margin-top: getSpace(2) * 1px;
		}
	}

	.delete_button {
		margin-right: getSpace(1.5) * 1px;
	}
</style>
