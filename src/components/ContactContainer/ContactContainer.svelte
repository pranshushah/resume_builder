<script>
	import NextBackLink from '../NextBackLink/NextBackLink.svelte';
	import { emailChecker } from '../../utils/helper_function/emailChecker';
	import { mobileNumberChecker } from '../../utils/helper_function/mobilenumberchecker';
	import CardWithInput from '../CardWithInputState/CardWithInput.svelte';
	import Header from '../UI/Header.svelte';
	import MainDetailsContainer from '../MainDetailsContainer/MainDetailsContainer.svelte';
	import { basicLengthChecker } from '../../utils/helper_function/basicLengthChecker';
</script>

<MainDetailsContainer>
	<Header>Contact</Header>
	<CardWithInput
		labelName="Email"
		errorChecker={emailChecker}
		errorMessage="enter valid email address email should have johndoe@gmail.com"
		keyforLocalStorage="email"
	/>
	<div class="content_container">
		<CardWithInput
			type="tel"
			labelName="Phone"
			errorMessage="phone number should have 10 digits"
			keyforLocalStorage="phone"
			errorChecker={mobileNumberChecker}
		/>
	</div>
	<div class="content_container">
		<CardWithInput
			labelName="Address"
			errorMessage="Address should have atleast one letter"
			keyforLocalStorage="address"
			errorChecker={basicLengthChecker}
		/>
	</div>
	<NextBackLink nextLink="SOCIALMEDIA" backLink="NAMEANDTITLE" />
</MainDetailsContainer>

<style lang="scss">
	@import '../../utils/scss/spaces';

	.content_container {
		margin-top: getSpace(5) * 1px;
	}
</style>
