<script lang="ts">
	import { onMount } from 'svelte';
	import Input from '../UI/Input.svelte';
	export let labelName;
	export let disabled;
	export let value;
	let clientWidth: number = 0;

	onMount(() => {
		clientWidth = document.documentElement.clientWidth;
	});
</script>

<Input
	small={clientWidth > 767}
	{labelName}
	type="month"
	{disabled}
	max={`${new Date().getFullYear()}-${new Intl.DateTimeFormat('en-US', {
		month: '2-digit'
	}).format(new Date())}`}
	bind:value
/>
