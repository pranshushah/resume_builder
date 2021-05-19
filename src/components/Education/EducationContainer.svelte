<script lang="ts">
	import type { education, newEducationObj, objWithId } from '../../utils/types';
	import { onMount } from 'svelte';
	import { getValueFromLocalStorage } from '../../utils/helper_function/getLocalStorage';

	import MainDetailsContainer from '../MainDetailsContainer/MainDetailsContainer.svelte';
	import NextBackLink from '../NextBackLink/NextBackLink.svelte';
	import Button from '../UI/Button.svelte';
	import Header from '../UI/Header.svelte';
	import EducationDetail from './EducationDetail/EducationDetail.svelte';
	import EducationDetailContainer from './EducationDetail/EducationDetailContainer.svelte';
	import { setValueToLocalStorage } from '../../utils/helper_function/setLocalStorage';

	let showDetailAdder = false;
	let educations: education[] = [];

	onMount(() => {
		educations = getValueFromLocalStorage('education', []);
	});

	function showDetailAdderHandler() {
		showDetailAdder = true;
	}

	function addEducationHandler(event: CustomEvent<newEducationObj>) {
		const newEducations = [...educations];
		newEducations.push(event.detail.neweducationDetail);
		educations = newEducations;
		setValueToLocalStorage('education', educations);

		showDetailAdder = false;
	}

	function editEducationHandler(event: CustomEvent<newEducationObj>) {
		const editIndex = educations.findIndex(
			(education) => education.id === event.detail.neweducationDetail.id
		);
		if (editIndex !== -1) {
			const newEducations = [...educations];
			newEducations[editIndex] = event.detail.neweducationDetail;
			educations = newEducations;
			setValueToLocalStorage('education', educations);
		}
		showDetailAdder = false;
	}

	function deleteEducationHandler(event: CustomEvent<objWithId>) {
		educations = educations.filter((education) => education.id !== event.detail.id);
		setValueToLocalStorage('education', educations);
		showDetailAdder = false;
	}
	function showAddButtonHandler() {
		showDetailAdder = false;
	}
</script>

<MainDetailsContainer>
	<Header>Education</Header>
	{#each educations as educationObj}
		<div class="content_container">
			<EducationDetailContainer
				id={educationObj.id}
				moreDetails={educationObj.moreDetails ? educationObj.moreDetails.join('*') : ''}
				collegeValue={educationObj.college}
				degreeValue={educationObj.degree}
				startingDate={educationObj.startingDate}
				graduateDate={educationObj.graduationDate}
				majorValue={educationObj.major}
				gradeValue={educationObj.grade}
				presentValue={educationObj.present}
				on:delete={deleteEducationHandler}
				on:edit={editEducationHandler}
				on:add={addEducationHandler}
			/>
		</div>
	{/each}
	<div class="button_container">
		{#if showDetailAdder}
			<EducationDetail on:add={addEducationHandler} on:show_add_button={showAddButtonHandler} />
		{:else}
			<Button on:click={showDetailAdderHandler} mode="add">Add school / college</Button>
		{/if}
	</div>
	<NextBackLink nextLink="EXPERIENCE" backLink="SOCIALMEDIA" />
</MainDetailsContainer>

<style lang="scss">
	@import '../../utils/scss/spaces';
	@import '../../utils/scss/media';

	.content_container {
		margin-top: getSpace(3) * 1px;
	}

	.button_container {
		margin: getSpace(4) * 1px getSpace(1) * 1px;
		display: flex;
		justify-content: center;
		@include mobile() {
			margin: getSpace(4) * 1px 0;
			margin-left: -16px;
		}
		@include se() {
			margin: getSpace(4) * 1px 0;
			margin-left: -12px;
		}
	}
</style>
