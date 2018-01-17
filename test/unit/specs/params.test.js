
import {instrumentOptions, sdgOptions, getInstrumentName,
  getApproachName, modeOptions,
  defaultAction,
defaultPart,
 generalMarkers, geoScope, approachOptions, designStages } from '@/params.js'

test('Approach for Project : ', () => {
  expect(getApproachName('PJ')).toBe('Project approach');
});

test('Approach for Project : ', () => {
  expect(approachOptions.forKey('PJ')).toBeDefined();
});

test('Filter basic check : ', () => {
  expect(modeOptions.filterOptionsByContext('direct','PJ')).toBeDefined();
});

test('Filter return non empty : ', () => {
  expect(modeOptions.filterOptionsByContext('direct','PJ').length).toBeGreaterThanOrEqual(1);
});

test('Filter return length : ', () => {
  expect(modeOptions.filterOptionsByContext('direct','PJ').length).toBe(3);
});

test('Marker is ok : ', () => {
  expect(defaultAction.rioMarkers[0].value).toBe(0);
});

test('Check default action part : ', () => {
  expect(defaultPart).toBeDefined();
});

test('Check geoscope : ', () => {
  expect(geoScope).toBeDefined();
});

test('Check designStages : ', () => {
  expect(designStages.forKey(1)).toBeDefined();
});
