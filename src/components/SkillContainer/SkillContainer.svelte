<script>
	import NextBackLink from '../NextBackLink/NextBackLink.svelte';
	import SkillAdder from './SkillAdder/SkillAdder.svelte';
	import MainDetailsContainer from '../MainDetailsContainer/MainDetailsContainer.svelte';
</script>

<MainDetailsContainer>
	<SkillAdder />
	<NextBackLink nextLink="NAMEANDTITLE" backLink="CERTIFICATE" />
</MainDetailsContainer>
