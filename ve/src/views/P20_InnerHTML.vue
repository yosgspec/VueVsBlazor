<template>
<div>
	<h3>Inner HTML</h3>
	<textarea v-model="txt" style="height:300px;width:300px;"></textarea>
	<div v-html="txt"></div>
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";

@Component
export default class InnerHTML extends Vue{
	txt=
`<h1>TEST TITLE</h1>

<span style=color:#009900>
<u>Say</u> <i>Hello!</i>
</span>`;
}
</script>
