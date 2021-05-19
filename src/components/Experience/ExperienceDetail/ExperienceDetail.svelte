<script lang="ts">
	import Checkbox from '../../UI/Checkbox.svelte';
	import MonthPicker from '../../MonthPicker/MonthPicker.svelte';
	import Input from '../../UI/Input.svelte';
	import Button from '../../UI/Button.svelte';
	import type { experience } from '../../../utils/types';
	import { v1 as uuid } from 'uuid';
	import { createEventDispatcher } from 'svelte';
	import Textarea from '../../UI/Textarea.svelte';

	export let id = '';
	export let company = '';
	export let startingDate = '';
	export let title = '';
	export let lastDate = '';
	export let present = false;
	export let mode: 'edit' | 'add' = 'add';
	export let moreDetails: string = '';

	const dispatch = createEventDispatcher();
	function saveHandler() {
		if (mode === 'add') {
			const newExperienceDetail: experience = { id: uuid() } as experience;
			if (company.trim()) {
				newExperienceDetail.company = company.trim();
			}
			if (title.trim()) {
				newExperienceDetail.title = title.trim();
			}
			if (startingDate) {
				newExperienceDetail.startingDate = startingDate;
			}
			if (lastDate) {
				newExperienceDetail.lastDate = lastDate;
			}
			if (moreDetails.trim()) {
				newExperienceDetail.moreDetails = moreDetails.trim().split('*');
			}
			newExperienceDetail.present = present;
			dispatch('add', { newExperienceDetail });
		} else {
			const newExperienceDetail: experience = { id } as experience;
			if (company.trim()) {
				newExperienceDetail.company = company.trim();
			}
			if (title.trim()) {
				newExperienceDetail.title = title.trim();
			}
			if (startingDate) {
				newExperienceDetail.startingDate = startingDate;
			}
			if (lastDate) {
				newExperienceDetail.lastDate = lastDate;
			}
			if (moreDetails.trim()) {
				newExperienceDetail.moreDetails = moreDetails.trim().split('*');
			}
			newExperienceDetail.present = present;
			dispatch('edit', { newExperienceDetail });
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
	<Input labelName="company" bind:value={company} />
	<div class="content_container">
		<Input labelName="Job title" bind:value={title} />
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
		<div class="end_date_container">
			<MonthPicker labelName="End" bind:value={lastDate} disabled={present} />
		</div>
	</div>
	<div class="content_container">
		<Checkbox labelName="present" bind:checked={present} a11ylabelFor="currently working" />
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
	}

	.end_date_container {
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
