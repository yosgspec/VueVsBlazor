<template>
<nav>
	<b style="color:#090;font-size:1.5em;">Vue.js Sample</b>
	<ol type="1" start="0">
		<li><router-link to="/">HelloWorld</router-link></li>
		<li><router-link to="/StyleBlock">StyleBlock</router-link></li>
		<li><router-link to="/ScriptBlock">ScriptBlock</router-link></li>
		<li><router-link to="/Formula">Formula</router-link></li>
		<li><router-link to="/LifeCycle">LifeCycle</router-link></li>
		<li><router-link to="/UseDOMAPI">UseDOMAPI</router-link></li>
		<li><router-link to="/BindingInput">BindingInput</router-link></li>
		<li><router-link to="/BindingInputOneWay">BindingInputOneWay</router-link></li>
		<li><router-link to="/EventHandler">EventHandler</router-link></li>
		<li><router-link to="/OnChangeEvent">OnChangeEvent</router-link></li>
		<li><router-link to="/BindingStyle">BindingStyle</router-link></li>
		<li><router-link to="/BindingClass">BindingClass</router-link></li>
		<li><router-link to="/IfAndShow">IfAndShow</router-link></li>
		<li><router-link to="/ForEachLoop">ForEachLoop</router-link></li>
		<li><router-link to="/AddComponent">AddComponent</router-link></li>
		<li><router-link to="/ComponentAttribute">ComponentAttribute</router-link></li>
		<li><router-link to="/ComponentMethod">ComponentMethod</router-link></li>
		<li><router-link to="/StateContainer">StateContainer</router-link></li>
		<li><router-link to="/ReadJSON">ReadJSON</router-link></li>
		<li><router-link to="/ReadText">ReadText</router-link></li>
		<li><router-link to="/InnerHTML">InnerHTML</router-link></li>
	</ol>
	<div style="display:flex;flex-direction:column;">
		<b><a :href="br">Go Blazor!</a></b>
		<b><a :href="ng">Go Angular!</a></b>
		<b><a href="https://qiita.com/yosgspec/items/3cf93e70a81805d70d29">Qiita</a></b>
		<b><a href="https://github.com/yosgspec/VueVsBlazor">GitHug</a></b>
		<b><a href="/">Top Page</a></b>
	</div>
</nav>
</template>

<style scoped>
.router-link-exact-active{
	color: #FF0000;
	font-weight: bold;
}
</style>

<script lang=ts>
import {Component,Watch,Vue} from "vue-property-decorator";

@Component
export default class NavMenu extends Vue{
	get br(){return location.href.replace("/ve/","/br/");}
	get ng(){return location.href.replace("/ve/","/ng/");}
}
</script>
