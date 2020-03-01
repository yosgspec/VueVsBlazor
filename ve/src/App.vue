<template>
<main style=display:flex>
	<NavMenu />
	<div class=v-hr></div>
	<router-view/>
</main>
</template>

<style scoped>
.v-hr{
	margin: 0 10px;
	border-right: 5px solid #CCC;
	height: 100vh;
}
</style>

<script lang:ts>
import {Component,Vue} from "vue-property-decorator";
import NavMenu from "@/components/NavMenu.vue";

@Component({
	components:{
		NavMenu
	}
})
export default class App extends Vue{}
</script>
