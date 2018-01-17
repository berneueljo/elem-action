import {generalMarkers , rioMarkers} from './markers.js'

rioMarkers.forEach(p  => p.value = 0)
generalMarkers.forEach(p  => p.value = 0)

var fn = function (key){
 return this.find( i => i.key === key)
}

var approachOptions = [
  { key: 'PJ',  label: 'Project approach' },
  { key: 'BS',  label: 'Budget support' }
]

approachOptions.forKey = fn

var getApproachName = function(value){
  return approachOptions.find( i => i.key === value).label
}



var designStages = [
  { key: 1, label: 'concept' , description: 'first preliminary step when the action is only a basic relevant idea'},
  { key: 2, label: 'identification' , description: 'first active step where the justification, relevance of the action is defined'},
  { key: 3, label: 'formulation' , description: 'second design stage where the action is fully defined'},
  { key: 4, label: 'finalised' , description: 'action is ready for formal decision process'},
  { key: 5, label: 'decided' , description: 'action is decided and implementation can start'}
]
designStages.forKey = fn

var instrumentOptions =
[{ key: 'DCI', label: 'Development Cooperation Instrument'},
 { key: 'PI',  label: 'Partnership Instrument' },
 { key: 'EIDHR', label: 'European Instrument for Democracy and Human Rights' },
 { key: 'ENI', label: 'European Neighbourhood Instrument' },
 { key: 'INSC', label: 'Instrument for Nuclear Safety Cooperation'},
 { key: 'IcSP', label: 'Instrument contributing to Stability and Peace' },
 { key: 'IPA', label: 'Instrument for Pre-Accession Assistance' },
 { key: 'EDF', label: 'European Development Fund' }]

instrumentOptions.forKey = fn

 var getInstrumentName = function(value){
   return instrumentOptions.find( instr => instr.value === value).label
 }

 var sdgOptions = [{ key: 'SDG1', label: 'End poverty in all its forms everywhere'},
 { key: 'SDG2', label: 'End hunger, achieve food security and improved nutrition and promote sustainable agriculture'},
 { key: 'SDG3', label: 'Ensure healthy lives and promote well-being for all at all ages'},
 { key: 'SDG4', label: 'Ensure inclusive and quality education for all and promote lifelong learning' },
 { key: 'SDG5', label: 'Achieve gender equality and empower all women and girls'},
 { key: 'SDG6', label: 'Ensure access to water and sanitation for all'},
 { key: 'SDG7', label: 'Ensure access to affordable, reliable, sustainable and modern energy for all' },
 { key: 'SDG8', label: 'Promote inclusive and sustainable economic growth, employment and decent work for all'},
 { key: 'SDG9', label: 'Build resilient infrastructure, promote sustainable industrialization and foster innovation'},
 { key: 'SDG10', label: 'Reduce inequality within and among countries'},
 { key: 'SDG11', label: 'Make cities inclusive, safe, resilient and sustainable'},
 { key: 'SDG12', label: 'Ensure sustainable consumption and production patterns'},
 { key: 'SDG13', label: 'Take urgent action to combat climate change and its impacts'},
 { key: 'SDG14', label: 'Conserve and sustainably use the oceans, seas and marine resources'},
 { key: 'SDG15', label: 'Sustainably manage forests, combat desertification, halt and reverse land degradation, halt biodiversity loss'},
 { key: 'SDG16', label: 'Promote just, peaceful and inclusive societies'},
 { key: 'SDG17', label: 'Revitalize the global partnership for sustainable development'}];

 sdgOptions.forKey = fn

/*
var getSDGLabel = function(value){

    if (Array.isArray(value)) {
       return Array.from(value, x => getSDGLabel(x))
    }
    else {
      var res = sdgOptions.find( i => i.key === value)
      return `${res.key} -  ${res.label}`
   }
 }
 */



 sdgOptions.getSDGLabel = function(value){

     if (Array.isArray(value)) {
        return Array.from(value, x => sdgOptions.getSDGLabel(x))
     }
     else {
       return sdgOptions.find( i => i.key === value)
    }
  }

