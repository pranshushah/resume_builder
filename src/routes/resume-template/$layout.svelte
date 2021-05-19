<script context="module">
	export async function load({ page }) {
		const currentPath = page.path;
		return {
			props: { currentPath }
		};
	}
</script>

<script lang="ts">
	import Nav from '../../components/Nav/Nav.svelte';
	import TemplateList from '../../components/TemplateList/TemplateList.svelte';
	export let currentPath: string;
</script>

<div>
	<Nav navFor="template" />
	<main class="container">
		<TemplateList {currentPath} />
		<slot />
	</main>
</div>

<style>
	.container {
		display: flex;
	}
</style>
