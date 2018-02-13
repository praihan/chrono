import { expect } from 'chai';
import 'mocha';

import {
  Duration,
  Milliseconds,
} from '../../src/chrono';

const {
  milliseconds,
  sub,
  isShorter,

  since,
} = Duration;

describe('Duration.since', () => {
  it('should be in the right ballpark', () => {
    const epoch = new Date(0)
    const sinceEpoch: Milliseconds = since(epoch);
    const now = milliseconds(Date.now());
    expect(isShorter(sub(now, sinceEpoch), milliseconds(100))).to.be.true;
  });
});
