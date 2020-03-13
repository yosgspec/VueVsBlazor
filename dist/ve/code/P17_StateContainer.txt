<template>
<div>
	<BooksInput />
	<button @click="getBooks">Get Books!</button>
	<h3>BookLists ({{date}})</h3>
	<ul>
		<li v-for="book in books" :key="book">{{book}}</li>
	</ul>
</div>
</template>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";
import BooksInput from "@/components/BooksInput.vue";
import store from "@/store";

@Component({
	components:{
		BooksInput
	}
})
export default class StateContainer extends Vue{
	books:string[]=[];
	date:Date=null;

	getBooks(){
		this.books=store.state.books;
		this.date=store.state.date;
	}
}
</script>
