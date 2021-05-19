<script lang="ts">
	import Input from '../../UI/Input.svelte';
	import Button from '../../UI/Button.svelte';
	import type { certificate } from '../../../utils/types';
	import { v1 as uuid } from 'uuid';
	import { createEventDispatcher } from 'svelte';
	import Textarea from '../../UI/Textarea.svelte';

	export let id = '';
	export let title = '';
	export let link = '';
	export let mode: 'edit' | 'add' = 'add';
	export let moreDetails = '';

	const dispatch = createEventDispatcher();
	function saveHandler() {
		if (mode === 'add') {
			const newCertificateDetail: certificate = { id: uuid() } as certificate;
			if (title.trim()) {
				newCertificateDetail.title = title.trim();
			}
			if (link.trim()) {
				newCertificateDetail.link = link.trim();
			}
			if (moreDetails.trim()) {
				newCertificateDetail.moreDetails = moreDetails.trim().split('*');
			}
			dispatch('add', { newCertificateDetail });
		} else {
			const newCertificateDetail: certificate = { id } as certificate;
			if (title.trim()) {
				newCertificateDetail.title = title.trim();
			}
			if (link.trim()) {
				newCertificateDetail.link = link.trim();
			}
			if (moreDetails.trim()) {
				newCertificateDetail.moreDetails = moreDetails.trim().split('*');
			}
			dispatch('edit', { newCertificateDetail });
		}
	}
	function cancelClickHandler() {
		if (mode === 'add') {
			dispatch('show_add_button');
		} else {
			dispatch('show_card');
		}
	}
</script>

<div class="container">
	<Input labelName="title" bind:value={title} />
	<div class="content_container">
		<Input labelName="link" bind:value={link} />
	</div>
	<div class="content_container">
		<Textarea
			bind:value={moreDetails}
			message="use * to create bullet points in resume."
			labelName="tell us more about it"
		/>
	</div>
	<div class="button_container">
		<div class="cancel_button">
			<Button dimension="small" inverted on:click={cancelClickHandler}>Cancel</Button>
		</div>
		<Button dimension="small" on:click={saveHandler} mode="save">Save</Button>
	</div>
</div>

<style lang="scss">
	@import '../../../utils/scss/spaces';
	@import '../../../utils/scss/media';

	.content_container {
		margin-top: getSpace(3) * 1px;
	}

	.container {
		margin-top: getSpace(3) * 1px;
		margin-left: getSpace(3) * 1px;
		@include se() {
			margin-left: getSpace(1.5) * 1px;
		}
	}

	.button_container {
		display: flex;
		justify-content: flex-end;
		width: 420px;
		margin-top: getSpace(2) * 1px;
		margin-bottom: getSpace(2) * 1px;
		margin-right: getSpace(1) * 1px;
		@include mobile() {
			max-width: 320px;
		}
		@include se() {
			max-width: 290px;
		}
		@include fold_small() {
			max-width: 230px;
		}
	}
	.cancel_button {
		margin-right: getSpace(1.5) * 1px;
	}
</style>
