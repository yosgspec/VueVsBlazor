#pragma checksum "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P19_ReadText.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "aea581d7c79eb551cd9e9db7d52ea743b96c36a4"
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
    [Microsoft.AspNetCore.Components.RouteAttribute("/ReadText")]
    public partial class P19_ReadText : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenElement(0, "div");
            __builder.AddMarkupContent(1, "\r\n\t");
            __builder.AddMarkupContent(2, "<h3>Read Text</h3>\r\n\t");
            __builder.OpenElement(3, "pre");
            __builder.AddContent(4, 
#nullable restore
#line 5 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P19_ReadText.razor"
          text

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
            __builder.AddMarkupContent(5, "\r\n");
            __builder.CloseElement();
        }
        #pragma warning restore 1998
#nullable restore
#line 10 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P19_ReadText.razor"
      
	string text="";

	protected override async Task OnAfterRenderAsync(bool firstRender){
		if(!firstRender) return;
		text=await http.GetStringAsync("./kimigayo.txt?0");
		StateHasChanged();
	}

#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private HttpClient http { get; set; }
    }
}
#pragma warning restore 1591
