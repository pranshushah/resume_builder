<script>
	import NextBackLink from '../NextBackLink/NextBackLink.svelte';
	import { urlChecker } from '../../utils/helper_function/urlChecker';
	import CardWithInput from '../CardWithInputState/CardWithInput.svelte';
	import Header from '../UI/Header.svelte';
	import MainDetailsContainer from '../MainDetailsContainer/MainDetailsContainer.svelte';
</script>

<MainDetailsContainer>
	<Header>Social Media</Header>
	<CardWithInput
		labelName="Behance"
		errorMessage="enter valid url"
		errorChecker={urlChecker}
		keyforLocalStorage="behance"
	/>
	<div class="detail_container">
		<CardWithInput
			labelName="Blog"
			keyforLocalStorage="blog"
			errorChecker={urlChecker}
			errorMessage="enter valid url"
		/>
	</div>
	<div class="detail_container">
		<CardWithInput
			labelName="Dribble"
			keyforLocalStorage="dribble"
			errorChecker={urlChecker}
			errorMessage="enter valid url"
		/>
	</div>
	<div class="detail_container">
		<CardWithInput
			labelName="Facebook"
			keyforLocalStorage="facebook"
			errorChecker={urlChecker}
			errorMessage="enter valid url"
		/>
	</div>
	<div class="detail_container">
		<CardWithInput
			labelName="Github"
			keyforLocalStorage="github"
			errorChecker={urlChecker}
			errorMessage="enter valid url"
		/>
	</div>
	<div class="detail_container">
		<CardWithInput
			labelName="Instagram"
			keyforLocalStorage="instagram"
			errorChecker={urlChecker}
			errorMessage="enter valid url"
		/>
	</div>
	<div class="detail_container">
		<CardWithInput
			labelName="Linkdin"
			keyforLocalStorage="linkdin"
			errorChecker={urlChecker}
			errorMessage="enter valid url"
		/>
	</div>
	<div class="detail_container">
		<CardWithInput
			labelName="Website"
			keyforLocalStorage="website"
			errorChecker={urlChecker}
			errorMessage="enter valid url"
		/>
	</div>
	<div class="detail_container">
		<CardWithInput
			labelName="Twitter"
			keyforLocalStorage="twitter"
			errorChecker={urlChecker}
			errorMessage="enter valid url"
		/>
	</div>
	<div class="detail_container">
		<CardWithInput
			labelName="Youtube"
			keyforLocalStorage="youtube"
			errorChecker={urlChecker}
			errorMessage="enter valid url"
		/>
	</div>
	<NextBackLink nextLink="EDUCATION" backLink="CONTACT" />
</MainDetailsContainer>

<style lang="scss">
	@import '../../utils/scss/spaces';
	.detail_container {
		margin-top: getSpace(5) * 1px;
	}
</style>
