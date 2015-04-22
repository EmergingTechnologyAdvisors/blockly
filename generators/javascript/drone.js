/**
 * @fileoverview Generating JavaScript for drone blocks.
 * @author ETA
 */
'use strict';

goog.require('Blockly.JavaScript');

Blockly.JavaScript['take_off'] = function (block) {
  var code = 'drone.flatTrim();\n';
    code += 'drone.startPing();\n';
    code += 'drone.flatTrim();\n';
    code += 'drone.takeOff();\n';
    code += 'drone.flatTrim()\n';
  return code;
};

Blockly.JavaScript['land'] = function (block) {
  return 'drone.land();\n';
};

Blockly.JavaScript['go_forward'] = function (block) {
  return 'drone.forward({steps: 50});\n';
};

Blockly.JavaScript['go_backward'] = function (block) {
  return 'drone.forward({steps: 50});\n';
};

Blockly.JavaScript['turn_left'] = function (block) {
  return 'drone.turnLeft({steps: 20});\n';
};

Blockly.JavaScript['turn_right'] = function (block) {
  return 'drone.turnRight({steps: 20});\n';
};

Blockly.JavaScript['tilt_left'] = function (block) {
  return 'drone.tiltLeft({steps: 20});\n';
};

Blockly.JavaScript['tilt_right'] = function (block) {
  return 'drone.tiltRight({steps: 20});\n';
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
