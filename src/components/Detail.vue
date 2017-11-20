<template>
	<div class="box">
		<dl>
			<dt>球员姓名</dt>
			<dd>{{player.player_name}}</dd>
		</dl>
		<dl>
			<dt>球员头像</dt>
			<dd><img :src="player.player_image"></dd>
		</dl>
		<dl>
			<dt>球员英文全称</dt>
			<dd>{{player.full_name}}</dd>
		</dl>
		<dl>
			<dt>球员身高</dt>
			<dd>{{player.player_height}}</dd>
		</dl>
		<dl>
			<dt>球员体重</dt>
			<dd>{{player.player_weight}}</dd>
		</dl>
		<dl>
			<dt>球员位置</dt>
			<dd>{{player.player_place}}</dd>
		</dl>
		<dl>
			<dt>球员生日</dt>
			<dd>{{player.player_brithday}}</dd>
		</dl>
		<dl>
			<dt>出生城市</dt>
			<dd>{{player.player_city}}</dd>
		</dl>
		<dl>
			<dt>毕业学校</dt>
			<dd>{{player.player_college}}</dd>
		</dl>
		<dl>
			<dt>球衣号码</dt>
			<dd>{{player.player_number}}</dd>
		</dl>
		<dl>
			<dt>选秀情况</dt>
			<dd>{{player.player_draft}}</dd>
		</dl>
		<dl>
			<dt>当前年薪</dt>
			<dd>{{player.player_salary}}</dd>
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
	@import '../style/common';
	@import '../style/mixin';
	.box{
		padding:10px;
		dl{
			display:flex;
			flex-direction:row;
			height:80/@r;
			line-height:80/@r;
			padding:5px;
			border-bottom:1px dashed #e8e8e8;
			dt{
				width:35%;
				font-size:25/@r;
				text-align:center;
			}
			dd{
				flex:1;
				font-size:25/@r;
				text-align:left;
				img{
					height:100%;
				}
			}
		}
	}
</style>
