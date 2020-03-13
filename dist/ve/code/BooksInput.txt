<template>
<div>
	<div><textarea v-model="bookList" id="bookList"></textarea></div>
	<button @click="setBooks">Set Books!</button>
</div>
</template>

<style scoped>
#bookList{
	height: 300px;
	width: 300px;
}
</style>

<script lang=ts>
import {Component,Vue,Prop} from "vue-property-decorator";
import store from "@/store";

@Component
export default class BooksInput extends Vue{
	bookList=`たのしいさんすう
たのしいこくご
たのしいどうとく
かぐやひめ
シンデレラ
うらしまたろう
かちかちやま`;

	public setBooks(){
		store.commit("setBooks",this.bookList.split(/\r|\n|\r\n/).filter(s=>s!=""));
		store.commit("setDate",new Date());
		alert("setBooks!");
	}
}
</script>
