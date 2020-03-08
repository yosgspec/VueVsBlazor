const template=`
<div>
	<h1>10!={{10*9*8*7*6*5*4*3*2*1}}</h1>
</div>
`;

import {Component} from "@angular/core";

@Component({
	selector: "Formula",
	template: template
})
export class P3FormulaComponent{}
