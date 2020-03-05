<template>
<div>
	<h3>Read Text</h3>
	<pre>{{text}}</pre>
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";
import axios from "axios";

@Component
export default class ReadText extends Vue{
	text="";

	async mounted(){
		this.text=await axios.get("./kimigayo.txt?0").then(v=>v.data);
	}
}
</script>
