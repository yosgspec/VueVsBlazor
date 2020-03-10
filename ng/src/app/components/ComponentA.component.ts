const template=`
<div>
	<h3>ComponentA</h3>
	<textarea></textarea>
</div>
`;

import {Component} from "@angular/core";

@Component({
	selector: "ComponentA",
	template: template
})
export class ComponentAComponent{}
