<template>
<div>
	<ComponentA />
	<ComponentB />
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";
import ComponentA from "@/components/ComponentA.vue";
import ComponentB from "@/components/ComponentB.vue";

@Component({
	components:{
		ComponentA,
		ComponentB
	}
})
export default class AddComponent extends Vue{}
</script>
