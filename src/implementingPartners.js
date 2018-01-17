var implementingPartners = [
  { name: 'intermediaries' ,
    fullName: 'intermediary entities that will implement the job for us' ,
    children:[ {
        name: 'bilaterals',
        fullName: 'bilateral entities and agencies',
        children:[
          {  donor: 'Austria' ,  name: 'Austrian Development Agency' , accronyme: 'ADA'   },
          {  donor: 'Denmark' ,  name: 'Ministry of Foreign Affairs' , accronyme: 'MFA'   },
          {  donor: 'Denmark' ,  name: 'Danish International Development Agency ' , accronyme: 'DANIDA'   },
          {  donor: 'France' ,  name: 'French Development Agency' , accronyme: 'AFD'   },
          {  donor: 'Germany' ,  name: 'Bundesministerium für Wirtschaftliche Zusammenarbeit und Entwicklung' , accronyme: 'BMZ'   },
          {  donor: 'Germany' ,  name: 'Deutsche Gesellschaft für Internationale Zusammenarbeit' , accronyme: 'GIZ'   },
          {  donor: 'Italy' ,  name: 'Italian Agency for Development Cooperation' , accronyme: 'AICS'   },
          {  donor: 'Netherlands' ,  name: 'Ministry of Foreign Affairs (DGIS)' , accronyme: 'MFA'   },
          {  donor: 'Netherlands' ,  name: 'NLD Investment Bank for Developing Countries' , accronyme: 'NIO'   },
          {  donor: 'Netherlands' ,  name: 'Dutch development bank' , accronyme: 'FMO'   },
          {  donor: 'Norway' ,  name: 'Norwegian Agency for Development Co-operation' , accronyme: 'NORAD'   },
          {  donor: 'Portugal' ,  name: 'Institute for Portuguese Development Aid' , accronyme: 'IPAD'   },
          {  donor: 'Sweden' ,  name: 'Swedish International Development Authority' , accronyme: 'Sida'   },
          {  donor: 'United Kingdom' ,  name: 'Department for International Development' , accronyme: 'DFID'   },
          {  donor: 'Luxembourg' ,  name: 'Lux-Development' , accronyme: 'LuxDev'   },
          {  donor: 'Greece' ,  name: 'Ministry of Foreign Affairs' , accronyme: 'MFA'   },
          {  donor: 'Spain' ,  name: 'Ministry of Foreign Affairs and Co-operation' , accronyme: 'MFA'   },
          {  donor: 'Slovenia' ,  name: 'Ministry of foreign affairs' , accronyme: 'MFA'   },
          {  donor: 'Czech Republic' ,  name: 'Ministry of Foreign Affairs' , accronyme: 'MFA'   },
          {  donor: 'Slovak Republic' ,  name: 'Slovak Agency for International Deve' , accronyme: 'SAMRS'   },
          {  donor: 'Canada' ,  name: 'Canadian International Development Agency' , accronyme: 'CIDA'   },
          {  donor: 'Japan' ,  name: 'Japan Overseas Development Co-operation' , accronyme: 'JODC'   }
        ]
      },
     {
      name: 'multilaterals',
      fullName: 'multilateral entities and agencies',
      children:[
        {  donor: 'multi' ,  name: 'World Bank' , accronyme: 'WB'   },
        {  donor: 'multi' ,  name: 'Food and Agriculture Organisation' , accronyme: 'FAO'   },
        {  donor: 'multi' , name: 'African Development Bank' , accronyme: 'AfDB' }
      ]
    },
    {
      name: 'Non governemental organisations' ,
      fullName: 'Non governemental organisations and civil society',
      children: [
        { name: 'recipient country NGOs'},
        {name: 'international NGOs'}
      ]
    }
  ] },
    { name: 'recipient' ,
      fullName: 'recipient sovereing entities reciving funds' ,
      children:[
        { name: 'governement'},
        { name: 'regional entity'}
      ] }
]

export {implementingPartners}
