<template>
<div>
	<div v-for="c in codes" id=codeView>
		<h3>{{c.name}}</h3>
		<pre><code>{{c.code}}</code></pre>
	</div>
</div>
</template>

<style scoped>
#codeView{
	border: 1px double #000;
	margin: 10px 0;
	padding: 5px;
}
#codeView code{
	color: #0000FF;
	font-family: "M+ 1mn";
	font-size: 0.9em;
	line-height: 1em;
	tab-size: 4;
	-moz-tab-size: 4;
}
</style>

<script lang=ts>
import {Component,Watch,Vue} from "vue-property-decorator";
import axios from "axios";

interface Code{
	name:string,
	code:string
}

@Component
export default class CodeView extends Vue{
	pageList!:{[s:string]:string[]};
	codes:Code[]=[];

	@Watch("$route")
	async moveURL(){
		var key=location.pathname.split("/").pop();
		this.codes=await Promise.all(this.pageList[key].map(async v=>({
			name: v=="$store"? "store/index.ts": v+".vue",
			code: (await axios.get(`./code/${v}.txt?0`)).data
		})));
	}

	async mounted(){
		this.pageList=require("@/assets/pageList.json");
		await this.moveURL();
	}
}
</script>
