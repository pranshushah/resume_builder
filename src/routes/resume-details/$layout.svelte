<script context="module">
	export async function load({ page }) {
		const currentPath = page.path;
		return {
			props: { currentPath }
		};
	}
</script>

<script>
	import Nav from '../../components/Nav/Nav.svelte';
	import DetailSidebar from '../../components/DetailSidebar/DetailSidebar.svelte';
	export let currentPath;
</script>

{#key currentPath}
	<div>
		<Nav navFor="details" />
		<main class="container">
			<DetailSidebar {currentPath} />
			<slot />
		</main>
	</div>
{/key}

<style>
	.container {
		display: flex;
	}
</style>
