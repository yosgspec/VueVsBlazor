<template>
<div>
	<ComponentC msg="View Message" color="#FF00FF" />
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";
import ComponentC from "@/components/ComponentC.vue";

@Component({
	components:{
		ComponentC
	}
})
export default class ComponentAttribute extends Vue{}
</script>
