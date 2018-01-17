import Vue from 'vue/dist/vue'
import myParams from '@/plugins/paramsPlugin.js'

test('Basic init : ', () => {
  Vue.use(myParams)
  const vm = new Vue({
    template: '<div><span v-show="foo">hello</span></div>',
    data: { foo: true }
}).$mount()

var properties =  ['designStages' , 'instruments', 'sdgs', 'modes', 'approaches', 'geoScope']

properties.forEach( p =>  expect(vm[p]).toBeDefined()  )
properties.forEach( p =>  expect(vm[p][0]).toBeDefined()  )
//  expect(vm.getDesignStageForKey()).toBeDefined();
//  expect(vm.getDesignStageForKey(1)).toBeDefined();
});

test('Mode options availability : ', () => {
  Vue.use(myParams)
  const vm = new Vue({
    template: '<div><span v-show="foo">hello</span></div>',
    data: { foo: true }
}).$mount()

expect(vm.modes.filterOptionsByContext('gralra1', 'PJ').length).toBe(0);
expect(vm.modes.filterOptionsByContext('direct', 'PJ').length).toBe(3);

});
