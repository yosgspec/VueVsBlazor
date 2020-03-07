const template=`
<div>
	<Toast></Toast>
	<button (click)="viewToast()">Click Me!</button>
</div>
`;

import {Component,ViewChild} from "@angular/core";
import {ToastComponent} from "../../components/Toast/Toast.component";

@Component({
	selector: "ComponentMethod",
	template: template
})
export class P16ComponentMethodComponent{
	@ViewChild(ToastComponent,{static: false})
	private toast:ToastComponent;

	async viewToast(){
		this.toast.show("View Torst!");
	}
}
