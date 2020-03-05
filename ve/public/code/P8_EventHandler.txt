<template>
<div>
	<button @click="openDialog">Click Me!</button>
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";

@Component
export default class EventHandler extends Vue{
	title="Hello Vue.js!";

	openDialog(){
		alert(this.title);
	}
}
</script>
