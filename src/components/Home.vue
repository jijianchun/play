<template>
	<div class="box">
		<head-top v-on:listenToChildEvent="showMsgFromChild"></head-top>
        <el-row class="row">
            <ul class="play-list">
                <li v-for="player in players" @click="goDetail(player.player_id)">
                    <div class="img"><img :src="player.player_image"></div>
                    <div class="cname">{{player.player_name}}</div>
                    <div class="ename">{{player.full_name}}</div>
                </li>
            </ul>
        </el-row>
        <canvas id="canvas" ref="mybox" width="200" height="200"></canvas>
		
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
                },
                players: []
    		}
    	},
        mounted(){
            this.initdata();
        },
        methods:{
            // 监听子组件的事件并获取数据
            showMsgFromChild:function(data){
                this.info.name = data;
                this.$http.post('http://localhost/players/index.php?g=Demo&m=Index&a=query',qs.stringify(this.info)).then((res) => {
                    console.log(res.data);
                    this.players = res.data;
                })
            },
            // 去详情页面
            goDetail:function(player_id){
                this.$router.push({path: '/Detail?id=' + player_id})
            },
            initdata:function(){
                let canvas = document.getElementById("canvas");
                console.log(canvas);
                let ctx = canvas.getContext('2d');
                let radians = (Math.PI / 180) * 180;
                let startTime = Date.now();
                let time = 2000;
                let clockwise = 1;
                let cp1x, cp1y, cp2x, cp2y;
                
                // 初始状态
                // ctx.bezierCurveTo(90, 28, 92, 179, 200, 100);
                // 末尾状态
                // ctx.bezierCurveTo(145, 100, 41, 100, 200, 100);
                
                requestAnimationFrame(function waveDraw() {  
                    let t = Math.min(1.0, (Date.now() - startTime) / time);
                      
                    if(clockwise) {
                        cp1x = 90 + (55 * t);
                        cp1y = 28 + (72 * t);
                        cp2x = 92 - (51 * t);
                        cp2y = 179 - (79 * t);
                    } else {
                        cp1x = 145 - (55 * t);
                        cp1y = 100 - (72 * t);
                        cp2x = 41 + (51 * t);
                        cp2y = 100 + (79 * t);
                    }
                    
                    ctx.clearRect(0, 0, 200, 200); 
                    ctx.beginPath();
                    ctx.moveTo(0, 100);
                    // 绘制三次贝塞尔曲线
                    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, 200, 100);
                    // 绘制圆弧
                    ctx.arc(100, 100, 100, 0, radians, 0);
                    ctx.fillStyle = "rgba(154, 205, 50, .8)";
                    ctx.fill();
                    ctx.save();  
                    
                    if( t == 1 ) {
                        startTime = Date.now();
                        clockwise = !clockwise;
                    } 

                    requestAnimationFrame(waveDraw);
                });
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
            
        }
        .form-item{
            display:inline-block;
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
                    height:37/@r;
                    font-size:37/@r;
                    margin:5px 0;
                }
                .ename{
                    height:80/@r;
                    line-height:40/@r;
                    font-size:38/@r;
                }
            }
        }
    }
    #canvas {
        margin-top:100px;
        box-sizing: content-box;
        padding: 5px;
        background-color: #fff;
        border-radius: 100%;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        border: 10px solid rgba(154, 205, 50, .8);  
    }
</style>
