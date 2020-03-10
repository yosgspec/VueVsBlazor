import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {IndexComponent} from "./pages/Index.component";
import {StyleBlockComponent} from "./pages/P1_StyleBlock.component";
import {ScriptBlockComponent} from "./pages/P2_ScriptBlock.component";
import {FormulaComponent} from "./pages/P3_Formula.component";
import {LifeCycleComponent} from "./pages/P4_LifeCycle.component";
import {UseDOMAPIComponent} from "./pages/P5_UseDOMAPI.component";
import {BindingInputComponent} from "./pages/P6_BindingInput.component";
import {BindingInputOneWayComponent} from "./pages/P7_BindingInputOneWay.component";
import {EventHandlerComponent} from "./pages/P8_EventHandler.component";
import {OnChangeEventComponent} from "./pages/P9_OnChangeEvent.component";
import {BindingStyleComponent} from "./pages/P10_BindingStyle.component";
import {BindingClassComponent} from "./pages/P11_BindingClass.component";
import {IfAndShowComponent} from "./pages/P12_IfAndShow.component";
import {ForEachLoopComponent} from "./pages/P13_ForEachLoop.component";
import {AddComponentComponent} from "./pages/P14_AddComponent.component";
import {ComponentAttributeComponent} from "./pages/P15_ComponentAttribute.component";
import {ComponentMethodComponent} from "./pages/P16_ComponentMethod.component";
import {StateContainerComponent} from "./pages/P17_StateContainer.component";
import {ReadJSONComponent} from "./pages/P18_ReadJSON.component";
import {ReadTextComponent} from "./pages/P19_ReadText.component";

const routes: Routes=[
	{path: "", component: IndexComponent},
	{path: "StyleBlock", component: StyleBlockComponent},
	{path: "ScriptBlock", component: ScriptBlockComponent},
	{path: "Formula", component: FormulaComponent},
	{path: "LifeCycle", component: LifeCycleComponent},
	{path: "UseDOMAPI", component: UseDOMAPIComponent},
	{path: "BindingInput", component: BindingInputComponent},
	{path: "BindingInputOneWay", component: BindingInputOneWayComponent},
	{path: "EventHandler", component: EventHandlerComponent},
	{path: "OnChangeEvent", component: OnChangeEventComponent},
	{path: "BindingStyle", component: BindingStyleComponent},
	{path: "BindingClass", component: BindingClassComponent},
	{path: "IfAndShow", component: IfAndShowComponent},
	{path: "ForEachLoop", component: ForEachLoopComponent},
	{path: "AddComponent", component: AddComponentComponent},
	{path: "ComponentAttribute", component: ComponentAttributeComponent},
	{path: "ComponentMethod", component: ComponentMethodComponent},
	{path: "StateContainer", component: StateContainerComponent},
	{path: "ReadJSON", component: ReadJSONComponent},
	{path: "ReadText", component: ReadTextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
