<script>
import BaseActionComp from './BaseActionComp.vue'
import {geoMixin} from '../mixins/geoMixin.js'

export default {
  extends: BaseActionComp,
  name: 'ActionGeo',
  mixins: [geoMixin]
}
</script>
<template>
<div class='basic-box'>
  <div><slot>Potential title from parent  </slot></div>
<div>
  <el-form  label-position="right"   :model="actionForm" ref="markergeo" label-width="150px">
    <el-form-item label="Geographic scope">
      <el-select v-model="actionForm.geoScope" value-key="key" placeholder="Select geo scope">
        <el-option
              v-for="item in geoScope"
              :key="item.key"
              :label="item.name"
              :value="item">
        </el-option>
      </el-select>
    </el-form-item>
      <el-form-item label="Geo">
          <el-cascader
              :options="geo"
              :props="geoProps"
              change-on-select
              placeholder="select a country"
              v-model="actionForm.benefiting_zone"
              >
            </el-cascader>
           </el-form-item>
           <el-form-item label="Action location" prop="action_location" >
                 <el-input placeholder="action location" v-model="actionForm.action_location"></el-input>
           </el-form-item>
  </el-form>
</div>
</div>
</template>