var modeOptions = [ { key:"CDBG",  mode:'direct', name: 'Budget Support: Good Governance and Development Contract' , approach: 'BS'},
                    { key:"SRC", mode:'direct', name: 'Budget Support: Sector Reform Contract' , approach: 'BS'},
                    { key:"SBC" ,mode:'direct', name: 'Budget Support: State Building Contract' , approach: 'BS'},
                    { key:"Acc-Dir" ,mode:'direct', name: 'Accompagnement direct ' , approach: 'BS'},
                    { key:"Acc-Ind", mode:'indirect', name: 'Accompagnement (indirect)' , approach: 'BS'},
                    { key:"GRANT-CFP", mode:'direct', name: 'grants – call for proposal', approach: 'PJ'},
                    { key:"GRANT-DA", mode:'direct', name: 'grants – direct award' , approach: 'PJ'},
                    { key:"Procur-D", mode:'direct', name: 'Procurement of services, supplies, works' , approach: 'PJ'},
                    { key:"DA", mode:'indirect', name: 'with MS or Agency .. ' , approach: 'PJ'},
                    { key:"Partner", mode:'indirect', name: 'with partner country or regional institution' , approach: 'PJ'},
                    { key:"Blending", mode:'indirect', name: 'Contribution to Regional Blending Facilities' , approach: 'PJ' }];

modeOptions.forKey = fn

modeOptions.getModeFullName = function(key){
      var res = modeOptions.forKey(key)
      return `${res.mode} mgt ${res.name}  `
 }

modeOptions.filterOptionsByContext = function (manag, approach) {
 //  console.log( `man: ${manag}    appr: ${approach}`)
      var res = modeOptions.filter(
          op => {
                     return op.mode == manag && op.approach == approach
           }
          )
      return res
}

/*
var filterOptionsByContext = function (manag, approach) {
 //  console.log( `man: ${manag}    appr: ${approach}`)
      var res = modeOptions.filter(
                  op => {
                                               return op.mode == manag && op.approach == approach
                       }
          )
      return res
}


var getModeFullName = function(key){
      var res = modeOptions.find( i => i.key === key)
      return `${res.mode} mgt ${res.name}  `
 }
*/
 /*
 This one is coming from iati
 "Activity Scope", "description": "Geographic scope of activity"
 */

 var geoScope = [
   {key: 1, name: "Global",
    description: "The activity scope is global"},
  {key: 2, name: "Regional",
    description: "The activity scope is a supranational region"},
  {key: 3, name: "Multi-national",
  description: "The activity scope covers multiple countries, that don't constitute a region"},
  {key: 4, name: "National",
  description: "The activity scope covers one country"},
  {key:5, name: "Sub-national: Multi-first-level administrative areas",
  description: "The activity scope covers more than one first-level subnational administrative areas (e.g. counties, provinces, states)"},
   {key:6, name: "Sub-national: Single first-level administrative area",
  description: "The activity scope covers one first-level subnational administrative area (e.g. country, province, state)"},
  {key:7, name: "Sub-national: Single second-level administrative area",
   description: "The activity scope covers one second-level subnational administrative area (e.g. municipality or district)"},
  {key:8, name: "Single location",
  description: "The activity scope covers one single location (e.g. town, village, farm)"}
]
geoScope.forKey = fn


var defaultPart =  {
  name: 'part name placeholder',
  management: 'direct',
  mode: modeOptions[7],
  channel: '',
  implementingPartner: '',
  EU_amount: 0,
  other_amount: 0,
  comment: ''
}


var  defaultAction = {
  id: 1,
  year: 2017,
  name: '',
  description: '' ,
  initialAD: true,
  geoScope: geoScope[3],
  decisionDate: '',
  startingDate: '',
  implementationPeriod: 48,
  approach: approachOptions[0].key,
  financingInstrument: instrumentOptions[0],
  signFinancingAgreement: false,
  rioMarkers: rioMarkers,
  generalMarkers: generalMarkers,
  sdg:[ sdgOptions[0] ],
  EU_Delegation: 'BJ',
  benefiting_zone: ['BJ'],
  action_location: 'indicate location in the country',
  parts: []
};

 export {approachOptions, instrumentOptions,
   sdgOptions,  modeOptions,
   getInstrumentName,
   defaultAction,
   defaultPart, geoScope,
   getApproachName, designStages};
