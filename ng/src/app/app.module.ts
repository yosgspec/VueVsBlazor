import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule}   from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";

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
import {InnerHTMLComponent} from "./pages/P20_InnerHTML.component";

import {NavMenuComponent} from "./components/NavMenu.component";
import {CodeViewComponent} from "./components/CodeView.component";
import {ComponentAComponent} from "./components/ComponentA.component";
import {ComponentBComponent} from "./components/ComponentB.component";
import {ComponentCComponent} from "./components/ComponentC.component";
import {ToastComponent} from "./components/Toast.component";
import {BooksInputComponent} from "./components/BooksInput.component";

@NgModule({
	declarations:[
		AppComponent,
		IndexComponent,
		StyleBlockComponent,
		ScriptBlockComponent,
		FormulaComponent,
		LifeCycleComponent,
		UseDOMAPIComponent,
		BindingInputComponent,
		BindingInputOneWayComponent,
		EventHandlerComponent,
		OnChangeEventComponent,
		BindingStyleComponent,
		BindingClassComponent,
		IfAndShowComponent,
		ForEachLoopComponent,
		AddComponentComponent,
		ComponentAttributeComponent,
		ComponentMethodComponent,
		StateContainerComponent,
		ReadJSONComponent,
		ReadTextComponent,
		InnerHTMLComponent,

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
