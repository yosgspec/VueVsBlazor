<template>
<div>
	<h3>Read JSON</h3>
	<ul>
		<li v-for="value in list" :key="value">{{value}}</li>
	</ul>
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";

@Component
export default class ReadJSON extends Vue{
	list:string[]=[];

	mounted(){
		this.list=require("@/assets/weapons.json");
	}
}
</script>
