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
	<div class="template5_container">
		<div class="template5_container__header_container">
			<h1 class="template5_container__header">{name}</h1>
			<p class="template5_container__jobTitle">{jobTitle}</p>
		</div>
		<div class="template5_container__details_container">
			<div class="template5_container__left_container">
				<h3 class="template5_container__sub_header">contact details</h3>
				<ul class="template5_container__contact_list">
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
				<h3 class="template5_container__sub_header">Skills</h3>
				<ul class="template5_container__skill_list">
					{#each skills as skill}
						<li class="template5_container__skill_element">{skill.value}</li>
					{/each}
				</ul>
				<h3 class="template5_container__sub_header">Certificates</h3>
				<ul class="template5_container__certificate_list">
					{#each certificates as certificate}
						<li>
							<p>{certificate.title}</p>
							<ul class="template5_container__sub_list">
								{#each certificate.moreDetails as detail}
									<li>{detail}</li>
								{/each}
							</ul>
						</li>
					{/each}
				</ul>
			</div>
			<div class="template5_container__right_container">
				<h3 class="template5_container__right_sub_header">About me</h3>
				<p class="template5_container__personal">{personal}</p>
				<div class="template5_container__red_horizontal_line" />
				<h3 class="template5_container__right_sub_header">Employment History</h3>
				<ul class="template5_container__employment_list">
					{#each experiences as experience}
						<h4 class="template5_container__sub_sub_header">{experience.title}</h4>
						<div class="template5_container__college_title">
							<span>{experience.company} | </span><span>{experience.startingDate} - </span>
							{#if experience.present}
								<span>Present</span>
							{:else}
								<span>{experience.lastDate}</span>
							{/if}
						</div>
						<ul class="template5_container__sub_list">
							{#each experience.moreDetails as detail}
								<li>{detail}</li>
							{/each}
						</ul>
					{/each}
				</ul>
				<div class="template5_container__red_horizontal_line" />
				<h3 class="template5_container__right_sub_header">Education</h3>
				<ul class="template5_container__employment_list">
					{#each educations as education}
						<h4 class="template5_container__sub_sub_header">{education.college}</h4>
						<div class="template5_container__college_title">
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
						<ul class="template5_container__sub_list">
							{#if education.moreDetails}
								{#each education.moreDetails as detail}
									<li>{detail}</li>
								{/each}
							{/if}
						</ul>
					{/each}
				</ul>
				<div class="template5_container__red_horizontal_line" />
				<h3 class="template5_container__right_sub_header">Projects</h3>
				<ul class="template5_container__certificate_list">
					{#each projects as project}
						<li>
							<p>{project.title}</p>
							<ul class="template5_container__sub_list">
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
		<NextBackLink mode="template" nextLink="template6" backLink="template4" />
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
	.template5_container {
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
	.template5_container__header_container {
		color: #f8f8f8;
		background-color: #d6221f;
		padding: getSpace(4) * 1px 0;
	}
	.template5_container__header {
		letter-spacing: 3px;
		text-align: center;
		font-weight: 500;
		line-height: map-get($map: $line-height, $key: 'large') * 1px;
		text-transform: uppercase;
		text-align: center;
		font-size: getFontSize(8) * 1px;
		margin-bottom: getSpace(1) * 1px;
	}
	.template5_container__jobTitle {
		text-align: center;
		font-size: getFontSize(5) * 1px;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
	}
	.template5_container__details_container {
		display: flex;
	}
	.template5_container__left_container {
		background-color: #263547;
		width: 43%;
		color: #f8f8f8;
		padding: getSpace(2.5) * 1px getSpace(4) * 1px;
	}
	.template5_container__sub_header {
		text-transform: uppercase;
		letter-spacing: 1px;
		color: #f0615f;
		margin: getSpace(2) * 1px 0;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
	}
	.template5_container__contact_list {
		font-size: getFontSize(3) * 1px;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		padding-left: 8px;
	}
	.template5_container__skill_list {
		padding-left: 8px;
		display: flex;
		flex-wrap: wrap;
	}
	.template5_container__skill_element {
		width: 50%;
		margin: getSpace(0.5) * 1px 0;
	}
	.template5_container__certificate_list {
		font-size: getFontSize(3) * 1px;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		padding-left: 16px;
		list-style: disc;
	}
	.template5_container__sub_list {
		font-size: getFontSize(3) * 1px;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		padding-left: 16px;
		list-style: circle;
	}
	.template5_container__right_container {
		padding: getSpace(2.5) * 1px getSpace(4) * 1px;
	}

	.template5_container__personal {
		margin: getSpace(1) * 1px;
		font-size: getFontSize(3) * 1px;
	}
	.template5_container__red_horizontal_line {
		width: 100%;
		margin: getSpace(3) * 1px 0;
		height: 2px;
		background-color: #d6221f;
	}
	.template5_container__right_sub_header {
		text-transform: uppercase;
		letter-spacing: 1px;
		margin: getSpace(2) * 1px 0;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
	}
	.template5_container__employment_list {
		font-size: getFontSize(3) * 1px;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		padding-left: 1px;
		list-style: none;
	}
	.template5_container__sub_sub_header {
		text-transform: capitalize;
		padding: getSpace(1) * 1px 0;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
	}
	.template5_container__college_title {
		text-transform: capitalize;
		padding: getSpace(0.5) * 1px 0;
	}
</style>
