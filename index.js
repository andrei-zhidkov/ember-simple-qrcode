/* eslint-env node */
'use strict';

const MergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');
const path = require('path');

module.exports = {
  name: 'qrcode',

  included(app) {
    this._super.included.apply(this, arguments);

    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;

    app.import(this.treePaths.vendor + '/qrcode.js');
  },

  treeForVendor(vendorTree) {
    const trees = [];
    const qrcodePath = path.join(path.dirname(require.resolve('qrcode')), '..', 'build');
    const qrcodeTree = new Funnel(qrcodePath, { include: ['qrcode.js'] });

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(qrcodeTree);

    return new MergeTrees(trees);
  }
};
