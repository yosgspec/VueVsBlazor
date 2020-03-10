const template=`
<div id=index>
	<h1>Hello Angular!</h1>
</div>

<style>
div#index{
	color: #0000FF;
}
</style>
`;

import {Component} from "@angular/core";

@Component({
	selector: "StyleBlock",
	template: template
})
export class StyleBlockComponent{}
