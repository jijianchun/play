<template>
    <div class="header_container">

		<el-row class="row">
            <el-col :span="20">
                <el-input v-model="info.name" placeholder="球员姓名"></el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="search">搜索</el-button>
            </el-col> 
        </el-row>
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
			// 传递搜索名称给父组件
			this.$emit("listenToChildEvent",this.info.name);
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
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
		position:fixed;
		top:0;
		left:0;
		width:100%;
	}
</style>
