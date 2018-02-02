import { expect } from 'chai';
import 'mocha';

import { createSandbox, getSandbox, destroySandbox } from './support/helpers';

import {} from '../src/chrono';

beforeEach((done) => {
  createSandbox();
  done();
});

afterEach((done) => {
  destroySandbox();
  done();
});

class AggregateType {
  constructor(properties?: {}) {
    for (let key of Object.keys(properties || {})) {
      (this as any)[key] = (properties as any)[key];
    }
  }
}

describe('Placeholder', () => {
  it('works', () => {});
});
