const template=`
<div>
	<h1>Check: {{isChecked}}</h1>
	<input id=chk type=checkbox [(ngModel)]="isChecked">
	<label for=chk>CheckBox</label>
	<div *ngIf="isChecked">
		<input>
	</div>
	<div [style.display]="isChecked? '': 'none'">
		<input>
	</div>
</div>
`;

import {Component} from "@angular/core";

@Component({
	selector: "IfAndShow",
	template: template
})
export class P12IfAndShowComponent{
	isChecked=false;
}
