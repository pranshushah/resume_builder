<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { newCertificateObj } from '../../../utils/types';
	import CertificateCard from '../../ExperienceEducationCertificatesCard/ExperienceEducationCertificatesCard.svelte';
	import CertificateDetail from './CertificateDetail.svelte';
	import Modal from '../../UI/Modal.svelte';

	export let id = '';
	export let title = '';
	export let link = '';
	export let mode: 'edit' | 'add' = 'edit';
	export let moreDetails = '';
	let showCard = true;
	let showDeleteModal = false;
	const dispatch = createEventDispatcher();

	function showEditDetailsHandler() {
		showCard = false;
	}
	function addDetailsHandler(event: CustomEvent<newCertificateObj>) {
		dispatch('add', { newCertificateDetail: event.detail.newCertificateDetail });
		showCard = true;
	}
	function editDetailsHandler(event: CustomEvent<newCertificateObj>) {
		dispatch('edit', { newCertificateDetail: event.detail.newCertificateDetail });
		showCard = true;
	}
	function deleteCertificateHandler() {
		showDeleteModal = true;
	}
	function showCardHandler() {
		showCard = true;
	}

	function cancelDeleteModalHandler() {
		showDeleteModal = false;
	}
	function confirmDeleteModalHandler() {
		showDeleteModal = false;
		dispatch('delete', { id });
	}
</script>

<Modal
	show={showDeleteModal}
	mode="education"
	on:cancel={cancelDeleteModalHandler}
	on:confirm={confirmDeleteModalHandler}
/>
{#if showCard}
	<CertificateCard
		content1={title}
		content2={link}
		moreDetails={moreDetails.split('*')}
		titleName1="title"
		titleName2="link"
		on:delete={deleteCertificateHandler}
		on:edit={showEditDetailsHandler}
	/>
{:else}
	<CertificateDetail
		{id}
		{mode}
		{title}
		{link}
		{moreDetails}
		on:add={addDetailsHandler}
		on:edit={editDetailsHandler}
		on:show_card={showCardHandler}
	/>
{/if}
