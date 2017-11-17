<template>
	<div class="box">
		<dl>
			<dt>球员姓名</dt>
			<dd>{{player.player_name}}</dd>
		</dl>
		<dl>
			<dt>球员英文全称</dt>
			<dd></dd>
		</dl>
		<dl>
			<dt>球员身高</dt>
			<dd></dd>
		</dl>
		<dl>
			<dt>球员体重</dt>
			<dd></dd>
		</dl>
		<dl>
			<dt>球员位置</dt>
			<dd></dd>
		</dl>
		<dl>
			<dt>球员生日</dt>
			<dd></dd>
		</dl>
		<dl>
			<dt>出生城市</dt>
			<dd></dd>
		</dl>
		<dl>
			<dt>毕业学校</dt>
			<dd></dd>
		</dl>
		<dl>
			<dt>球衣号码</dt>
			<dd></dd>
		</dl>
		<dl>
			<dt>选秀情况</dt>
			<dd></dd>
		</dl>
		<dl>
			<dt>当前年薪</dt>
			<dd></dd>
		</dl>

        
  	</div>
</template>

<script>
	import qs from 'qs'
	import headTop from './headTop'
    export default {
    	data(){
    		return {
    			player:{}
    		}
    	},
    	created(){
    		this.fetchData();
    		
    	},
        methods:{
            fetchData(){
            	// console.log(this.$route.query.id);
            	this.$http.get('http://localhost/players/index.php?g=Demo&m=Index&a=findById&id='+this.$route.query.id).then((res) => {
            		this.player = res.data;
                    //console.log(res.data);
                })
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
		dl{
			display:flex;
			flex-direction:row;
			dt{
				
			}
		}
	}
</style>
