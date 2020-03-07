const template=`
<div>
	<h1>{{title}}</h1>
	<input [(ngModel)]="title">
</div>
`;

import {Component} from "@angular/core";

@Component({
	selector: "BindingInput",
	template: template
})
export class P6BindingInputComponent{
	title="Hello Angular!";
}
