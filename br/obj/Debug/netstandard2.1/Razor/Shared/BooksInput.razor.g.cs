#pragma checksum "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Shared\BooksInput.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "877a69d02e28854828b3bfa2326f8751a014eea4"
// <auto-generated/>
#pragma warning disable 1591
namespace VueVsBlazor.Shared
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
    public partial class BooksInput : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenElement(0, "div");
            __builder.AddMarkupContent(1, "\n\t");
            __builder.OpenElement(2, "div");
            __builder.OpenElement(3, "textarea");
            __builder.AddAttribute(4, "id", "bookList");
            __builder.AddAttribute(5, "value", Microsoft.AspNetCore.Components.BindConverter.FormatValue(
#nullable restore
#line 2 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Shared\BooksInput.razor"
                          bookList

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(6, "onchange", Microsoft.AspNetCore.Components.EventCallback.Factory.CreateBinder(this, __value => bookList = __value, bookList));
            __builder.SetUpdatesAttributeName("value");
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.AddMarkupContent(7, "\n\t");
            __builder.OpenElement(8, "button");
            __builder.AddAttribute(9, "onclick", Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Microsoft.AspNetCore.Components.Web.MouseEventArgs>(this, 
#nullable restore
#line 3 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Shared\BooksInput.razor"
                      setBooks

#line default
#line hidden
#nullable disable
            ));
            __builder.AddContent(10, "Set Books!");
            __builder.CloseElement();
            __builder.AddMarkupContent(11, "\n");
            __builder.CloseElement();
            __builder.AddMarkupContent(12, "\n\n");
            __builder.AddMarkupContent(13, "<style>\n#bookList{\n\theight: 300px;\n\twidth: 300px;\n}\n</style>");
        }
        #pragma warning restore 1998
#nullable restore
#line 16 "C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\br\Shared\BooksInput.razor"
      
	string bookList=$@"たのしいさんすう
たのしいこくご
たのしいどうとく
かぐやひめ
シンデレラ
うらしまたろう
かちかちやま";

	public void setBooks(){
		state.setBooks(Array.FindAll(bookList.Replace("\r\n","\n").Split(new[]{'\n','\r'}),s=>s!=""));
		state.setDate(DateTime.UtcNow+new TimeSpan(9,0,0));
		js.InvokeVoidAsync("alert","setBooks!");
	}

#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private AppState state { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IJSRuntime js { get; set; }
    }
}
#pragma warning restore 1591
