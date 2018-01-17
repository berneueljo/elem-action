<template>
<div class='basic-box'>
  <div><slot></slot></div>
<div>
    <el-form  label-position="right"
    :model="actionForm" ref="actionForm" label-width="150px">
        <el-form-item label="SDGs">
          <el-select v-model="actionForm.sdg" value-key="key" multiple
           style="margin-left: 20px;" placeholder="Select SDG">
            <el-option
                  v-for="item in sdgs"
                  :key="item.key"
                  :label="item.label"
                  :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        </el-form-item>


      </el-form>
</div>
</div>
</template>
<script>
import BaseActionComp from './BaseActionComp.vue'
 import {sdgOptions} from '../params.js'

// import {geoScope} from '../params.js'

export default {
  extends: BaseActionComp,
  name: 'ActionSDG',
  data: function ()  {
    return {
      sdgOptions: sdgOptions
      }
   }
 }
</script>
