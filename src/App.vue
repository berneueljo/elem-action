<script>
import { defaultAction, defaultPart, modeOptions, geoScope} from './params.js'

import PartTable from './components/PartTable.vue'
import EditPart from './components/EditPart.vue'
import GenerateDocs from './components/GenerateDocs.vue'
import ActionIdentity from './components/ActionIdentity.vue'
import ActionFinancing from './components/ActionFinancing.vue'
import ActionMarkers from './components/ActionMarkers.vue'
import ActionGeo from './components/ActionGeo.vue'
import ActionSDG from './components/ActionSDG.vue'

export default {
  name: 'app',
  components: {
		PartTable,
    EditPart,
    GenerateDocs,
    ActionIdentity,
    ActionFinancing,
    ActionMarkers,
    ActionGeo,
    ActionSDG
	},
   data: function ()  {
     return {
       selectedPartId: -1,
       dialogPartVisible : false,
       actionForm: Object.assign({},defaultAction),
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
           action_location: [
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
       }
    };
  },
  computed: {
    generalData () {
            return {
              'approach':  this.approaches.forKey(this.actionForm.approach),
              'isEDF': this.actionForm.financingInstrument == 'EDF',
              'isProject' :this.actionForm.approach == 'PJ',
              'isBudgetSupport' :this.actionForm.approach == 'BS',
              'isBlending' :this.actionForm.approach == 'Blending Facility',
              'isMultiCountry' : this.actionForm.geoScope.key <= 3,
              'totalEstimatedCost': this.totalEstimatedCost
                      .toLocaleString( 'en-UK',
                         { minimumFractionDigits: 2, style: "currency", currency: "EUR"}
                    ),
              'totalEUContribution': this.totalEUContribution
                      .toLocaleString( 'en-UK',
                          { minimumFractionDigits: 2, style: "currency", currency: "EUR"}
                    )
            }
          },
    totalEUContribution() {
       return this.actionForm.parts.map( v  =>  v.EU_amount).reduce(function(a, b) { return a + b; }, 0);
    },
    totalEstimatedCost() {
           return this.actionForm.parts
                      .map( v  =>  v.EU_amount + v.other_amount)
                      .reduce(function(a, b) { return a + b; }, 0);
    }
  },
 methods: {
       addPart () {
         var id =  this.actionForm.parts.length
          this.actionForm.parts.push(Object.assign({},defaultPart))
          this.selectedPartId = id
          this.showPart()
          },
       editPart (id) {
            this.selectedPartId = id
            this.showPart()
        },
     removePart (id) {
          this.actionForm.parts.splice(id,1)
      },
      getSelectedPart(){
        if (this.selectedPartId != -1)
            return this.actionForm.parts[this.selectedPartId]
        else
          return {
            name: 'missing name',
            management: 'indirect',
            mode: 'Delegated agreement',
            delegated_name: 'Agency XX',
            EU_amount: 0,
            other_amount: 0,
          }
      },
      hidePart(){
        this.dialogPartVisible = false
      },
      showPart(){
        this.dialogPartVisible = true
      },
     generateFullSnapshot() {
         var res =  Object.assign({},this.actionForm, this.generalData  );
         res.parts.forEach( p =>
            {
                  p.EU_amount_txt = p.EU_amount.toLocaleString( 'en-UK',
                                  { minimumFractionDigits: 2, style: "currency", currency: "EUR"} )
                  p.other_amount_txt = p.other_amount.toLocaleString( 'en-UK',
                                  { minimumFractionDigits: 2, style: "currency", currency: "EUR"} )
                  p.modeFullName = this.modes.getModeFullName(p.mode.key)
           })
           res.rioMarkers.forEach( m => {
                    m.isMain = m.value == 3
                    m.isSignificant = m.value == 2
                    m.isContributing = m.value == 1
                    m.isNotTargeted = m.value == 0
                    }
             )
             res.generalMarkers.forEach( m => {
                      m.isMain = m.value == 3
                      m.isSignificant = m.value == 2
                      m.isContributing = m.value == 1
                      m.isNotTargeted = m.value == 0
                      }
               )
         return res
     }
  }
  }

</script>

<style>

#app {
  max-width: 1200px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 2px;
  padding: 10px;
}
#first {
  float: left;
  width: 70%;
  border-style: solid;
  border-width: thin;
  background: Cyan;

}
#second {
  margin-left: 70%;
}
.basic-box {
  margin: 5px;
  padding: 10px;
  border-style: ridge;
  border-width: thin;
  background: LightCyan;
}
@media print {
  #app {
    max-width: 1500px;
  }
  #first {
    float: left;
    width: 100%;
  }
#second {display:none;}
}
</style>
<template>
  <div id="app">
    <div id="first">
    <ActionIdentity :actionForm="actionForm" >
        <h1> Basic information - {{actionForm.name}}</h1>
    </ActionIdentity>
<ActionGeo :actionForm="actionForm" >
  <h1>Localisation</h1>
</ActionGeo>
<ActionFinancing :actionForm="actionForm" >
   <h1>Financing </h1>
</ActionFinancing>

<ActionSDG :actionForm="actionForm" >
  <h1>Sustainable development goals (SDG)</h1>
</ActionSDG>

<ActionMarkers :markers="actionForm.rioMarkers" :actionForm="actionForm">
  <h1>Rio Markers</h1>
</ActionMarkers>
<ActionMarkers :markers="actionForm.generalMarkers" :actionForm="actionForm">
  <h1>General Markers</h1>
</ActionMarkers>

    <EditPart
          v-if="dialogPartVisible"
          :part="getSelectedPart()"
          :approach="actionForm.approach"
          @hide="hidePart"
            />

 <partTable :parts="actionForm.parts"
      @remove="removePart"
      @add="addPart"
      @edit="editPart"
       >
       <h1>Decomposition du budget</h1>
 </partTable>
   </div>
   <div id="second">
   <h1> Resulting JSON </h1>
       <pre>{{generalData}}</pre>
       <pre>{{ actionForm }}</pre>
        <GenerateDocs :source="generateFullSnapshot()" />
     </div>
   </div>
</template>
