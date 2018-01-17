import {targetEnum} from '../markers.js'


// define a mixin object
export const markerMixin = {
  data: function (){
    return {

     }
  },
  methods: {
     getText(val) {
       var p
        for ( p in targetEnum) {
          if (targetEnum[p] == val) {
            return p
           }
         }
         return ''
     }
   }
}
