<script lang="ts">
	import { templateURL } from '../../utils/types';
	import template1 from './img/template1.png';
	import template2 from './img/template2.png';
	import template3 from './img/template3.png';
	import template4 from './img/template4.png';
	import template5 from './img/template5.png';
	import template6 from './img/template6.png';

	export let currentPath: string;
</script>

<div id="template" class="template_container">
	<ul class="template_container__template_list">
		<li>
			<a
				href={templateURL.template1}
				aria-current={currentPath === templateURL.template1 ? 'page' : undefined}
				><img
					class:template_container__selected_template={currentPath === templateURL.template1}
					src={template1}
					alt="template1"
					class="template_container__template"
				/></a
			>
		</li>
		<li>
			<a
				href={templateURL.template2}
				aria-current={currentPath === templateURL.template2 ? 'page' : undefined}
				><img
					class:template_container__selected_template={currentPath === templateURL.template2}
					src={template2}
					alt="template2"
					class="template_container__template"
				/></a
			>
		</li>
		<li>
			<a
				href={templateURL.template3}
				aria-current={currentPath === templateURL.template3 ? 'page' : undefined}
				><img
					class:template_container__selected_template={currentPath === templateURL.template3}
					src={template3}
					alt="template3"
					class="template_container__template"
				/></a
			>
		</li>
		<li>
			<a
				href={templateURL.template4}
				aria-current={currentPath === templateURL.template4 ? 'page' : undefined}
				><img
					src={template4}
					alt="template4"
					class="template_container__template"
					class:template_container__selected_template={currentPath === templateURL.template4}
				/></a
			>
		</li>
		<li>
			<a
				href={templateURL.template5}
				aria-current={currentPath === templateURL.template5 ? 'page' : undefined}
				><img
					src={template5}
					alt="template5"
					class="template_container__template"
					class:template_container__selected_template={currentPath === templateURL.template5}
				/></a
			>
		</li>
		<li>
			<a
				href={templateURL.template6}
				aria-current={currentPath === templateURL.template6 ? 'page' : undefined}
				><img
					src={template6}
					alt="template6"
					class="template_container__template"
					class:template_container__selected_template={currentPath === templateURL.template6}
				/></a
			>
		</li>
	</ul>
</div>

<style lang="scss">
	@import '../../utils/scss/_media.scss';
	@import '../../utils/scss/_spaces.scss';

	.template_container {
		width: 250px;
		background-color: #adb7c4;
		@include print() {
			display: none;
		}
		@include tablet() {
			display: none;
		}
	}
	.template_container__template_list {
		margin-left: getSpace(0.5) * 1px;
	}
	.template_container__template {
		width: 150px;
		height: 200px;
		margin: getSpace(2) * 1px 0;
		border-radius: 4px;
		padding: 5px;
	}
	.template_container__selected_template {
		border: 1px solid rgb(10, 10, 10);
	}
</style>
