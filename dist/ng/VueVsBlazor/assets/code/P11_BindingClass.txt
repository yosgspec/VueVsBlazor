const template=`
<div>
	<h1>Check: {{isChecked}}</h1>
	<input id=chk type=checkbox [(ngModel)]="isChecked">
	<label for=chk>CheckBox</label>
	<div [class.clsA]="isChecked" [class.clsB]="!isChecked">
		Change Style!
	</div>
</div>

<style>
.clsA{
	color: blue;
	font-size: 1.5em;
	text-decoration: underline solid;
}

.clsB{
	color: red;
	font-size: 1.0em;
	font-style: italic;
}
</style>
`;

import {Component} from "@angular/core";

@Component({
	selector: "BindingClass",
	template: template
})
export class P11BindingClassComponent{
	isChecked=false;
}
