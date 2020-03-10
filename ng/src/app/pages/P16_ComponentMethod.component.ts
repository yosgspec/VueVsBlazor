const template=`
<div>
	<Toast></Toast>
	<button (click)="viewToast()">Click Me!</button>
</div>
`;

import {Component,ViewChild} from "@angular/core";
import {ToastComponent} from "../components/Toast.component";

@Component({
	selector: "ComponentMethod",
	template: template
})
export class ComponentMethodComponent{
	@ViewChild(ToastComponent,{static: false})
	private toast:ToastComponent;

	async viewToast(){
		await this.toast.show("View Torst!");
	}
}
