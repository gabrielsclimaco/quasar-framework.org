'use strict';

var html = require('raw!./view.floating-action-button.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Floating Action Buttons';

  done({
    template: html,
    methods: {
      alert: function() {
        quasar.dialog({
          title: 'FAB',
          message: 'Good job! Keep it going.'
        });
      }
    }
  });
};
