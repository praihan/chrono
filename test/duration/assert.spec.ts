import { expect } from 'chai';
import 'mocha';

import { assert } from '../../src/-private/assert';

describe('assert', () => {
  it('works for true', () => expect(() => assert(true)).to.not.throw);
  
  it('throws for false', () => {
    expect(() => assert(false)).to.throw(TypeError);
  });
  it('throws for false with message', () => {
    expect(() => assert(false, "My custom error message")).to.throw(TypeError, "My custom error message");
  });
});
