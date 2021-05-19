<h1>
	<slot>Please provide Header</slot> :-
</h1>

<style lang="scss">
	@import '../../utils/scss/_spaces.scss';
	@import '../../utils/scss/_fontSize.scss';
	@import '../../utils/scss/_lineHeight.scss';
	@import '../../utils/scss/_variables.scss';
	@import '../../utils/scss/media';

	h1 {
		padding: getSpace(1.5) * 1px;
		padding-left: 0;
		margin: getSpace(1) * 1px;
		font-size: getFontSize(10) * 1px;
		line-height: map-get($map: $line-height, $key: 'large') * 1px;
		color: $primaryColor;
		font-weight: 500;
		@include se() {
			font-size: getFontSize(8) * 1px;
		}
	}
</style>
