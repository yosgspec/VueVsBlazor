<template>
<div>
	<h1>{{title}}</h1>
	<input :value="title">
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";

@Component
export default class BindingInputMutual extends Vue{
	title="Hello Vue.js!";

	async mounted(){
		for(;;){
			await new Promise(res=>setTimeout(res,2000));
			this.title+=">";
		}
	}
}
</script>
