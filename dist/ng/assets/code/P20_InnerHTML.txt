const template=`
<div>
	<h3>Inner HTML</h3>
	<textarea [(ngModel)]="txt" style="height:300px;width:300px;"></textarea>
	<div [innerHTML]="txt"></div>
</div>
`;

import {Component} from "@angular/core";

@Component({
	selector: "InnerHTML",
	template: template
})
export class InnerHTMLComponent{
	txt=
`<h1>TEST TITLE</h1>

<font color="#990000">
<u>Say</u> <i>Hello!</i>
</font>`;
}
