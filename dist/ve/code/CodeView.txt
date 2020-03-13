<template>
<div id=codeView>
	<div v-for="c in codes">
		<h3>{{c.name}}</h3>
		<pre><code :class="{
			'language-html': fileType(c.name)=='vue',
			'language-ts': fileType(c.name)=='ts'
		}">{{c.code}}</code></pre>
	</div>
</div>
</template>

<style scoped>
#codeView div{
	border: 1px double #999;
	margin: 10px 0;
	padding: 5px;
}
#codeView code{
	color: #0000FF;
	font-family: "M+ 1mn";
	line-height: 1em;
	tab-size: 4;
	-moz-tab-size: 4;
	cursor: text;
	overflow-y: hidden;
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

	fileType(file:string):string{
		return file.split(/\./).pop();
	}

	@Watch("$route")
	async moveURL(){
		var key=location.pathname.split(/\//).pop();
		this.codes=[];
		this.codes=await Promise.all(this.pageList[key].map(async v=>({
			name: v=="$store"? "store/index.ts": v+".vue",
			code: (await axios.get(`./code/${v}.txt?0`)).data
		})));
	}

	async mounted(){
		this.pageList=require("@/assets/pageList.json");
		await this.moveURL();
	}

	updated(){
		//@ts-ignore
		Prism.highlightAll();
	}
}
</script>
