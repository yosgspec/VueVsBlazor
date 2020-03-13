<template>
<div>
	<Toast ref="toast" />
	<button @click="viewToast">Click Me!</button>
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";
import Toast from "@/components/Toast.vue";

@Component({
	components:{
		Toast
	}
})
export default class ComponentMethod extends Vue{
	$refs!:{toast: Toast};

	async viewToast(){
		await this.$refs.toast.show("View Torst!");
	}
}
</script>
