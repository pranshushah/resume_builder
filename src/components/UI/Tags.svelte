<script lang="ts">
	import type { tagElement } from '../../utils/types';
	import Tag from './Tag.svelte';
	export let tagElements: tagElement[];
	export let deleteHandler: (id: string) => void;
</script>

{#each tagElements as tagElement}
	<Tag tag={tagElement} {deleteHandler} />
{/each}
