import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/views/0_HelloWorld/Index.vue";
import StyleBlock from "@/views/1_StyleBlock/StyleBlock.vue";
import ScriptBlock from "@/views/2_ScriptBlock/ScriptBlock.vue";
import Formula from "@/views/3_Formula/Formula.vue";
import LifeCycle from "@/views/4_LifeCycle/LifeCycle.vue";
import UseDOMAPI from "@/views/5_UseDOMAPI/UseDOMAPI.vue";
import BindingInput from "@/views/6_BindingInput/BindingInput.vue";
import BindingInputMutual from "@/views/7_BindingInputMutual/BindingInputMutual.vue";
import EventHandler from "@/views/8_EventHandler/EventHandler.vue";
import OnChangeEvent from "@/views/9_OnChangeEvent/OnChangeEvent.vue";
import BindingStyle from "@/views/10_BindingStyle/BindingStyle.vue";
import BindingClass from "@/views/11_BindingClass/BindingClass.vue";
import IfAndShow from "@/views/12_IfAndShow/IfAndShow.vue";
import ForEachLoop from "@/views/13_ForEachLoop/ForEachLoop.vue";
import AddComponent from "@/views/14_AddComponent/AddComponent.vue";
import ComponentAttribute from "@/views/15_ComponentAttribute/ComponentAttribute.vue";
import ComponentMethod from "@/views/16_ComponentMethod/ComponentMethod.vue";
import StateContainer from "@/views/17_StateContainer/StateContainer.vue";
import ReadJSON from "@/views/18_ReadJSON/ReadJSON.vue";

Vue.use(VueRouter);

const routes=[
	{path: "/", name: "HelloWorld", component: HelloWorld},
	{path: "/StyleBlock", name: "StyleBlock", component: StyleBlock},
	{path: "/ScriptBlock", name: "ScriptBlock", component: ScriptBlock},
	{path: "/Formula", name: "Formula", component: Formula},
	{path: "/LifeCycle", name: "LifeCycle", component: LifeCycle},
	{path: "/UseDOMAPI", name: "UseDOMAPI", component: UseDOMAPI},
	{path: "/BindingInput", name: "BindingInput", component: BindingInput},
	{path: "/BindingInputMutual", name: "BindingInputMutual", component: BindingInputMutual},
	{path: "/EventHandler", name: "EventHandler", component: EventHandler},
	{path: "/OnChangeEvent", name: "OnChangeEvent", component: OnChangeEvent},
	{path: "/BindingStyle", name: "BindingStyle", component: BindingStyle},
	{path: "/BindingClass", name: "BindingClass", component: BindingClass},
	{path: "/IfAndShow", name: "IfAndShow", component: IfAndShow},
	{path: "/ForEachLoop", name: "ForEachLoop", component: ForEachLoop},
	{path: "/AddComponent", name: "AddComponent", component: AddComponent},
	{path: "/ComponentAttribute", name: "ComponentAttribute", component: ComponentAttribute},
	{path: "/ComponentMethod", name: "ComponentMethod", component: ComponentMethod},
	{path: "/StateContainer", name: "StateContainer", component: StateContainer},
	{path: "/ReadJSON", name: "ReadJSON", component: ReadJSON}
];

const router=new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
