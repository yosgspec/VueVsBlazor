const template=`
<main style=display:flex>
	<NavMenu></NavMenu>
	<div class=v-hr></div>
	<div>
		<router-outlet></router-outlet>
		<CodeView></CodeView>
	</div>
</main>

<style>
.v-hr{
	margin: 0 10px;
	border-right: 5px solid #CCC;
	height: 98vh;
}
</style>
`;

import {Component} from "@angular/core";

@Component({
	selector: "app-root",
	template: template
})
export class AppComponent{}
