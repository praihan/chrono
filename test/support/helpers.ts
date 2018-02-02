import * as sinon from 'sinon';

let sinonSandbox: sinon.SinonSandbox | null = null;

export function createSandbox() {
  sinonSandbox = sinon.createSandbox();
}

export function getSandbox(): sinon.SinonSandbox {
  return sinonSandbox as sinon.SinonSandbox;
}

export function destroySandbox() {
  (sinonSandbox as sinon.SinonSandbox).restore();
  sinonSandbox = null;
}
