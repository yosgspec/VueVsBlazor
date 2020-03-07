const template=`
<div>
	<h3>Read JSON</h3>
	<ul>
		<li *ngFor="let value of list">{{value}}</li>
	</ul>
</div>`;

import {Component,OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
	selector: "ReadJSON",
	template: template
})
export class P18ReadJSONComponent implements OnInit{
	constructor(
		private http:HttpClient
	){}
	list:string[]=[];

	async ngOnInit(){
		this.list=await new Promise(res=>this.http.get("./assets/weapons.json?0").subscribe(res));
	}
}
