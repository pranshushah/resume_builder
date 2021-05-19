<script>
	import { fly } from 'svelte/transition';
</script>

<div class="container" in:fly={{ x: 200, duration: 700 }} id="main">
	<slot />
</div>

<style lang="scss">
	@import '../../utils/scss/spaces';
	.container {
		margin: auto;
		margin-top: getSpace(2) * 1px;
	}
</style>
