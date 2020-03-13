const template=`
<nav>
	<b style="color:#900;font-size:1.5em;">Angular Sample</b>
	<ol type="1" start="0">
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/">HelloWorld</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/StyleBlock">StyleBlock</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/ScriptBlock">ScriptBlock</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/Formula">Formula</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/LifeCycle">LifeCycle</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/UseDOMAPI">UseDOMAPI</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/BindingInput">BindingInput</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/BindingInputOneWay">BindingInputOneWay</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/EventHandler">EventHandler</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/OnChangeEvent">OnChangeEvent</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/BindingStyle">BindingStyle</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/BindingClass">BindingClass</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/IfAndShow">IfAndShow</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/ForEachLoop">ForEachLoop</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/AddComponent">AddComponent</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/ComponentAttribute">ComponentAttribute</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/ComponentMethod">ComponentMethod</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/StateContainer">StateContainer</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/ReadJSON">ReadJSON</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/ReadText">ReadText</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/InnerHTML">InnerHTML</a></li>
	</ol>
	<div style="display:flex;flex-direction:column;">
		<b><a [href]="ve">Go Vue.js!</a></b>
		<b><a [href]="br">Go Blazor!</a></b>
		<b><a href="https://qiita.com/yosgspec/items/3cf93e70a81805d70d29">Qiita</a></b>
		<b><a href="https://github.com/yosgspec/VueVsBlazor">GitHug</a></b>
		<b><a href="/">Top Page</a></b>
	</div>
</nav>

<style>
.active{
	color: #FF0000;
	font-weight: bold;
}
</style>
`;

import {Component} from "@angular/core";

@Component({
	selector: "NavMenu",
	templateUrl: template
})
export class NavMenuComponent{
	get ve(){return location.href.replace("/ng/","/ve/");}
	get br(){return location.href.replace("/ng/","/br/");}
}
