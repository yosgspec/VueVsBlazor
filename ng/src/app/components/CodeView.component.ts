const template=`
<div id=codeView>
	<div *ngFor="let c of codes">
		<h3>{{c.name}}</h3>
		<pre><code class="language-ts">{{c.code}}</code></pre>
	</div>
</div>

<style>
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
`;

import {Component,OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router,NavigationEnd} from "@angular/router";

interface Code{
	name:string,
	code:string
}

@Component({
	selector: "CodeView",
	template: template
})
export class CodeViewComponent{
	constructor(
		private http:HttpClient,
		private router:Router
	){
		this.router.events.subscribe(event=>{
	    	if(this.pageList && event instanceof NavigationEnd) this.moveURL();
	    });
	}
	pageList!:{[s:string]:string[]};
	codes:Code[]=[];

	async moveURL(){
		var key=location.pathname.split("/").pop();
		this.codes=[];
		this.codes=await Promise.all(this.pageList[key].map(async v=>({
			name: v=="$store"? "store.service.ts": v+".component.ts",
			code: await new Promise(res=>this.http.get(`./assets/code/${v}.txt?0`,{responseType:"text"}).subscribe(res)) as string
		})));
	}

	async ngOnInit(){
		this.pageList=await new Promise(res=>this.http.get("./assets/pageList.json?0").subscribe(res));
		await this.moveURL();
	}

	ngAfterViewChecked(){
		//@ts-ignore
		Prism.highlightAll();
	}
}
