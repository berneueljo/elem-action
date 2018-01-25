<template>
<div class='basic-box'>
  <slot></slot>
  <el-form  label-position="right" ref="identity"
            :model="actionForm"
            :rules="rules" label-width="150px">
    <el-form-item label="Id">
      <el-row :gutter="10">
        <el-col :span="6">
          <div> Year:
             <el-input-number v-model="actionForm.year" controls-position="right"
                :min="rules.year[0].min" :max="rules.year[0].max" ></el-input-number>
          </div>
        </el-col>
        <el-col class="line" :span="2"><div>-</div></el-col>
        <el-col :span="6">
          <div>
            Number:
          <el-input-number v-model="actionForm.id" controls-position="right" :min="rules.id[0].min" :max="rules.id[0].max"></el-input-number>
        </div>
        </el-col>
</el-row>


    </el-form-item>
    <el-form-item label="Action Title" prop="name" >
      <el-input placeholder="please input the action title" v-model="actionForm.name"></el-input>
    </el-form-item>
    <el-form-item label="Description">
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 9}"
        placeholder="Please input a short description of the action"
        v-model="actionForm.description">
      </el-input>
    </el-form-item>

        <el-form-item label="Indicative pipeline" prop="decisionDate" >

          <el-row :gutter="10">
         <el-col :span="7">
          <div>
          <span> EU Decision </span></p>
          <span> <el-date-picker
            size="mini"
            type="month"
            v-model="actionForm.decisionDate"
            placeholder="Pick a month"
            :picker-options="pickerOptions" >
      </el-date-picker> </span>
    </div>
  </el-col>
  <el-col :span="7">
    <div>
      <span>Activities' start </span></p>
      <span>
        <el-date-picker
            size="mini"
            v-model="actionForm.startingDate"
            type="month"
            placeholder="Pick a month"
            :default-value="actionForm.decisionDate.UTC" >
          </el-date-picker>
        </span>
      </div>
    </el-col>
    <el-col :span="7">
      <div>
        <span>Duration </span></p><span>
      <el-input-number
         size="mini"
         v-model="actionForm.implementationPeriod"
         controls-position="right"
         :min="12" :max="100" >
       </el-input-number> months
     </span>
   </div>
    </el-col>
    </el-row>
    </el-form-item>
    <el-form-item label="Design status" prop="status" >
      <el-select v-model="actionForm.status" value-key="key" placeholder="Select document status">
        <el-option
              v-for="item in designStages"
              :key="item.key"
              :label="item.label"
              :value="item">
        </el-option>
      </el-select>
    </el-form-item>

  </el-form>
</div>
</template>
<script>
import BaseActionComp from './BaseActionComp.vue'
// import {geoScope} from '../params.js'

export default {
  extends: BaseActionComp,
  name: 'ActionIdentity',
  data: function ()  {
    return {
      rules: {
          name: [
            { required: true,
              message: 'Please input Action name',
              trigger: 'blur'
             },
            { min: 8,
              max: 80,
              message: 'Length should be 8 to 80',
              trigger: 'blur'
            }
          ],
          year:[
            { required: true,
              message: 'Please input year',
              trigger: 'blur'
             },
            { min: 2018,
              max: 2030,
              message: 'year should be between 2016 and 2030',
              trigger: 'blur'
            }
          ],
          id:[
            { required: true,
              message: 'Please input id',
              trigger: 'blur'
            },
            { min: 1,
              max: 999999,
              message: 'id should be between 1 and 999999',
              trigger: 'blur'
            }
          ],
          implementationPeriod: [
            { required: true,
              message: 'required value',
              trigger: 'blur'
            }
          ]
      },
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now();
          },
          shortcuts: [{
            text: '3 months from now',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24* 92);
              picker.$emit('pick', date);
            }
          }, {
            text: '6 months from now',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24* 183);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A year from now',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 366);
              picker.$emit('pick', date);
            }
          }]
        }
   }
 }
}
</script>
