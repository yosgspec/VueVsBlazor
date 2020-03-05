<template>
<main style=display:flex>
	<NavMenu />
	<div class=v-hr></div>
	<div>
		<router-view/>
		<CodeView />
	</div>
</main>
</template>

<style scoped>
.v-hr{
	margin: 0 10px;
	border-right: 5px solid #CCC;
	height: 98vh;
}
</style>

<script lang:ts>
import {Component,Vue} from "vue-property-decorator";
import NavMenu from "@/components/NavMenu.vue";
import CodeView from "@/components/CodeView.vue";

@Component({
	components:{
		NavMenu,
		CodeView
	}
})
export default class App extends Vue{}
</script>
