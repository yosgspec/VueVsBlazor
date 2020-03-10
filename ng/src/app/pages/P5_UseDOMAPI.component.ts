const template=`
<div>
	<h1>Alert</h1>
</div>
`;

import {Component,OnInit} from "@angular/core";

@Component({
	selector: "UseDOMAPI",
	template: template
})
export class UseDOMAPIComponent implements OnInit{
	ngOnInit(){
		var title=document.title;
		alert(title);
	}
}
