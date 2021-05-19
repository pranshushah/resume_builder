<script>
	import { templateURL, urlObj } from '../../utils/types';
</script>

<div class="container">
	<div class="index_container">
		<h1>build awsome resumes</h1>
		<p class="index_container__text">And it's totally free.</p>
		<div class="index_container__link_container">
			<a href={urlObj.NAMEANDTITLE} class="link_grad">Add details</a>
			<a href={templateURL.template1} class="link_grad">explore resumes</a>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../utils/scss/_spaces.scss';
	@import '../../utils/scss/_variables.scss';
	@import '../../utils/scss/_lineHeight.scss';
	@import '../../utils/scss/_fontSize.scss';

	.container {
		display: flex;
	}

	.index_container {
		margin: auto;
	}
	h1 {
		text-transform: uppercase;
		margin-top: getSpace(12) * 1px;
		font-size: getFontSize(14) * 1px;
		line-height: map-get($map: $line-height, $key: 'extra-large') * 1px;
		background: -webkit-linear-gradient(#eee, #333);
		background: rgb(2, 0, 36);
		background: linear-gradient(
			100deg,
			rgba(2, 0, 36, 1) 0%,
			rgba(5, 5, 75, 1) 16%,
			rgba(0, 212, 255, 1) 100%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.index_container__text {
		margin-top: getSpace(1) * 1px;
		font-size: getFontSize(7) * 1px;
		text-align: center;
	}
	.index_container__link_container {
		margin: getSpace(4) * 1px 0;
		display: flex;
		justify-content: space-evenly;
	}

	.link_grad {
		background-image: linear-gradient(to right, #2b5876 0%, #4e4376 51%, #2b5876 100%);
		text-decoration: none;
		margin: 10px;
		font-size: getFontSize(6) * 1px;
		padding: getSpace(2) * 1px getSpace(4) * 1px;
		text-align: center;
		text-transform: uppercase;
		transition: 0.5s;
		background-size: 200% auto;
		color: white;
		box-shadow: 0 0 20px #eee;
		border-radius: 4px;
		display: block;
		&:hover {
			background-position: right center; /* change the direction of the change here */
			color: #fff;
			text-decoration: none;
		}
		&:active {
			transform: scale(0.9);
		}
	}
</style>
