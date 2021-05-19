<script lang="ts">
	import { getValueFromLocalStorage } from '../../utils/helper_function/getLocalStorage';
	import MainDetailsContainer from '../MainDetailsContainer/MainDetailsContainer.svelte';
	import { onMount } from 'svelte';
	import type { certificate, education, experience, tagElement } from '../../utils/types';
	import { getUserNameFromURL } from '../../utils/helper_function/getUserNameFromURL';
	import NextBackLink from '../NextBackLink/NextBackLink.svelte';
	import Button from '../UI/Button.svelte';
	import { print } from '../../utils/helper_function/print';

	let name: string = '';
	let jobTitle: string = '';
	let personal: string;
	let email: string = '';
	let phone: string = '';
	let twitter: string = '';
	let github: string = '';
	let linkdin: string = '';
	let website: string = '';
	let blog: string = '';
	let instagram: string = '';
	let dribble: string = '';
	let behance: string = '';
	let youtube: string = '';
	let facebook: string = '';
	let address: string = '';
	let skills: tagElement[] = [];
	let certificates: certificate[] = [];
	let projects: certificate[] = [];
	let experiences: experience[] = [];
	let educations: education[] = [];
	onMount(() => {
		name = getValueFromLocalStorage('name', '');
		jobTitle = getValueFromLocalStorage('jobTitle', '');
		personal = getValueFromLocalStorage('personal', '');
		email = getValueFromLocalStorage('email', '');
		phone = getValueFromLocalStorage('phone', '');
		twitter = getUserNameFromURL('twitter');
		github = getUserNameFromURL('github');
		linkdin = getUserNameFromURL('linkdin');
		website = getValueFromLocalStorage('website', '');
		blog = getValueFromLocalStorage('blog', '');
		instagram = getUserNameFromURL('instagram');
		dribble = getUserNameFromURL('dribble');
		behance = getUserNameFromURL('behance');
		youtube = getUserNameFromURL('youtube');
		facebook = getUserNameFromURL('facebook');
		address = getValueFromLocalStorage('address', '');

		skills = getValueFromLocalStorage('skills', []);
		certificates = getValueFromLocalStorage('certificate', []);
		projects = getValueFromLocalStorage('project', []);
		experiences = getValueFromLocalStorage('experience', []);
		educations = getValueFromLocalStorage('education', []);
	});
</script>

