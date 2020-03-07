const template=`
<h1>Check: {{isChecked}}</h1>
<input id=chk type=checkbox [(ngModel)]="isChecked" (change)="chkChange()">
<label for=chk>CheckBox</label>
`;

import {Component} from "@angular/core";

@Component({
	selector: "OnChangeEvent",
	template: template
})
export class P9OnChangeEventComponent{
	isChecked=false;

	chkChange(){
		alert(`Check: ${this.isChecked}`);
	}
}
