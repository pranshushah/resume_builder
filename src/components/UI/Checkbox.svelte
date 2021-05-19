<script lang="ts">
	export let labelName: string;
	export let a11ylabelFor: string;
	export let checked: boolean;
</script>

<div>
	<input type="checkbox" class="inputCheckBox" id={a11ylabelFor} bind:checked />
	<label htmlfor={a11ylabelFor} class="check_box" for={a11ylabelFor}>
		{labelName}
	</label>
</div>

<style lang="scss">
	@import '../../utils/scss/_spaces.scss';
	@import '../../utils/scss/_lineHeight.scss';
	@import '../../utils/scss/_fontSize.scss';
	@import '../../utils/scss/_variables.scss';

	.inputCheckBox {
		display: none;
	}

	.check_box {
		display: inline-block;
		padding: getSpace(1) * 1px;
		padding-left: 2px;
		cursor: pointer;
		font-size: 22px;
		line-height: map-get($map: $line-height, $key: 'small') * 1px;
		color: $blackColor;
		&::before {
			content: '\2713';
			border: 1px solid $primaryColor;
			border-radius: 2px;
			display: inline-block;
			width: 1.2rem;
			height: 1.2rem;
			margin-right: 6px;
			padding-left: 2px;
			padding-bottom: 1px;
			color: transparent;
			font-size: 18px;
		}
		.inputCheckBox:checked + &:before {
			background: $primaryColor;
			border-color: $primaryColor;
			color: #fff;
			transition: 0.2s;
		}
		.inputCheckBox + &:active:before {
			transform: scale(0);
		}
		.inputCheckBox:checked:disabled + &:before {
			transform: scale(1);
			border-color: $primaryColor;
			background-color: rgb(140, 140, 140);
			pointer-events: none;
			opacity: 0.9;
		}
		.inputCheckBox:disabled + &:before {
			transform: scale(1);
			border-color: rgb(200, 200, 200);
			background-color: $whiteColor;
			pointer-events: none;
			pointer-events: none;
		}
	}
</style>
