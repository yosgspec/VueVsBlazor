const template=`
<div>
	<h1>Check: {{isChecked}}</h1>
	<input id=chk type=checkbox [(ngModel)]="chkChange">
	<label for=chk>CheckBox</label>
</div>
`;

import {Component} from "@angular/core";

@Component({
	selector: "OnChangeEvent",
	template: template
})
export class P9OnChangeEventComponent{
	isChecked=false;

	get chkChange(){return this.isChecked;}
	set chkChange(value:boolean){
		this.isChecked=value;
		alert(`Check: ${this.isChecked}`);
	}
}
