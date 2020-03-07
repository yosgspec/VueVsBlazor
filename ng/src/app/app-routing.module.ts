import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {IndexComponent} from "./pages/Index/Index.component";
import {P1StyleBlockComponent} from "./pages/P1_StyleBlock/P1_StyleBlock.component";
import {P2ScriptBlockComponent} from "./pages/P2_ScriptBlock/P2_ScriptBlock.component";
import {P3FormulaComponent} from "./pages/P3_Formula/P3_Formula.component";
import {P4LifeCycleComponent} from "./pages/P4_LifeCycle/P4_LifeCycle.component";
import {P5UseDOMAPIComponent} from "./pages/P5_UseDOMAPI/P5_UseDOMAPI.component";
import {P6BindingInputComponent} from "./pages/P6_BindingInput/P6_BindingInput.component";
import {P7BindingInputOneWayComponent} from "./pages/P7_BindingInputOneWay/P7_BindingInputOneWay.component";
import {P8EventHandlerComponent} from "./pages/P8_EventHandler/P8_EventHandler.component";
import {P9OnChangeEventComponent} from "./pages/P9_OnChangeEvent/P9_OnChangeEvent.component";
import {P10BindingStyleComponent} from "./pages/P10_BindingStyle/P10_BindingStyle.component";
import {P11BindingClassComponent} from "./pages/P11_BindingClass/P11_BindingClass.component";
import {P12IfAndShowComponent} from "./pages/P12_IfAndShow/P12_IfAndShow.component";
import {P13ForEachLoopComponent} from "./pages/P13_ForEachLoop/P13_ForEachLoop.component";
import {P14AddComponentComponent} from "./pages/P14_AddComponent/P14_AddComponent.component";
import {P15ComponentAttributeComponent} from "./pages/P15_ComponentAttribute/P15_ComponentAttribute.component";
import {P16ComponentMethodComponent} from "./pages/P16_ComponentMethod/P16_ComponentMethod.component";
import {P17StateContainerComponent} from "./pages/P17_StateContainer/P17_StateContainer.component";
import {P18ReadJSONComponent} from "./pages/P18_ReadJSON/P18_ReadJSON.component";
import {P19ReadTextComponent} from "./pages/P19_ReadText/P19_ReadText.component";

const routes: Routes=[
	{path: "", component: IndexComponent},
	{path: "StyleBlock", component: P1StyleBlockComponent},
	{path: "ScriptBlock", component: P2ScriptBlockComponent},
	{path: "Formula", component: P3FormulaComponent},
	{path: "LifeCycle", component: P4LifeCycleComponent},
	{path: "UseDOMAPI", component: P5UseDOMAPIComponent},
	{path: "BindingInput", component: P6BindingInputComponent},
	{path: "BindingInputOneWay", component: P7BindingInputOneWayComponent},
	{path: "EventHandler", component: P8EventHandlerComponent},
	{path: "OnChangeEvent", component: P9OnChangeEventComponent},
	{path: "BindingStyle", component: P10BindingStyleComponent},
	{path: "BindingClass", component: P11BindingClassComponent},
	{path: "IfAndShow", component: P12IfAndShowComponent},
	{path: "ForEachLoop", component: P13ForEachLoopComponent},
	{path: "AddComponent", component: P14AddComponentComponent},
	{path: "ComponentAttribute", component: P15ComponentAttributeComponent},
	{path: "ComponentMethod", component: P16ComponentMethodComponent},
	{path: "StateContainer", component: P17StateContainerComponent},
	{path: "ReadJSON", component: P18ReadJSONComponent},
	{path: "ReadText", component: P19ReadTextComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }