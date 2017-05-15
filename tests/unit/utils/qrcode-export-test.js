import { module, test } from 'qunit';
import QRCode from 'qrcode';

module('Unit | qrcode export');

test('moment exports', (assert) => {
  assert.ok(QRCode, 'QRCode exports an object');
});
