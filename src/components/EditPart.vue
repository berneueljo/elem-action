<template>
    <el-dialog title="Edit Action Part" :before-close="handleClose"  :visible="true" >
    <el-form  label-position="right"   :model="part" ref="part"  :rules="rules" label-width="150px">
      <el-form-item label="Part Title" prop="name" >
        <el-input placeholder="action title" v-model="part.name"></el-input>
      </el-form-item>
      <el-form-item label="Management" prop="approach" >
      <el-radio v-model="part.management" label="direct">Direct</el-radio>
        <el-radio v-model="part.management" label="indirect">Indirect</el-radio>
      </el-form-item>
      <el-form-item label="Mode">
        <el-select v-model="part.mode" value-key="key"
         style="margin-left: 20px;" placeholder="Select Mode">
          <el-option
                v-for="item in filter( part.management, approach)"
                :key="item.key"
                :label="item.name"
                :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Channel">
        <el-cascader
            :options="channelsTree.children"
            :props="channelsProps"
            change-on-select
            placeholder="select a channel"
            v-model="part.channel"
            >
          </el-cascader>
      </el-form-item>
      <el-form-item label="Partner">
        <el-cascader
            :options="partners"
            :props="partnersProps"
            change-on-select
            placeholder="select a partner"
            v-model="part.implementingPartner"
            >
          </el-cascader>
      </el-form-item>
      <el-form-item label="EU Amount">
      <el-input-number v-model="part.EU_amount"
           controls-position="right" :step="1000000" :min="0" :max="99999999"></el-input-number>
    </el-form-item>
    <el-form-item label="Other Amount">
    <el-input-number v-model="part.other_amount"
           controls-position="right" :step="1000000" :min="0" :max="99999999"></el-input-number>
  </el-form-item>
  <el-form-item label="Comment">
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 5}"
      placeholder="Please input"
      v-model="part.comment">
    </el-input>
  </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
   <el-button type="primary" @click="$emit('hide')" >Done</el-button>
 </span>
  </el-dialog>
</template>
<script>
import {modeOptions,implementingPartners} from '../params.js'

export default {
  name: 'EditTable' ,
  props: {
    part: {
      type: Object,
      required: true
    },
    approach: {
      type: String,
      required: true
    }
  },
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
          ]
      },
      modeOptions: modeOptions
    };
  },
  methods: {
    handleClose(done) {
       this.$emit('hide')
         .then(_ => {
           done();
         })
         .catch(_ => {});
     },
     filter(manag, approach) {
       return modeOptions.filterOptionsByContext(manag, approach)
      }
    }
}
</script>

<style>
</style>
