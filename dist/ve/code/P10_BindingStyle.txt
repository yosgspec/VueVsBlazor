<template>
<div>
	<h1>Check: {{isChecked}}</h1>
	<input id=chk type=checkbox v-model="isChecked">
	<label for=chk>CheckBox</label>
	<div :style="{color: isChecked? 'blue': 'red'}">
		Change Style!
	</div>
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";

@Component
export default class BindingStyle extends Vue{
	isChecked=false;
}
</script>
