import geotree from '../countries.js'
import {geoScope} from '../params.js'

// define a mixin object
export const geoMixin = {
  data: function (){
    return {
      geoScope: geoScope,
      geo: geotree,
      geoProps: {
         label: 'name',
         value: 'name',
         children: 'children'
       }
     }
  }
}
