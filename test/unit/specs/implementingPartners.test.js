
import {implementingPartners} from '@/implementingPartners.js'

test('Inital : ', () => {
  expect(implementingPartners).toBeDefined();
});

test('Impl partners content : ', () => {
  expect(implementingPartners[0]).toBeDefined();
});

var fun =  function( obj ){
  console.log( obj.name)
  if(obj.children){
     obj.children.forEach( c =>  fun(c))
  }


}

test('Bourinos : ', () => {

//  implementingPartners.forEach( i =>  fun(i)   )

  expect(implementingPartners[0]).toBeDefined();
});
