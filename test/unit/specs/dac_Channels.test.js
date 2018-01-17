

import treeRoot from '@/dac_Channels.js'


test('Inital : ', () => {
  expect(treeRoot.children).toBeDefined();
});

test('More : ', () => {
  expect(treeRoot.children[1]).toBeDefined();
});
