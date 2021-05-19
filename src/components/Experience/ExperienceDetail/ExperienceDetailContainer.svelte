<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { newExperienceObj } from '../../../utils/types';
	import ExperienceCard from '../../ExperienceEducationCertificatesCard/ExperienceEducationCertificatesCard.svelte';
	import ExperienceDetail from './ExperienceDetail.svelte';
	import Modal from '../../UI/Modal.svelte';

	export let id = '';
	export let company = '';
	export let startingDate = '';
	export let title = '';
	export let lastDate = '';
	export let present = false;
	export let mode: 'edit' | 'add' = 'edit';
	export let moreDetails = '';

	let showCard = true;
	let showDeleteModal = false;

	const dispatch = createEventDispatcher();

	function showEditDetailsHandler() {
		showCard = false;
	}
	function addDetailsHandler(event: CustomEvent<newExperienceObj>) {
		dispatch('add', { newExperienceDetail: event.detail.newExperienceDetail });
		showCard = true;
	}
	function editDetailsHandler(event: CustomEvent<newExperienceObj>) {
		dispatch('edit', { newExperienceDetail: event.detail.newExperienceDetail });
		showCard = true;
	}
	function deleteExperienceHandler() {
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
	mode="experience"
	on:cancel={cancelDeleteModalHandler}
	on:confirm={confirmDeleteModalHandler}
/>
{#if showCard}
	<ExperienceCard
		content1={company}
		content2={title}
		{startingDate}
		{lastDate}
		{present}
		moreDetails={moreDetails.split('*')}
		titleName1="company"
		titleName2="Job Title"
		titleName3="year"
		on:delete={deleteExperienceHandler}
		on:edit={showEditDetailsHandler}
	/>
{:else}
	<ExperienceDetail
		{id}
		{mode}
		{present}
		{lastDate}
		{title}
		{startingDate}
		{company}
		{moreDetails}
		on:add={addDetailsHandler}
		on:edit={editDetailsHandler}
		on:show_card={showCardHandler}
	/>
{/if}
