import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
	state:{
		books: [] as string[],
		date: null as Date
	},
	mutations:{
		setBooks(state,books:string[]){
			state.books=books;
		},
		setDate(state,date:Date){
			state.date=date;
		}
	}
});
