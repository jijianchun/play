<template>
	<div>
		<head-top></head-top>
        <div class="box">
            <el-row class="row">
                <el-col :span="20">
                    <el-input v-model="info.name" placeholder="球员姓名"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="search()">搜索</el-button>
                </el-col> 
            </el-row>

        </div>
		
  	</div>
</template>

<script>
	import qs from 'qs'
	import headTop from './headTop'
    export default {
    	data(){
    		return {
    			info:{
    				name:''
    			}
    		}
    	},
        methods:{
            search(){

            	this.$http.post('http://localhost/players/index.php?g=Demo&m=Index&a=query',qs.stringify(this.info)).then((res) => {
            		console.log(res);
            	})
            	/*this.$http.post('http://localhost/players/login',this.loginForm).then((res) => {

			    	if(res.data.success){

			    		this.$message({
			    			type: 'success',
			    			message: '登录成功'
			    		});
			    		
			    		this.$router.push('manage');
			    	}else{
			    		this.$message({
			    			type: 'error',
			    			message: res.data.msg
			    		})
			    	}
			    });*/
            }
        },
    	components:{
    		headTop
    	}
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
    .box{
    	padding:5px;
        .row{
            margin-bottom:15px;
            
        }
        .form-item{
            display:inline-block;
        }
    }
</style>
