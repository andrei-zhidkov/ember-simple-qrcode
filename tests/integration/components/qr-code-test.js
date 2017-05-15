import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('qr-code', 'Integration | Component | qr code', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{qr-code}}`);

  assert.equal(this.$().text().trim(), '');
});
