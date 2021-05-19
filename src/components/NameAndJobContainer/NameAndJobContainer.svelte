<script>
	import CardWithInput from '../CardWithInputState/CardWithInput.svelte';
	import Header from '../UI/Header.svelte';
	import { basicLengthChecker } from '../../utils/helper_function/basicLengthChecker';
	import NextBackLink from '../NextBackLink/NextBackLink.svelte';
	import MainDetailsContainer from '../MainDetailsContainer/MainDetailsContainer.svelte';
</script>

<MainDetailsContainer>
	<Header>Personal Details</Header>
	<CardWithInput
		labelName="Name"
		keyforLocalStorage="name"
		errorMessage="name should have atleast 2 character"
		errorChecker={basicLengthChecker}
	/>
	<div class="content_container">
		<CardWithInput
			labelName="Job Title"
			errorMessage="name should have atleast 2 character"
			keyforLocalStorage="jobTitle"
			errorChecker={basicLengthChecker}
		/>
	</div>
	<div class="content_container">
		<CardWithInput
			labelName="Tell us about Your self"
			errorMessage="name should have atleast 2 character"
			keyforLocalStorage="personal"
			errorChecker={basicLengthChecker}
		/>
	</div>
	<NextBackLink nextLink="CONTACT" backLink="SKILLS" />
</MainDetailsContainer>

<style lang="scss">
	@import '../../utils/scss/spaces';
	.content_container {
		margin-top: getSpace(5) * 1px;
	}
</style>
