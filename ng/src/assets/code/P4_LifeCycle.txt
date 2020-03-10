const template=`
<div>
	<h1>{{title}}</h1>
</div>
`;

import {Component,OnInit} from "@angular/core";

@Component({
	selector: "LifeCycle",
	template: template
})
export class LifeCycleComponent implements OnInit{
	title="Hello Angular!";

	async ngOnInit(){
		await new Promise(res=>setTimeout(res,5000));
		this.title+=" 5s passed!";
	}
}
