import {instrumentOptions, sdgOptions, getSDGLabel, getInstrumentName,
  getApproachName, filterOptionsByContext,
  defaultAction,
defaultPart,
 generalMarkers, geoScope} from '../params.js'


 var fn = function( children, prop1, prop2) {
   children.forEach(  c => console.log(`${c[prop1]} -- ${c[prop2]} ` ))
 }

instrumentsOptions.forEach( i => console.log(`${i.name} - ${i.accronyme} `) )
