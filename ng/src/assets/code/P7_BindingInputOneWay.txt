const template=`
<div>
	<h1>{{title}}</h1>
	<input [ngModel]="title">
</div>
`;

import {Component,OnInit} from "@angular/core";

@Component({
	selector: "BindingInputOneWay",
	template: template
})
export class BindingInputOneWayComponent implements OnInit{
	title="Hello Angular!";

	async ngOnInit() {
		for(;;){
			await new Promise(res=>setTimeout(res,2000));
			this.title+=">";
		}
	}
}
