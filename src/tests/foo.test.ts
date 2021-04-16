import * as chai from 'chai';

import foo from '../app/foo';

const { expect } = chai;

describe('Foo', () => {
  it('should return bar', () => {
    expect(foo()).to.equal('bar');
  });
});
