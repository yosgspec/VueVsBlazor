<template>
<div>
	<h1>Alert</h1>
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";

@Component
export default class UseDOMAPI extends Vue{
	async mounted(){
		var title=document.title;
		alert(title);
	}
}
</script>
