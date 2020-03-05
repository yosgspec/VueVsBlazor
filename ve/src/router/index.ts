import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/views/Index.vue";
import StyleBlock from "@/views/P1_StyleBlock.vue";
import ScriptBlock from "@/views/P2_ScriptBlock.vue";
import Formula from "@/views/P3_Formula.vue";
import LifeCycle from "@/views/P4_LifeCycle.vue";
import UseDOMAPI from "@/views/P5_UseDOMAPI.vue";
import BindingInput from "@/views/P6_BindingInput.vue";
import BindingInputOneWay from "@/views/P7_BindingInputOneWay.vue";
import EventHandler from "@/views/P8_EventHandler.vue";
import OnChangeEvent from "@/views/P9_OnChangeEvent.vue";
import BindingStyle from "@/views/P10_BindingStyle.vue";
import BindingClass from "@/views/P11_BindingClass.vue";
import IfAndShow from "@/views/P12_IfAndShow.vue";
import ForEachLoop from "@/views/P13_ForEachLoop.vue";
import AddComponent from "@/views/P14_AddComponent.vue";
import ComponentAttribute from "@/views/P15_ComponentAttribute.vue";
import ComponentMethod from "@/views/P16_ComponentMethod.vue";
import StateContainer from "@/views/P17_StateContainer.vue";
import ReadJSON from "@/views/P18_ReadJSON.vue";
import ReadText from "@/views/P19_ReadText.vue";

Vue.use(VueRouter);

const routes=[
	{path: "/", name: "HelloWorld", component: HelloWorld},
	{path: "/StyleBlock", name: "StyleBlock", component: StyleBlock},
	{path: "/ScriptBlock", name: "ScriptBlock", component: ScriptBlock},
	{path: "/Formula", name: "Formula", component: Formula},
	{path: "/LifeCycle", name: "LifeCycle", component: LifeCycle},
	{path: "/UseDOMAPI", name: "UseDOMAPI", component: UseDOMAPI},
	{path: "/BindingInput", name: "BindingInput", component: BindingInput},
	{path: "/BindingInputOneWay", name: "BindingInputOneWay", component: BindingInputOneWay},
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
	{path: "/ReadJSON", name: "ReadJSON", component: ReadJSON},
	{path: "/ReadText", name: "ReadText", component: ReadText}
];

const router=new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
