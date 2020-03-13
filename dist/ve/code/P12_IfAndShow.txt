<template>
<div>
	<h1>Check: {{isChecked}}</h1>
	<input id=chk type=checkbox v-model="isChecked">
	<label for=chk>CheckBox</label>
	<div v-if="isChecked">
		<input>
	</div>
	<div v-show="isChecked">
		<input>
	</div>
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";

@Component
export default class IfAndShow extends Vue{
	isChecked=false;
}
</script>
