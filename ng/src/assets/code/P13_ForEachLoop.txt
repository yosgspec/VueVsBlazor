const template=`
<div>
	<div *ngFor="let v of dict | keyvalue">
		<input [id]="v.key" type=checkbox [(ngModel)]="dict[v.key]">
		<label [for]="v.key">{{v.key}}</label>
	</div>
</div>
`;

import {Component} from "@angular/core";

@Component({
	selector: "ForEachLoop",
	template: template
})
export class ForEachLoopComponent{
	dict:{[s:string]:boolean}={
		A:true,
		B:true,
		C:true,
		D:false,
		E:false
	};
}
