'use strict';

// TODO: May be dependent on payment method in the future
var POPUP_HEIGHT = 535;
var POPUP_WIDTH = 450;

module.exports = {
  DISPATCH_FRAME_NAME: 'dispatch',
  FRAME_CLOSED_ERROR_MESSAGE: 'Frame closed before tokenization could occur.',
  POPUP_BASE_OPTIONS: 'resizable,scrollbars,height=' + POPUP_HEIGHT + ',width=' + POPUP_WIDTH,
  POPUP_WIDTH: POPUP_WIDTH,
  POPUP_HEIGHT: POPUP_HEIGHT,
  POPUP_POLL_INTERVAL: 100,
  POPUP_CLOSE_TIMEOUT: 100
};