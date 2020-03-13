<template>
<div>
	<h1>{{title}}</h1>
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";

@Component
export default class ScriptBlock extends Vue{
	title="Hello Vue.js!";
}
</script>
