import visibilityFilter from './filter';

test('return initialState to be none by default', () => {
  expect(visibilityFilter()).toBe('none');
});

test('SET_VISIBILITY_FILTER todo', () => {
  expect(visibilityFilter(null, {type: 'SET_VISIBILITY_FILTER', value: 'todo'})).toBe('todo');
});

test('SET_VISIBILITY_FILTER complete', () => {
  expect(visibilityFilter('none', {type: 'SET_VISIBILITY_FILTER', value: 'complete'})).toBe('complete');
});
