import Ember from 'ember';
import QRCode from 'qrcode';

export default Ember.Component.extend({
  tagName: 'canvas',

  content: null,

  onError: (error) => {
    if (error) {
      throw new Ember.Error(error);
    }
  },

  didRender() {
    const { element, content, onError } = this.getProperties('element', 'content', 'onError');

    if (!Ember.isNone(content)) {
      QRCode.toCanvas(element, content, onError);
    } else {
      Ember.warn(
        'The content for QR code is missing.',
        { id: 'ember-simple-qrcode.empty-component-content' }
      );
    }
  }
});
