import {Injectable} from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class StoreService{
	books:string[]=[];
	date:Date=null;
}
