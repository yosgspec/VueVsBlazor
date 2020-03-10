const template=`
<div>
	<h1>Hello Angular!</h1>
</div>
`;

import {Component} from "@angular/core";

@Component({
	selector: "Index",
	template: template
})
export class IndexComponent{}
