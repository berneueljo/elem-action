/*
since properties are string and uniques
*/
var targetEnum = {
  "Not targeted": 0,
  "Contribution": 1,
  "Significant objective": 2,
  "Main objective": 3
}

Object.freeze(targetEnum)

var generalMarkers = [
   { key:1,  name:"Participation development/good governance" },
   { key:2,  name:"Aid to environment"},
   { key:3,  name:"Gender equality (incl. Women In Development)"},
   { key:4,  name:"Trade Development" },
   { key:5,  name:"Reproductive, Maternal, New born and child health" }
]

var rioMarkers = [
  { key:1,  name:"Biological diversity" },
  { key:2,  name:"Combat desertification" },
  { key:3,  name:"Climate change mitigation" },
  { key:4,  name:"Climate change adaptation" }
 ]

 export {targetEnum, generalMarkers , rioMarkers};
