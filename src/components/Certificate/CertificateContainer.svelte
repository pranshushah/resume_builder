<script lang="ts">
	import { onMount } from 'svelte';
	import MainDetailsContainer from '../MainDetailsContainer/MainDetailsContainer.svelte';
	import NextBackLink from '../NextBackLink/NextBackLink.svelte';
	import Button from '../UI/Button.svelte';
	import Header from '../UI/Header.svelte';
	import type {
		certificate,
		newCertificateObj,
		objWithId,
		resumeDetailsURL
	} from '../../utils/types';
	import { getValueFromLocalStorage } from '../../utils/helper_function/getLocalStorage';
	import { setValueToLocalStorage } from '../../utils/helper_function/setLocalStorage';
	import CertificateDetailContainer from './CertificateDetail/CertificateDetailContainer.svelte';
	import CertificateDetail from './CertificateDetail/CertificateDetail.svelte';

	export let key: 'certificate' | 'project' = 'certificate';

	let showCertificateDetailAdder = false;
	let certificateList: certificate[] = [];
	const nextLink: resumeDetailsURL = key === 'certificate' ? 'SKILLS' : 'CERTIFICATE';
	const backLink: resumeDetailsURL = key === 'certificate' ? 'PROJECTS' : 'EXPERIENCE';
	const title = key === 'certificate' ? 'Certificates' : 'Projects';

	onMount(() => {
		certificateList = getValueFromLocalStorage(key, []);
	});

	function showCertificateDetailHandler() {
		showCertificateDetailAdder = true;
	}
	function addCertificateHandler(event: CustomEvent<newCertificateObj>) {
		certificateList = [...certificateList, event.detail.newCertificateDetail];
		setValueToLocalStorage(key, certificateList);

		showCertificateDetailAdder = false;
	}

	function editCertificateHandler(event: CustomEvent<newCertificateObj>) {
		const editIndex = certificateList.findIndex(
			(certificate) => certificate.id === event.detail.newCertificateDetail.id
		);
		if (editIndex !== -1) {
			const newCertificateList = [...certificateList];
			newCertificateList[editIndex] = event.detail.newCertificateDetail;
			certificateList = newCertificateList;
			setValueToLocalStorage(key, certificateList);
		}
		showCertificateDetailAdder = false;
	}

	function deleteExperienceHandler(event: CustomEvent<objWithId>) {
		certificateList = certificateList.filter((certificate) => certificate.id !== event.detail.id);
		setValueToLocalStorage(key, certificateList);
	}
	function showAddButtonHandler() {
		showCertificateDetailAdder = false;
	}
</script>

<MainDetailsContainer>
	<Header>{title}</Header>
	{#each certificateList as certificateObj}
		<div class="content_container">
			<CertificateDetailContainer
				{...certificateObj}
				moreDetails={certificateObj.moreDetails ? certificateObj.moreDetails.join('*') : ''}
				on:delete={deleteExperienceHandler}
				on:edit={editCertificateHandler}
				on:add={addCertificateHandler}
			/>
		</div>
	{/each}
	<div class="button_container">
		{#if showCertificateDetailAdder}
			<CertificateDetail on:add={addCertificateHandler} on:show_add_button={showAddButtonHandler} />
		{:else}
			<Button on:click={showCertificateDetailHandler} mode="add">Add {key}</Button>
		{/if}
	</div>
	<NextBackLink {nextLink} {backLink} />
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
