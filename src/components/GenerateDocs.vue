<template>
  <div id="second">
    <h1> Generate elements </h1>
     <p>     <el-button type="primary"
                        icon="el-icon-document"
                        @click="generate" >
                        Generate AD (word)
                      </el-button>
      </p>
      <p>     <el-button type="primary"
                         icon="el-icon-document"
                         @click="toggleJson" >
                         Show JSON
                       </el-button>
       </p>

       <el-dialog title="Raw JSON data" :before-close="toggleJson"  :visible.sync="showJson" >
         <h1>Action data </h1>
         <p> This information is for debugging and documentation. Not for end user.</p>
         <pre>{{ source }}</pre>

       </el-dialog>

  </div>
</template>
<script>
import generateDocx from '../generate.js'

export default {
  name: 'GenerateDocs' ,
  props: {
    source: {
      type: Object,
      required: true
    }
  },
  data: function (){
    return {
      showJson: false
    }
  },
  methods: {
         generate() {
             generateDocx('../static/tag-example.docx', this.source )
        },
        toggleJson() {
            this.showJson = !this.showJson
       }
  }
}
</script>

<style>
</style>
