#pragma checksum "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P17_StateContainer.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "a569f24382ec21f71ab78c348c5bf3b0a3cae200"
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
    [Microsoft.AspNetCore.Components.RouteAttribute("/StateContainer")]
    public partial class P17_StateContainer : Microsoft.AspNetCore.Components.ComponentBase, IDisposable
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenElement(0, "div");
            __builder.AddMarkupContent(1, "\r\n\t");
            __builder.OpenComponent<VueVsBlazor.Shared.BooksInput>(2);
            __builder.CloseComponent();
            __builder.AddMarkupContent(3, "\r\n\t");
            __builder.OpenElement(4, "button");
            __builder.AddAttribute(5, "onclick", Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Microsoft.AspNetCore.Components.Web.MouseEventArgs>(this, 
#nullable restore
#line 5 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P17_StateContainer.razor"
                      getBooks

#line default
#line hidden
#nullable disable
            ));
            __builder.AddContent(6, "Get Books!");
            __builder.CloseElement();
            __builder.AddMarkupContent(7, "\r\n\t");
            __builder.OpenElement(8, "h3");
            __builder.AddContent(9, "BookLists (");
            __builder.AddContent(10, 
#nullable restore
#line 6 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P17_StateContainer.razor"
                    date

#line default
#line hidden
#nullable disable
            );
            __builder.AddContent(11, ")");
            __builder.CloseElement();
            __builder.AddMarkupContent(12, "\r\n\t");
            __builder.OpenElement(13, "ul");
            __builder.AddMarkupContent(14, "\r\n");
#nullable restore
#line 8 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P17_StateContainer.razor"
         foreach(var book in books){

#line default
#line hidden
#nullable disable
            __builder.OpenElement(15, "li");
            __builder.SetKey(
#nullable restore
#line 8 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P17_StateContainer.razor"
                                              book

#line default
#line hidden
#nullable disable
            );
            __builder.AddContent(16, 
#nullable restore
#line 8 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P17_StateContainer.razor"
                                                     book

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
#nullable restore
#line 8 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P17_StateContainer.razor"
                                                              }

#line default
#line hidden
#nullable disable
            __builder.AddMarkupContent(17, "\t");
            __builder.CloseElement();
            __builder.AddMarkupContent(18, "\r\n");
            __builder.CloseElement();
        }
        #pragma warning restore 1998
#nullable restore
#line 15 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Pages\P17_StateContainer.razor"
      
	protected override void OnInitialized(){state.OnChange+=StateHasChanged;}
	public void Dispose(){state.OnChange-=StateHasChanged;}

	string[] books={};
	DateTime? date=null;

	void getBooks(){
		books=state.books;
		date=state.date;
	}

#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private AppState state { get; set; }
    }
}
#pragma warning restore 1591