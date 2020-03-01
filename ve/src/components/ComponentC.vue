<template>
<div :style="{color: color}">
	Input Attribute={{msg}}
</div>
</template>

<script lang=ts>
import {Component,Prop,Vue} from "vue-property-decorator";

@Component
export default class ComponentC extends Vue{
	@Prop()
	private msg:string;
	@Prop()
	private color:string;
}
</script>
