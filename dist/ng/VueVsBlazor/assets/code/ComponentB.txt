const template=`
<div>
	<input id=chk type=checkbox>
	<label for=chk>ComponentB</label>
</div>
`;

import {Component} from "@angular/core";

@Component({
	selector: "ComponentB",
	templateUrl: template
})
export class ComponentBComponent{}
