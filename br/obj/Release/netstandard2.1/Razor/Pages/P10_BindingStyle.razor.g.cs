#pragma checksum "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P10_BindingStyle.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "365e43d18158410dfa7fbd5295e26a1f9af9a194"
// <auto-generated/>
#pragma warning disable 1591
namespace VueVsBlazor.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\_Imports.razor"
using VueVsBlazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\_Imports.razor"
using VueVsBlazor.Shared;

#line default
#line hidden
#nullable disable
    [Microsoft.AspNetCore.Components.RouteAttribute("/BindingStyle")]
    public partial class P10_BindingStyle : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenElement(0, "div");
            __builder.AddMarkupContent(1, "\r\n\t");
            __builder.OpenElement(2, "h1");
            __builder.AddContent(3, "Check: ");
            __builder.AddContent(4, 
#nullable restore
#line 4 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P10_BindingStyle.razor"
                isChecked

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
            __builder.AddMarkupContent(5, "\r\n\t");
            __builder.OpenElement(6, "input");
            __builder.AddAttribute(7, "id", "chk");
            __builder.AddAttribute(8, "type", "checkbox");
            __builder.AddAttribute(9, "checked", Microsoft.AspNetCore.Components.BindConverter.FormatValue(
#nullable restore
#line 5 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P10_BindingStyle.razor"
                                       isChecked

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(10, "onchange", Microsoft.AspNetCore.Components.EventCallback.Factory.CreateBinder(this, __value => isChecked = __value, isChecked));
            __builder.SetUpdatesAttributeName("checked");
            __builder.CloseElement();
            __builder.AddContent(11, 
#nullable restore
#line 5 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P10_BindingStyle.razor"
                                                    ""
	

#line default
#line hidden
#nullable disable
            );
            __builder.AddMarkupContent(12, "<label for=\"chk\">CheckBox</label>\r\n\t");
            __builder.OpenElement(13, "div");
            __builder.AddAttribute(14, "style", 
#nullable restore
#line 7 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P10_BindingStyle.razor"
                 "color:"+(isChecked? "blue": "red")

#line default
#line hidden
#nullable disable
            );
            __builder.AddMarkupContent(15, "\r\n\t\tChange Style!\r\n\t");
            __builder.CloseElement();
            __builder.AddMarkupContent(16, "\r\n");
            __builder.CloseElement();
        }
        #pragma warning restore 1998
#nullable restore
#line 12 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P10_BindingStyle.razor"
      
	bool isChecked=false;

#line default
#line hidden
#nullable disable
    }
}
#pragma warning restore 1591
