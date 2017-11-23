<template>
    <div class="header_container">

		<div class="back">
			<!-- <i class="el-icon-arrow-left"></i> -->
		</div>
		<div class="search-box">
			<el-input v-model="info.name" placeholder="球员姓名"></el-input>
		</div>
		<div class="search-btn">
			<el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
		</div>

    </div>
</template>

<script>

export default {
	props:['name'],
	data() {
		return {
			info:{
				name:''
			}
		}
	},
	created() {

	},
	methods: {
		search(){
			this.$router.push({path: '/List?name=' + this.info.name});
			// 传递搜索名称给父组件
			// this.$emit("listenToChildEvent",this.info.name);
		}
	}
}
    
</script>

<style lang="less" scoped>
	@import '../style/mixin';
	.header_container{
		background-color: #EFF2F7;
		height: 60px;
		display: flex;
		align-items: center;
		position:fixed;
		top:0;
		left:0;
		width:100%;
		.back{
			width:70/@r;
		}
		.search-box{
			flex:1;
		}
		.search-btn{
			width:200/@r;
		}
	}
</style>
