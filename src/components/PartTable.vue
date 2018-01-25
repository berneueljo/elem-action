<template>
  <div class="basic-box innerTable">
      <div><slot></slot></div>
    <el-table :data="parts" show-summary  sum-text="Tot." style="width:100%">
      <template slot="empty">
          No part encoded
      </template>
      <template slot="append">
        <el-button
          size="mini"
          @click="$emit('add')" icon="el-icon-circle-plus-outline"  >Add Action Part...</el-button>
    </template>
      <el-table-column
      type="index" />
     <el-table-column prop="name" label="Title" width="300"> </el-table-column>
     <el-table-column type="expand">
      <template slot-scope="props">
        <p>{{ props.row.management }} Mode: {{ props.row.mode.name }}</p>
        <p>{{ props.row.implementingPartner.slice(-1)[0] }}</p>
        <p>Comment: {{ props.row.comment }}</p>
      </template>
    </el-table-column>
    <el-table-column label="Amount EUR" align="center"  >
     <el-table-column prop="EU_amount"  align="right"  label="EU" width="100"></el-table-column>
     <el-table-column prop="other_amount" align="right"  label="Other" width="100"></el-table-column>
     </el-table-column>
     <el-table-column
      label="Operations">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="$emit('edit', scope.$index)" icon="el-icon-edit"  ></el-button>
        <el-button
          size="mini"
          @click="$emit('remove', scope.$index)" icon="el-icon-delete" ></el-button>
      </template>
    </el-table-column>
   </el-table>
  </div>
</template>
<script>

export default {
  name: 'PartTable' ,
  props: {
    parts: {
      type: Array,
      required: true
    },
    methods: {
      formatAmount  (row, column, cellValue) {
        return  new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 5 }).format(cellValue)
      }
    }
  }
}

</script>

<style>

</style>
