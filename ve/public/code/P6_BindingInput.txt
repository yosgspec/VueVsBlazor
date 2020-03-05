<template>
<div>
	<h1>{{title}}</h1>
	<input v-model="title">
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";

@Component
export default class BindingInput extends Vue{
	title="Hello Vue.js!";
}
</script>
