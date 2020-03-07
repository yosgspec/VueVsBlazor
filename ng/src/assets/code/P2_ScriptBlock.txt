const template=`
<div>
	<h1>{{title}}</h1>
</div>
`;

import {Component} from "@angular/core";

@Component({
	selector: "ScriptBlock",
	template: template
})
export class P2ScriptBlockComponent{
	title="Hello Vue.js!";
}
