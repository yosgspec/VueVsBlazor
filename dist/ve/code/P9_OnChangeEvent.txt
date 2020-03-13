<template>
<div>
	<h1>Check: {{isChecked}}</h1>
	<input id=chk type=checkbox v-model="chkChange">
	<label for=chk>CheckBox</label>
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";

@Component
export default class OnChangeEvent extends Vue{
	isChecked=false;

	get chkChange(){return this.isChecked;}
	set chkChange(value:boolean){
		this.isChecked=value;
		alert(`Check: ${this.isChecked}`);
	}
}
</script>
