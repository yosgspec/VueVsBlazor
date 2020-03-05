<template>
<div>
	<h1>{{title}}</h1>
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";

@Component
export default class LifeCycle extends Vue{
	title="Hello Vue.js!";

	async mounted(){
		await new Promise(res=>setTimeout(res,5000));
		this.title+=" 5s passed!";
	}
}
</script>
