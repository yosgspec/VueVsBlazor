const template=`
<div>
	<h1>Check: {{isChecked}}</h1>
	<input id=chk type=checkbox [(ngModel)]="isChecked">
	<label for=chk>CheckBox</label>
	<div [style.color]="isChecked? 'blue': 'red'">
		Change Style!
	</div>
</div>
`;

import {Component} from "@angular/core";

@Component({
	selector: "BindingStyle",
	template: template
})
export class P10BindingStyleComponent{
	isChecked=false;
}
