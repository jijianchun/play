<template>
	<div>
		<head-top></head-top>
        <div class="box">
            <el-row class="row">
                <el-col :span="8">
                    <span>数据日期：</span>
                    <el-date-picker
                      class="form-item datepicker"
                      v-model="value9"
                      type="daterange"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      default-value="2017-11-01">
                    </el-date-picker>
                </el-col>
                <el-col :span="8">
                    <span>统计方式：</span>
                    <el-select class="form-item" v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="8">
                    <span>渠道选择：</span>
                    <el-select class="form-item" v-model="value2" placeholder="请选择">
                        <el-option
                          v-for="item in options2"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                
            </el-row>
            <el-row class="row">
                
                <el-col :span="8">
                    <span>合作方式：</span>
                    <el-select class="form-item" v-model="value3" placeholder="请选择">
                        <el-option
                          v-for="item in options3"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="8">
                    <el-button type="primary" @click="search()">搜索</el-button>
                    <el-button type="primary">excel表格导出</el-button>
                </el-col>
                <el-col :span="8">
                    
                </el-col>
            </el-row>
            <el-row class="row">
                <el-col :span="24" class="total-info">
                    <span>合计注册人数：12000</span>
                    <span>合计签约金额：12000</span>
                    <span>合计放款金额：12000</span>
                </el-col>
            </el-row>
            <el-row class="row">
                <el-table
                  :data="tableData"
                  style="width: 100%;">
                  <el-table-column
                    prop="date"
                    label="日期"
                    width="180"
                    align="center">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="180"
                    align="center">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="地址"
                    align="center">
                  </el-table-column>
                </el-table>
            </el-row>
            <el-row class="row">
              <el-pagination
                layout="prev, pager, next"
                :total="1000">
              </el-pagination>
            </el-row>
        </div>
		
  	</div>
</template>

<script>
	import headTop from './headTop'
    export default {
    	data(){
    		return {
               value9:'',
               options: [{
                  value: '1',
                  label: '按日期统计'
                }, {
                  value: '2',
                  label: '按渠道标记统计'
                }],
                value: '',
                options2: [{
                  value: '1',
                  label: '按日期统计'
                }, {
                  value: '2',
                  label: '按渠道标记统计'
                }],
                value2: '',
                options3: [{
                  value: '1',
                  label: '按日期统计'
                }, {
                  value: '2',
                  label: '按渠道标记统计'
                }],
                value3: '',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                  }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                  }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                  }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                  }]
    		}
    	},
        methods:{
            search(){
                console.log(this.value3);
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
        padding:20px;
        .row{
            margin-bottom:15px;
            .total-info{
                margin:20px 0;
                text-align:left;
                padding-left:20px;
                span{
                    margin-right:20px;
                }
            }
        }
        .form-item{
            display:inline-block;
        }
        .datepicker{
            width:220px;
        }
    }
</style>
