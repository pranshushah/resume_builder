<script lang="ts">
	import { onMount } from 'svelte';
	import MainDetailsContainer from '../MainDetailsContainer/MainDetailsContainer.svelte';
	import NextBackLink from '../NextBackLink/NextBackLink.svelte';
	import Button from '../UI/Button.svelte';
	import Header from '../UI/Header.svelte';
	import type { experience, newExperienceObj, objWithId } from '../../utils/types';
	import { getValueFromLocalStorage } from '../../utils/helper_function/getLocalStorage';
	import { setValueToLocalStorage } from '../../utils/helper_function/setLocalStorage';
	import ExperienceDetailContainer from './ExperienceDetail/ExperienceDetailContainer.svelte';
	import ExperienceDetail from './ExperienceDetail/ExperienceDetail.svelte';

	let showExperienceDetailAdder = false;
	let experienceList: experience[] = [];

	onMount(() => {
		experienceList = getValueFromLocalStorage('experience', []);
	});

	function addJobHandler() {
		showExperienceDetailAdder = true;
	}
	function addExperienceHandler(event: CustomEvent<newExperienceObj>) {
		experienceList = [...experienceList, event.detail.newExperienceDetail];
		setValueToLocalStorage('experience', experienceList);

		showExperienceDetailAdder = false;
	}

	function editExperienceHandler(event: CustomEvent<newExperienceObj>) {
		const editIndex = experienceList.findIndex(
			(experience) => experience.id === event.detail.newExperienceDetail.id
		);
		if (editIndex !== -1) {
			const newExperienceList = [...experienceList];
			newExperienceList[editIndex] = event.detail.newExperienceDetail;
			experienceList = newExperienceList;
			setValueToLocalStorage('experience', experienceList);
		}
		showExperienceDetailAdder = false;
	}

	function deleteExperienceHandler(event: CustomEvent<objWithId>) {
		experienceList = experienceList.filter((experience) => experience.id !== event.detail.id);
		setValueToLocalStorage('experience', experienceList);
	}
	function showAddButtonHandler() {
		showExperienceDetailAdder = false;
	}
</script>

<MainDetailsContainer>
	<Header>Experience</Header>
	{#each experienceList as experienceObj}
		<div class="content_container">
			<ExperienceDetailContainer
				{...experienceObj}
				moreDetails={experienceObj.moreDetails ? experienceObj.moreDetails.join('*') : ''}
				on:delete={deleteExperienceHandler}
				on:edit={editExperienceHandler}
				on:add={addExperienceHandler}
			/>
		</div>
	{/each}
	<div class="button_container">
		{#if showExperienceDetailAdder}
			<ExperienceDetail on:add={addExperienceHandler} on:show_add_button={showAddButtonHandler} />
		{:else}
			<Button on:click={addJobHandler} mode="add">Add Job</Button>
		{/if}
	</div>
	<NextBackLink nextLink="PROJECTS" backLink="EDUCATION" />
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
