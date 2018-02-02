import { expect } from 'chai';
import 'mocha';

import { createSandbox, getSandbox, destroySandbox } from './support/helpers';

import { Duration } from '../src/chrono';

beforeEach((done) => {
  createSandbox();
  done();
});

afterEach((done) => {
  destroySandbox();
  done();
});

describe('Placeholder', () => {
  it('works', () => {
    const twoSeconds = Duration.seconds(2);
    expect(twoSeconds.unit).to.eql(1);
    expect(twoSeconds.count).to.eql(2);
  });
});
