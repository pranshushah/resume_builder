<script lang="ts">
	import Button from '../../UI/Button.svelte';
	import Checkbox from '../../UI/Checkbox.svelte';
	import MonthPicker from '../../MonthPicker/MonthPicker.svelte';
	import Input from '../../UI/Input.svelte';
	import { v1 as uuid } from 'uuid';
	import { createEventDispatcher } from 'svelte';
	import type { education } from '../../../utils/types';
	import Textarea from '../../UI/Textarea.svelte';

	export let id = '';
	export let mode: 'edit' | 'add' = 'add';
	export let collegeValue: string = '';
	export let degreeValue: string = '';
	export let startingDate: string = '';
	export let graduateDate: string = '';
	export let majorValue: string = '';
	export let gradeValue: string = '';
	export let presentValue: boolean = false;
	export let moreDetails = '';

	const dispatch = createEventDispatcher();

	function saveHandler() {
		if (mode === 'add') {
			const neweducationDetail: education = { id: uuid(), college: collegeValue.trim() };
			if (degreeValue.trim()) {
				neweducationDetail.degree = degreeValue.trim();
			}
			if (majorValue.trim()) {
				neweducationDetail.major = majorValue.trim();
			}
			if (gradeValue.trim()) {
				neweducationDetail.grade = gradeValue.trim();
			}
			if (startingDate) {
				neweducationDetail.startingDate = startingDate;
			}
			if (graduateDate) {
				neweducationDetail.graduationDate = graduateDate;
			}
			if (moreDetails.trim()) {
				neweducationDetail.moreDetails = moreDetails.trim().split('*');
			}
			neweducationDetail.present = presentValue;
			dispatch('add', { neweducationDetail });
		} else {
			const neweducationDetail: education = { id, college: collegeValue.trim() };
			if (degreeValue.trim()) {
				neweducationDetail.degree = degreeValue.trim();
			}
			if (majorValue.trim()) {
				neweducationDetail.major = majorValue.trim();
			}
			if (gradeValue.trim()) {
				neweducationDetail.grade = gradeValue.trim();
			}
			if (startingDate) {
				neweducationDetail.startingDate = startingDate;
			}
			if (graduateDate) {
				neweducationDetail.graduationDate = graduateDate;
			}
			if (moreDetails.trim()) {
				neweducationDetail.moreDetails = moreDetails.trim().split('*');
			}
			neweducationDetail.present = presentValue;
			dispatch('edit', { neweducationDetail });
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
	<Input labelName="School/College" bind:value={collegeValue} />
	<div class="content_container">
		<Input labelName="Degree" bind:value={degreeValue} />
	</div>
	<div class="content_container">
		<Textarea
			bind:value={moreDetails}
			message="use * to create bullet points in resume."
			labelName="tell us more about it"
		/>
	</div>
	<div class="date_container">
		<MonthPicker labelName="Start" bind:value={startingDate} />
		<div class="graducation_container">
			<MonthPicker labelName="Graduate" bind:value={graduateDate} disabled={presentValue} />
		</div>
	</div>
	<div class="content_container">
		<Checkbox labelName="present" bind:checked={presentValue} a11ylabelFor="currently studying" />
	</div>
	<div class="content_container">
		<Input labelName="Major/Stream" bind:value={majorValue} />
	</div>
	<div class="content_container">
		<Input labelName="Grade" bind:value={gradeValue} />
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

	.date_container {
		margin-top: getSpace(3) * 1px;
		display: flex;
		@include mobile() {
			flex-direction: column;
		}
	}

	.container {
		margin-top: getSpace(3) * 1px;
		margin-left: getSpace(3) * 1px;
		@include se() {
			margin-left: getSpace(1.5) * 1px;
		}
	}

	.graducation_container {
		margin-left: getSpace(1) * 1px;
		@include mobile() {
			margin-left: 0;
			margin-top: getSpace(3) * 1px;
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
			max-width: 240px;
		}
	}
	.cancel_button {
		margin-right: getSpace(1.5) * 1px;
	}
</style>
