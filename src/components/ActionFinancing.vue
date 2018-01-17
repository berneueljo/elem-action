<template>
<div class='basic-box'>
  <slot>Financing :  </slot>
  <el-form  label-position="right"   :model="actionForm" ref="actionForm"  label-width="150px">
    <el-form-item label="Fin. Instrument">
      <el-select v-model="actionForm.financingInstrument" value-key="key" placeholder="Select Fin Instrument">
        <el-option
              v-for="item in instrumentOptions"
              :key="item.key"
              :label="item.label"
              :value="item">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Approach" prop="approach"  >
        <el-radio
           v-for="item in approachOptions"
           v-model="actionForm.approach"
           :key="item.key"
           :label="item.key">{{item.label}}</el-radio>
    </el-form-item>
    <el-form-item label="Fin. agreement?" prop="signFinancingAgreement" >
      <el-checkbox v-model="actionForm.signFinancingAgreement"></el-checkbox>
    </el-form-item>
  </el-form>
</div>
</template>
<script>
import {instrumentOptions, approachOptions} from '../params.js'

import BaseActionComp from './BaseActionComp.vue'

export default {
  extends: BaseActionComp,
  name: 'ActionFinancing',
  data: function ()  {
    return {
      instrumentOptions: instrumentOptions,
      approachOptions : approachOptions
   }
 }
}
</script>
