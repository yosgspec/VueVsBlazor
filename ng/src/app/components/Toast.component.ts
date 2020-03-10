const template=`
<dialog [open]="isShow">
	{{msg}}
</dialog>
`;

import {Component} from "@angular/core";

@Component({
	selector: "Toast",
	template: template
})
export class ToastComponent{
	isShow=false;
	msg="";

	public async show(msg:string){
		this.msg=msg;
		this.isShow=true;
		await new Promise(res=>setTimeout(res,1500));
		this.isShow=false;
	}
}
