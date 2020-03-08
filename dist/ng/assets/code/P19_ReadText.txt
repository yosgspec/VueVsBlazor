const template=`
<div>
	<h3>Read Text</h3>
	<pre>{{text}}</pre>
</div>
`;

import {Component,OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
	selector: "ReadText",
	template: template
})
export class P19ReadTextComponent implements OnInit {
	constructor(
		private http:HttpClient
	){}
	text="";

	async ngOnInit(){
		this.text=await new Promise(res=>this.http.get("./assets/kimigayo.txt?0",{responseType:"text"}).subscribe(res));
	}
}
