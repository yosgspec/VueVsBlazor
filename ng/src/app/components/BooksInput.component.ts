const template=`
<div>
	<div><textarea [(ngModel)]="bookList" id="bookList"></textarea></div>
	<button (click)="setBooks()">Set Books!</button>
</div>

<style>
#bookList{
	height: 300px;
	width: 300px;
}
</style>
`;

import {Component} from "@angular/core";
import {StoreService} from "../store.service";

@Component({
	selector: "BooksInput",
	template: template
})
export class BooksInputComponent{
	constructor(
		private store:StoreService
	){}
	bookList=`たのしいさんすう
たのしいこくご
たのしいどうとく
かぐやひめ
シンデレラ
うらしまたろう
かちかちやま`;

	public setBooks(){
		this.store.books=this.bookList.split(/\r|\n|\r\n/).filter(s=>s!="");
		this.store.date=new Date();
		alert("setBooks!");
	}
}
