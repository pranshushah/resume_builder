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
	<div class="template6_container">
		<div class="template6_container__header_container">
			<h1 class="template6_container__header">{name}</h1>
			<p class="template6_container__jobTitle">{jobTitle}</p>
		</div>
		<div class="template6_container__personal_container">
			<h3 class="template6_container__sub_header template6_container__sub_header--center">
				Personal profile
			</h3>
			<p class="template6_container__personal">{personal}</p>
		</div>
		<div class="template6_container__details_container">
			<div class="template6_container__left_container">
				<h3 class="template6_container__sub_header template6_container__sub_header--color-blue">
					Skills
				</h3>
				<ul
					class="template6_container__skills_list template6_container__list template6_container__list-circle"
				>
					{#each skills as skill}
						<li class="template6_container__skill_element">{skill.value}</li>
					{/each}
				</ul>
				<h3 class="template6_container__sub_header template6_container__sub_header--color-blue">
					contact details
				</h3>
				<ul class="template6_container__list template6_container__list-disc">
					{#if email}
						<li>Email : {email}</li>
					{/if}
					{#if phone}
						<li>Phone : {phone}</li>
					{/if}
					{#if address}
						<li>Address : {address}</li>
					{/if}
					{#if twitter}
						<li>Twitter : /{twitter}</li>
					{/if}
					{#if github}
						<li>github : /{github}</li>
					{/if}
					{#if phone}
						<li>Phone : {phone}</li>
					{/if}
					{#if linkdin}
						<li>Linkdin : {linkdin}</li>
					{/if}
					{#if website}
						<li>Website : {website}</li>
					{/if}
					{#if blog}
						<li>Blog : {blog}</li>
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
				<h3 class="template6_container__sub_header template6_container__sub_header--color-blue">
					certificates
				</h3>
				<ul class="template6_container__list template6_container__list-disc">
					{#each certificates as certificate}
						<li>
							<p class="breathingspace">{certificate.title}</p>
							<ul class="template6_container__list template6_container__list-circle">
								{#each certificate.moreDetails as detail}
									<li>{detail}</li>
								{/each}
							</ul>
						</li>
					{/each}
				</ul>
			</div>
			<div class="template6_container__right_container">
				<h3 class="template6_container__sub_header">Employment History :-</h3>
				<ul class="template6_container__list template6_container__list-disc">
					{#each experiences as experience}
						<li><h4 class="template6_container__sub_sub_header">{experience.title}</h4></li>
						<div class="template6_container__college_title">
							<span>{experience.company} | </span><span>{experience.startingDate} - </span>
							{#if experience.present}
								<span>Present</span>
							{:else}
								<span>{experience.lastDate}</span>
							{/if}
						</div>
						<ul class="template6_container__list template6_container__list-circle">
							{#each experience.moreDetails as detail}
								<li>{detail}</li>
							{/each}
						</ul>
					{/each}
				</ul>
				<h3 class="template6_container__sub_header">Previous Education :-</h3>
				<ul class="template6_container__list template6_container__list-disc">
					{#each educations as education}
						<li>
							<h4 class="template6_container__sub_sub_header">{education.college}</h4>
						</li>
						<div class="template6_container__college_title">
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
						<ul class="template6_container__list template6_container__list-circle">
							{#if education.moreDetails}
								{#each education.moreDetails as detail}
									<li>{detail}</li>
								{/each}
							{/if}
						</ul>
					{/each}
				</ul>
				<h3 class="template6_container__sub_header">Projects :-</h3>
				<ul class="template6_container__list template6_container__list-disc">
					{#each projects as project}
						<li>
							<p class="breathingspace">{project.title}</p>
							<ul class="template6_container__list template6_container__list-circle">
								{#each project.moreDetails as detail}
									<li>{detail}</li>
								{/each}
							</ul>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div class="link_container">
		<NextBackLink mode="template" nextLink="template1" backLink="template5" />
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
	.template6_container {
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
	.template6_container__header_container {
		padding: getSpace(3) * 1px;
	}
	.template6_container__header {
		color: #17a5aa;
		letter-spacing: 2px;
		text-align: center;
		font-weight: 600;
		line-height: map-get($map: $line-height, $key: 'large') * 1px;
		text-transform: uppercase;
		text-align: center;
		font-size: getFontSize(10) * 1px;
		margin-bottom: getSpace(1) * 1px;
	}
	.template6_container__jobTitle {
		text-align: center;
		font-size: getFontSize(5) * 1px;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
	}
	.template6_container__personal_container {
		color: #f8f8f8;
		background-color: #17a5aa;
		padding: getSpace(2) * 1px;
	}
	.template6_container__personal {
		margin-bottom: getSpace(1) * 1px;
		font-size: getFontSize(3) * 1px;
		text-align: center;
	}

	.template6_container__sub_header {
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: getSpace(2) * 1px 0;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
	}
	.template6_container__sub_header--center {
		text-align: center;
	}
	.template6_container__sub_header--color-blue {
		color: #17a5aa;
		margin: getSpace(1) * 1px 0;
	}
	.template6_container__details_container {
		display: flex;
		color: rgb(10, 10, 10);
		margin: getSpace(1) * 1px 0;
	}
	.template6_container__left_container {
		width: 50%;
		padding: getSpace(4) * 1px getSpace(2) * 1px;
	}
	.template6_container__list {
		font-size: getFontSize(3) * 1px;
		margin-block-start: 0;
		padding-left: 8px;
	}
	.template6_container__list-circle {
		list-style: circle;
		padding-left: 16px;
	}
	.template6_container__list-disc {
		list-style: disc;
		padding-left: 16px;
	}

	.template6_container__skills_list {
		display: flex;
		flex-wrap: wrap;
	}

	.template6_container__skill_element {
		width: 50%;
		margin: getSpace(0.5) * 1px 0;
	}
	.template6_container__right_container {
		padding: getSpace(4) * 1px getSpace(2) * 1px;
		background-color: #17a5aa;
		color: #f8f8f8;
	}
	.template6_container__sub_sub_header {
		text-transform: capitalize;
		margin: getSpace(1) * 1px 0;
		margin-top: getSpace(2) * 1px;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
	}
	.template6_container__college_title {
		text-transform: capitalize;
		padding: getSpace(1) * 1px 0;
	}
	.breathingspace {
		margin: getSpace(1) * 1px 0;
	}
</style>
