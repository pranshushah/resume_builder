<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	import Button from './Button.svelte';
	const dispatch = createEventDispatcher();

	export let mode: 'education' | 'certificate' | 'experience' = 'education';
	export let show: boolean;
	function cancelModalHandler() {
		dispatch('cancel');
	}
	function confirmModalHandler() {
		dispatch('confirm');
	}
</script>

{#if show}
	<div class="back_drop" on:click={cancelModalHandler}>
		<div class="container" in:fly={{ opacity: 0, x: -100, duration: 400 }}>
			<div class="content_container">
				<p class="header">
					"{mode}" card will be permanently deleted.
				</p>
				<p class="text">You won't be able to undo this action.</p>
			</div>
			<div class="action">
				<div class="cancel_button_container">
					<Button dimension="small" inverted danger on:click={cancelModalHandler}>Cancel</Button>
				</div>
				<Button dimension="small" danger on:click={confirmModalHandler}>Confirm</Button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	@import '../../utils/scss/_variables.scss';
	@import '../../utils/scss/spaces';
	@import '../../utils/scss/lineHeight';
	@import '../../utils/scss/fontSize';
	@import '../../utils/scss/media';

	.container {
		position: fixed;
		z-index: 500;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.26);
		transition: all 0.3s ease-out;
		left: 33%;
		top: 25%;
		background-color: white;
		border: none;
		@include ipad-pro() {
			left: 27%;
			top: 27%;
		}
		@include ipad() {
			left: 16%;
		}
		@include mobile() {
			left: 5%;
			width: 90%;
		}
	}
	.header {
		margin: getSpace(2) * 1px getSpace(1) * 1px;
		font-size: getFontSize(7) * 1px;
		line-height: map-get($map: $line-height, $key: 'large') * 1px;
		font-weight: 500;
		@include mobile() {
			line-height: map-get($map: $line-height, $key: 'medium') * 1px;
			font-size: getFontSize(5) * 1px;
		}
	}
	.text {
		margin: getSpace(1.5) * 1px;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		font-size: getFontSize(4) * 1px;
		font-weight: 300;
		@include mobile() {
			font-size: getFontSize(3) * 1px;
		}
	}

	.content_container {
		padding: getSpace(1.5) * 1px;
	}

	.action {
		display: flex;
		justify-content: flex-end;
		margin: getSpace(2.5) * 1px;
	}

	.cancel_button_container {
		margin-right: getSpace(2) * 1px;
	}

	.back_drop {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 116;
		left: 0;
		top: 0;
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.6);
	}
</style>
