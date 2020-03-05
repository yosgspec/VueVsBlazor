<template>
<div>
	<h1>Check: {{isChecked}}</h1>
	<input id=chk type=checkbox v-model="isChecked">
	<label for=chk>CheckBox</label>
	<div :class="{clsA: isChecked, clsB: !isChecked}">
		Change Style!
	</div>
</div>
</template>

<style scoped>
.clsA{
	color: blue;
	font-size: 1.5em;
	text-decoration: underline solid;
}

.clsB{
	color: red;
	font-size: 1.0em;
	font-style: italic;
}
</style>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";

@Component
export default class BindingClass extends Vue{
	isChecked=false;
}
</script>
