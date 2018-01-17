<template>
<div class='basic-box'>
  <div><slot>Potential title from parent  </slot></div>
<div>
  <el-form  label-position="right"   :model="actionForm" ref="marker" label-width="150px">
  <div  v-for="itm in markers">
    <el-form-item :label="itm.name">
                <el-slider
                     v-model="itm.value"
                     :min="0"
                     :max="3"
                     :step="1"
                     :format-tooltip="getText"
                     show-stops>
                   </el-slider>
    </el-form-item>
  </div>
  </el-form>
<p/>
</div>
</div>
</template>
<script>
import {markerMixin} from '../mixins/markerMixin.js'
import BaseActionComp from './BaseActionComp.vue'

export default {
  extends: BaseActionComp,
  name: 'ActionMarkers',
  mixins:[markerMixin],
  props: {
    markers: {
      type: Array,
      required: true
    }
  }
}
</script>