<MainDetailsContainer>
	<div class="download_button_container">
		<Button dimension="medium" mode="download" on:click={print}>Download Resume</Button>
	</div>
	<div class="template4_container">
		<div class="template4_container__left_container">
			<div class="template4_container__header_container">
				<h1 class="template4_container__header">{name}</h1>
				<p class="template4_container__jobTitle">{jobTitle}</p>
			</div>
			<h3 class="template4_container__sub_header">Personal profile</h3>
			<p class="template4_container__personal">{personal}</p>
			<h3 class="template4_container__sub_header">contact details</h3>
			<ul class="template4_container__contact_list">
				{#if email}
					<li>Email : {email}</li>
				{/if}
				{#if phone}
					<li>Phone : {phone}</li>
				{/if}
				{#if address}
					<li>Address : {address}</li>
				{/if}
				{#if website}
					<li>Website : {website}</li>
				{/if}
				{#if blog}
					<li>Blog : {blog}</li>
				{/if}
				{#if twitter}
					<li>Twitter : /{twitter}</li>
				{/if}
				{#if github}
					<li>github : /{github}</li>
				{/if}
				{#if linkdin}
					<li>Linkdin : {linkdin}</li>
				{/if}
				{#if instagram}
					<li>Instagram : {instagram}</li>
				{/if}
				{#if dribble}
					<li>Dribble : {dribble}</li>
				{/if}
				{#if behance}
					<li>Behance : {behance}</li>
				{/if}
				{#if facebook}
					<li>Facebook : {facebook}</li>
				{/if}
				{#if youtube}
					<li>Youtube : {youtube}</li>
				{/if}
			</ul>
			<h3 class="template4_container__sub_header">Certificates</h3>
			<ul class="template4_container__certificate_list">
				{#each certificates as certificate}
					<li>
						<p class="template4_container__certificate_title">{certificate.title}</p>
						<ul class="template4_container__sub_list">
							{#each certificate.moreDetails as detail}
								<li>{detail}</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
			<h3 class="template4_container__sub_header">Skills</h3>
			<ul class="template4_container__skills_list">
				{#each skills as skill}
					<li class="template4_container__skill_element">{skill.value}</li>
				{/each}
			</ul>
		</div>
		<div class="template4_container__right_container">
			<h3 class="template4_container__sub_header">Employment History</h3>
			<ul class="template4_container__employment_list">
				{#each experiences as experience}
					<li><h4 class="template4_container__sub_sub_header">{experience.title}</h4></li>
					<div class="template4_container__college_title">
						<span>{experience.company} | </span><span>{experience.startingDate} - </span>
						{#if experience.present}
							<span>Present</span>
						{:else}
							<span>{experience.lastDate}</span>
						{/if}
					</div>
					<ul class="template4_container__sub_list">
						{#each experience.moreDetails as detail}
							<li>{detail}</li>
						{/each}
					</ul>
				{/each}
			</ul>
			<h3 class="template4_container__sub_header">Previous Education</h3>
			<ul class="template4_container__employment_list">
				{#each educations as education}
					<li><h4 class="template4_container__sub_sub_header">{education.college}</h4></li>
					<div class="template4_container__college_title">
						<span
							>{education.degree}
							{#if education.major} <span>({education.major})</span> {/if} |
						</span><span>{education.startingDate} - </span>
						{#if education.present}
							<span>Present</span>
						{:else}
							<span>{education.graduationDate}</span>
						{/if}
					</div>
					<ul class="template4_container__sub_list">
						{#if education.moreDetails}
							{#each education.moreDetails as detail}
								<li>{detail}</li>
							{/each}
						{/if}
					</ul>
				{/each}
			</ul>
			<h3 class="template4_container__sub_header">Projects</h3>
			<ul class="template4_container__certificate_list">
				{#each projects as project}
					<li>
						<p class="template4_container__certificate_title">{project.title}</p>
						<ul class="template4_container__sub_list">
							{#each project.moreDetails as detail}
								<li>{detail}</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="link_container">
		<NextBackLink mode="template" nextLink="template5" backLink="template3" />
	</div>
</MainDetailsContainer>

<style lang="scss">
	@import '../../utils/scss/_spaces.scss';
	@import '../../utils/scss/_media.scss';
	@import '../../utils/scss/_fontSize.scss';
	@import '../../utils/scss/lineHeight.scss';

	.link_container {
		@include print() {
			display: none;
		}
	}

	.download_button_container {
		display: flex;
		justify-content: flex-end;
		padding: getSpace(2) * 1px 0;
		@include print() {
			display: none;
		}
	}

	.template4_container {
		display: flex;
		margin: getSpace(2) * 1px 0;
		width: 770px;
		@include print() {
			margin: 0;
			width: 900px;
		}
		@include tablet() {
			width: 720px;
		}
	}
	.template4_container__left_container {
		width: 55%;
		background-color: #ebd2d4;
		padding: getSpace(3) * 1px;
		padding-right: getSpace(2) * 1px;
	}
	.template4_container__header_container {
		margin: getSpace(2) * 1px 0;
	}
	.template4_container__header {
		color: #b0484e;
		letter-spacing: 2px;
		text-align: center;
		font-weight: 600;
		line-height: map-get($map: $line-height, $key: 'large') * 1px;
		text-transform: uppercase;
		font-size: getFontSize(8) * 1px;
		margin-bottom: getSpace(1) * 1px;
	}
	.template4_container__jobTitle {
		text-align: center;
		font-size: getFontSize(5) * 1px;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		margin-bottom: getSpace(6) * 1px;
	}
	.template4_container__personal {
		margin: getSpace(1) * 1px;
		font-size: getFontSize(3) * 1px;
	}
	.template4_container__sub_header {
		color: #b0484e;
		text-transform: uppercase;
		text-align: center;
		letter-spacing: 1px;
		margin: getSpace(2) * 1px 0;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
	}
	.template4_container__certificate_list {
		font-size: getFontSize(2) * 1px;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		padding-left: 16px;
		list-style: disc;
	}

	.template4_container__certificate_title {
		text-transform: capitalize;
		margin: getSpace(1.5) * 1px 0;
	}
	.template4_container__sub_list {
		font-size: getFontSize(2) * 1px;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		padding-left: 16px;
		list-style: circle;
	}
	.template4_container__contact_list {
		font-size: getFontSize(3) * 1px;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		padding-left: 16px;
		list-style: disc;
	}
	.template4_container__skills_list {
		padding-left: 8px;
		display: flex;
		flex-wrap: wrap;
		list-style: circle;
	}
	.template4_container__skill_element {
		width: 50%;
		margin: getSpace(0.5) * 1px 0;
	}
	.template4_container__right_container {
		padding: getSpace(3) * 1px;
	}
	.template4_container__employment_list {
		font-size: getFontSize(3) * 1px;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		padding-left: 1px;
		list-style: none;
	}
	.template4_container__sub_sub_header {
		text-transform: capitalize;
		padding: getSpace(1) * 1px 0;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
	}
	.template4_container__college_title {
		text-transform: capitalize;
		padding: getSpace(0.5) * 1px 0;
	}
</style>
