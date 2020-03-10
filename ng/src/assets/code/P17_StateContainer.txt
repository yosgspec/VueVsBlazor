const template=`
<div>
	<BooksInput></BooksInput>
	<button (click)="getBooks()">Get Books!</button>
	<h3>BookLists ({{date}})</h3>
	<ul>
		<li *ngFor="let book of books">{{book}}</li>
	</ul>
</div>
`;

import {Component} from "@angular/core";
import {StoreService} from "../store.service";

@Component({
	selector: "StateContainer",
	template: template
})
export class StateContainerComponent{
	constructor(
		private store:StoreService
	){};
	books:string[]=[];
	date:Date=null;

	getBooks(){
		this.books=this.store.books;
		this.date=this.store.date;
	}
}
