import expect from 'expect';
import myApp from '../../app/reducers/myApp';

describe('myApp reducer', () => {
  it('should return a initial state if state is not set', () => {
    expect(myApp(undefined, {})).toEqual({
      count: 0
    });
  });
});
