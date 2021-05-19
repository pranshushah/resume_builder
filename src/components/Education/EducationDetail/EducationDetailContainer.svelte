<script lang="ts">
	import EducationDetail from './EducationDetail.svelte';
	import EducationCard from '../../ExperienceEducationCertificatesCard/ExperienceEducationCertificatesCard.svelte';
	import { createEventDispatcher } from 'svelte';
	import type { newEducationObj } from '../../../utils/types';
	import Modal from '../../UI/Modal.svelte';

	export let id = '';
	export let mode: 'edit' | 'add' = 'edit';
	export let collegeValue = '';
	export let degreeValue = '';
	export let startingDate = '';
	export let graduateDate = '';
	export let majorValue = '';
	export let gradeValue = '';
	export let presentValue = false;
	export let moreDetails = '';

	let showEducationCard = true;
	let showDeleteModal = false;
	const dispatch = createEventDispatcher();

	function showEditDetailsHandler() {
		showEducationCard = false;
	}
	function addDetailsHandler(event: CustomEvent<newEducationObj>) {
		dispatch('add', { neweducationDetail: event.detail.neweducationDetail });
		showEducationCard = true;
	}
	function editDetailsHandler(event: CustomEvent<newEducationObj>) {
		dispatch('edit', { neweducationDetail: event.detail.neweducationDetail });
		showEducationCard = true;
	}
	function deleteEducationHandler() {
		showDeleteModal = true;
	}
	function showCardHandler() {
		showEducationCard = true;
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
{#if showEducationCard}
	<EducationCard
		present={presentValue}
		content1={collegeValue}
		content2={majorValue ? `${degreeValue} (${majorValue})` : degreeValue}
		lastDate={graduateDate}
		moreDetails={moreDetails.split('*')}
		{startingDate}
		titleName1="college/school"
		titleName2="degree"
		titleName3="year"
		on:edit={showEditDetailsHandler}
		on:delete={deleteEducationHandler}
	/>
{:else}
	<EducationDetail
		{id}
		{mode}
		{collegeValue}
		{degreeValue}
		{moreDetails}
		{startingDate}
		{graduateDate}
		{majorValue}
		{gradeValue}
		{presentValue}
		on:add={addDetailsHandler}
		on:edit={editDetailsHandler}
		on:show_card={showCardHandler}
	/>
{/if}
