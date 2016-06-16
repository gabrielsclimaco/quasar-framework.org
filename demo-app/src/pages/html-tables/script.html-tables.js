'use strict';

var html = require('raw!./view.html-tables.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'HTML Tables';

  done({
    template: html,
    data: {
      styles: [
        '',
        'inner-delimiter',
        'bordered',
        'striped',
        'highlight',
        'centered',
        'compact'
      ]
    }
  });
};
