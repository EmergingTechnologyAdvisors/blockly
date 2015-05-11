/* globals Blockly goog */

/**
 * @fileoverview Generating JavaScript for drone blocks.
 * @author ETA
 */

'use strict';

goog.require('Blockly.JavaScript');

Blockly.JavaScript['drone_controls_repeat_ext'] = function(block) {
  // Repeat n times (external number).
  var repeats = Blockly.JavaScript.valueToCode(block, 'TIMES',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  var code = '';
  var loopVar = Blockly.JavaScript.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var endVar = repeats;
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    var endVar = Blockly.JavaScript.variableDB_.getDistinctName(
        'repeat_end', Blockly.Variables.NAME_TYPE);
    code += 'var ' + endVar + ' = ' + repeats + ';\n';
  }
  code += 'for (var ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + endVar + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};

Blockly.JavaScript['hover'] = function (block) {
  return 'drone.hover();\n';
};

Blockly.JavaScript['take_off'] = function (block) {
  return 'drone.takeOff();\n';
};

Blockly.JavaScript['land'] = function (block) {
  return 'drone.land();\n';
};

Blockly.JavaScript['go_forward'] = function (block) {
  return 'drone.forward();\n';
};

Blockly.JavaScript['go_backward'] = function (block) {
  return 'drone.backward();\n';
};

Blockly.JavaScript['turn_left'] = function (block) {
  return 'drone.turnLeft();\n';
};

Blockly.JavaScript['turn_right'] = function (block) {
  return 'drone.turnRight();\n';
};

Blockly.JavaScript['tilt_left'] = function (block) {
  return 'drone.tiltLeft();\n';
};

Blockly.JavaScript['tilt_right'] = function (block) {
  return 'drone.tiltRight();\n';
};

Blockly.JavaScript['go_up'] = function (block) {
  return 'drone.up();\n';
};

Blockly.JavaScript['go_down'] = function (block) {
  return 'drone.down();\n';
};

Blockly.JavaScript['flip'] = function (block) {
  return 'drone.frontFlip();\n';
};
