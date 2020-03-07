import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule}   from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";

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

import {NavMenuComponent} from "./components/NavMenu/NavMenu.component";
import {CodeViewComponent} from "./components/CodeView/CodeView.component";
import {ComponentAComponent} from "./components/ComponentA/ComponentA.component";
import {ComponentBComponent} from "./components/ComponentB/ComponentB.component";
import {ComponentCComponent} from "./components/ComponentC/ComponentC.component";
import {ToastComponent} from "./components/Toast/Toast.component";
import {BooksInputComponent} from "./components/BooksInput/BooksInput.component";

@NgModule({
	declarations:[
		AppComponent,
		IndexComponent,
		P1StyleBlockComponent,
		P2ScriptBlockComponent,
		P3FormulaComponent,
		P4LifeCycleComponent,
		P5UseDOMAPIComponent,
		P6BindingInputComponent,
		P7BindingInputOneWayComponent,
		P8EventHandlerComponent,
		P9OnChangeEventComponent,
		P10BindingStyleComponent,
		P11BindingClassComponent,
		P12IfAndShowComponent,
		P13ForEachLoopComponent,
		P14AddComponentComponent,
		P15ComponentAttributeComponent,
		P16ComponentMethodComponent,
		P17StateContainerComponent,
		P18ReadJSONComponent,
		P19ReadTextComponent,

		NavMenuComponent,
		CodeViewComponent,
		ComponentAComponent,
		ComponentBComponent,
		ComponentCComponent,
		ToastComponent,
		BooksInputComponent
	],
	imports:[
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
		providers: [],
		bootstrap: [AppComponent]
})
export class AppModule {}
