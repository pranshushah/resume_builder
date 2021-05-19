<script lang="ts">
	export let labelName: string;
	export let message = '';
	export let a11ylabelFor: string = '';
	export let small = false;
	export let value: string;
</script>

<div class="text_group">
	<textarea
		class="text_group__textarea"
		id={a11ylabelFor ? a11ylabelFor : labelName}
		placeholder=""
		bind:value
		class:text_group__textarea--small={small}
		aria-describedby={a11ylabelFor
			? `text_group__message_${a11ylabelFor}`
			: `text_group__message_${labelName}`}
	/>
	<label for={a11ylabelFor ? a11ylabelFor : labelName} class="text_group__label">{labelName}</label>
	<p
		class="text_group__message"
		id={a11ylabelFor ? `text_group__message_${a11ylabelFor}` : `text_group__message_${labelName}`}
	>
		{message}
	</p>
</div>

<style lang="scss">
	@import '../../utils/scss/_fontSize.scss';
	@import '../../utils/scss/_spaces.scss';
	@import '../../utils/scss/_lineHeight.scss';
	@import '../../utils/scss/_variables.scss';
	@import '../../utils/scss/_media.scss';

	.text_group {
		position: relative;
		width: auto;
	}

	.text_group__label {
		font-size: getFontSize(5) * 1px;
		position: absolute;
		left: 0;
		top: 50%;
		background-color: white;
		color: gray;
		transform: translateY(-50%);
		padding: 0 getSpace(0.5) * 1px;
		margin: 0 getSpace(2) * 1px;
		pointer-events: none;
		transition: 0.1s ease-in;
		@include se() {
			font-size: getFontSize(4) * 1px;
		}
	}

	.text_group__textarea {
		outline: none;
		font-size: getFontSize(5) * 1px;
		line-height: map-get($map: $line-height, $key: 'medium') * 1px;
		border-radius: 4px;
		width: 420px;
		border: 1px solid gray;
		color: $blackColor;
		padding: getSpace(2) * 1px getSpace(1.5) * 1px;
		transition: 0.1s ease-in;
		@include mobile() {
			max-width: 320px;
		}
		@include se() {
			max-width: 290px;
			font-size: getFontSize(4) * 1px;
		}
		@include se() {
			max-width: 240px;
		}
		&:focus {
			border-color: $secondaryColorDark;
			box-shadow: 0 0 0 1px $secondaryColorDark;
		}
		&:focus + .text_group__label {
			color: $secondaryColorDark;
			top: 0;
			font-size: getFontSize(4) * 1px;
		}
		&:not(:placeholder-shown) + .text_group__label {
			top: 0;
			font-size: getFontSize(4) * 1px;
		}
		&:disabled {
			cursor: not-allowed;
			opacity: 0.6;
		}
	}
	.text_group__textarea--small {
		width: 205px;
		font-size: getFontSize(4) * 1px;
		@include fold_small() {
			width: 155px;
		}
		&:focus + .text_group__label {
			color: $secondaryColorDark;
			top: 0;
			font-size: getFontSize(3) * 1px;
		}
		&:not(:placeholder-shown) + .text_group__label {
			top: 0;
			font-size: getFontSize(3) * 1px;
		}
	}
	.text_group__message {
		margin-top: 4px;
		margin-left: 2px;
		color: rgb(50, 50, 50);
		text-align: left;
		font-size: getFontSize(3) * 1px;
		line-height: map-get($map: $line-height, $key: 'large') * 1px;
	}
</style>
