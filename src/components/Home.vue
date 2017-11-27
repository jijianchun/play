<template>
	<div class="box">
		<head-top v-on:listenToChildEvent="showMsgFromChild"></head-top>

        <el-row class="row">
            <h1 class="title">新增球员</h1>
            <ul class="play-list">
                <li v-for="player in newPlayers" @click="goDetail(player.player_id)">
                    <div class="img"><img :src="player.player_image"></div>
                    <div class="cname">{{player.player_name}}</div>
                    <div class="ename">{{player.full_name}}</div>
                </li>
            </ul>
        </el-row>
		
  	</div>
</template>

<script>
	import qs from 'qs'
    import {apiUrl} from '../config/env'
	import headTop from './headTop'
    export default {
    	data(){
    		return {
                info:{
                    name:''
                },
                players: [],
                newPlayers: []
    		}
    	},
        created(){
            this.initdata();
        },
        methods:{
            // 监听子组件的事件并获取数据
            showMsgFromChild:function(data){
                this.info.name = data;
                this.$http.post(apiUrl+'/players/index.php?g=Demo&m=Index&a=query',qs.stringify(this.info)).then((res) => {
                    this.players = res.data;
                })
            },
            // 去详情页面
            goDetail:function(player_id){
                this.$router.push({path: '/Detail?id=' + player_id})
            },
            initdata:function(){
                // 最新增加球员
                this.$http.get(apiUrl+'/players/index.php?g=Demo&m=Index&a=getNewPlayer').then((res) => {
                    this.newPlayers = res.data;
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
    	padding-top:60px;
        .row{
            margin-bottom:15px;
            .title{
                height:70/@r;
                line-height:70/@r;
                text-align:center;
                font-size:25/@r;
            }
        }
        .play-list{
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            li{
                width:50%;
                padding:10px;
                box-sizing:border-box;
                .img{
                    img{max-width:100%; height:80px;}
                }
                .cname{
                    height:20/@r;
                    font-size:20/@r;
                    margin:5px 0;
                }
                .ename{
                    height:80/@r;
                    line-height:40/@r;
                    font-size:20/@r;
                }
            }
        }
    }
</style>
