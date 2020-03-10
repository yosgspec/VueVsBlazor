const template=`
<div>
	<ComponentC msg="View Message" color="#FF00FF"></ComponentC>
</div>
`;

import {Component} from "@angular/core";

@Component({
	selector: "ComponentAttribute",
	template: template
})
export class ComponentAttributeComponent{}
