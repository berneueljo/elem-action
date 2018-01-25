import {instrumentOptions, sdgOptions, getInstrumentName,
        getApproachName, modeOptions,
        defaultAction,
        defaultPart,
        generalMarkers,
        geoScope,
        approachOptions,
        designStages} from '../params.js'

import {implementingPartners} from '../implementingPartners.js'

import dacChannelsTree from '../dac_Channels.js'


import dac_root from '../dac_sectors.js'

//import {example} from './example-data.js'

// This is your plugin object. It can be exported to be used anywhere.
const paramsPlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options
  install(Vue, options) {
    // We call Vue.mixin() here to inject functionality into all components.
  	Vue.mixin({

      data() {
        return {
        designStages:  designStages,
        approaches: approachOptions,
        instruments: instrumentOptions,
        sdgs: sdgOptions,
        modes: modeOptions,
        approaches: approachOptions,
        geoScope: geoScope,
        partners: implementingPartners,
        partnersProps: {
           label: 'name',
           value: 'name',
           children: 'children'
         },
        channelsTree: dacChannelsTree,
        channelsProps:{
          label: 'name',
          value: 'name',
          children: 'children'
        },
        dacSectorTree: dac_root
      }
     }
    }
  )
  }
}

export default paramsPlugin;
