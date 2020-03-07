const template=`
<div>
	<button (click)="openDialog()">Click Me!</button>
</div>
`;

import {Component} from "@angular/core";

@Component({
	selector: "EventHandler",
	template: template
})
export class P8EventHandlerComponent{
	title="Hello Angular!";

	openDialog(){
		alert(this.title);
	}
}
