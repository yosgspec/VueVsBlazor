const template=`
<div [style.color]="color">
	Input Attribute={{msg}}
</div>
`;

import {Component,Input} from "@angular/core";

@Component({
  selector: "ComponentC",
  template: template
})
export class ComponentCComponent{
	@Input()
	private msg: string;
	@Input()
	private color: string;
}
