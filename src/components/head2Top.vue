<template>
    <div class="header_container">

		<div class="back" @click="back">
			<i class="el-icon-arrow-left"></i>
		</div>
		<div class="search-box">
			<span v-if="type == 'detail'">球员详情</span>
			<span v-if="type == 'list'">球员列表</span>
		</div>
		<div class="space">
			
		</div>

    </div>
</template>

<script>

export default {
	props: ['type'],
	data() {
		return {
			
		}
	},
	methods: {
		back(){
			this.$router.go(-1);
		}
	}
}
    
</script>

<style lang="less" scoped>
	@import '../style/mixin';
	.header_container{
		background-color: #EFF2F7;
		height: 40px;
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
			font-size:30/@r;
		}
		.space{
			width:60/@r;
		}
	}
</style>
