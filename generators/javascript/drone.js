/**
 * @fileoverview Generating JavaScript for drone blocks.
 * @author ETA
 */
'use strict';

goog.require('Blockly.JavaScript');

Blockly.JavaScript['take_off'] = function (block) {
  var takeOff = [
    '{',
      'delay: 3000,',
      'task: function () {',
        'drone.takeOff();',
        'drone.flatTrim();',
      '}',
    '},'
  ];
  return takeOff.join('\n') + '\n';
};

Blockly.JavaScript['land'] = function (block) {
  var land = [
    '{',
      'delay: 3000,',
      'task: function () {',
        'drone.land();',
      '}',
    '}'
  ];
  return land.join('\n') + '\n';
};

Blockly.JavaScript['go_forward'] = function (block) {
  var forward = [
    '{',
      'delay: 3000,',
      'task: function () {',
        'drone.forward({steps: 40});',
      '}',
    '},'
  ];
  return forward.join('\n') + '\n';
};

Blockly.JavaScript['go_backward'] = function (block) {
  var backward = [
    '{',
      'delay: 3000,',
      'task: function () {',
        'drone.backward({steps: 40});',
      '}',
    '},'
  ];
  return backward.join('\n') + '\n';
};

Blockly.JavaScript['turn_left'] = function (block) {
  var turnLeft = [
    '{',
      'delay: 3000,',
      'task: function () {',
        'drone.turnLeft({steps: 40});',
      '}',
    '},'
  ];
  return turnLeft.join('\n') + '\n';
};

Blockly.JavaScript['turn_right'] = function (block) {
  var turnRight = [
    '{',
      'delay: 3000,',
      'task: function () {',
        'drone.turnRight({steps: 40});',
      '}',
    '},'
  ];
  return turnRight.join('\n') + '\n';
};

Blockly.JavaScript['tilt_left'] = function (block) {
  var tiltLeft = [
    '{',
      'delay: 3000,',
      'task: function () {',
        'drone.tiltLeft({steps: 40});',
      '}',
    '},'
  ];
  return tiltLeft.join('\n') + '\n';
};

Blockly.JavaScript['tilt_right'] = function (block) {
  var tiltRight = [
    '{',
      'delay: 3000,',
      'task: function () {',
        'drone.tiltRight({steps: 40});',
      '}',
    '},'
  ];
  return tiltRight.join('\n') + '\n';
};

Blockly.JavaScript['go_up'] = function (block) {
  var up = [
    '{',
      'delay: 3000,',
      'task: function () {',
        'drone.up({steps: 40});',
      '}',
    '},'
  ];
  return up.join('\n') + '\n';
};

Blockly.JavaScript['go_down'] = function (block) {
  var down = [
    '{',
      'delay: 3000,',
      'task: function () {',
        'drone.down({steps: 40});',
      '}',
    '},'
  ];
  return down.join('\n') + '\n';
};

Blockly.JavaScript['flip'] = function (block) {
  var flip = [
    '{',
      'delay: 3000,',
      'task: function () {',
      'drone.frontFlip({steps: 40});',
      '}',
    '},'
  ];
  return flip.join('\n') + '\n';
};
