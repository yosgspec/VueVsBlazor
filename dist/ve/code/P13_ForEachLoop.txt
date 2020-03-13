<template>
<div>
	<div v-for="(isChecked,key) in dict">
		<input :id="key" type=checkbox v-model="dict[key]" :key="key">
		<label :for="key">{{key}}</label>
	</div>
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";

@Component
export default class ForEachLoop extends Vue{
	dict:{[s:string]:boolean}={
		A:true,
		B:true,
		C:true,
		D:false,
		E:false
	};
}
</script>
