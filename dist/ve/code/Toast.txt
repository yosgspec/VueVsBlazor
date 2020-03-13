<template>
<dialog :open="isShow">
	{{msg}}
</dialog>
</template>

<script lang=ts>
import {Component,Vue,Prop} from "vue-property-decorator";

@Component
export default class Toast extends Vue{
	isShow=false;
	msg="";

	public async show(msg:string){
		this.msg=msg;
		this.isShow=true;
		await new Promise(res=>setTimeout(res,1500));
		this.isShow=false;
	}
}
</script>
