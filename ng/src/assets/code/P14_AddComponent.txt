const template=`
<div>
	<ComponentA></ComponentA>
	<ComponentB></ComponentB>
</div>
`;

import {Component} from "@angular/core";

@Component({
	selector: "AddComponent",
	templateUrl: template
})
export class AddComponentComponent{}
