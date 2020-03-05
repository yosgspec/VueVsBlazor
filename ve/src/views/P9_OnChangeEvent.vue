<template>
<div>
	<h1>Check: {{isChecked}}</h1>
	<input id=chk type=checkbox v-model="isChecked" @change="chkChange">
	<label for=chk>CheckBox</label>
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";

@Component
export default class OnChangeEvent extends Vue{
	isChecked=false;

	chkChange(){
		alert(`Check: ${this.isChecked}`);
	}
}
</script>
