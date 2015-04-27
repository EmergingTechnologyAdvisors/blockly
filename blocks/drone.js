/**
 * @fileoverview Drone blocks for Blockly.
 * @author Emerging Technology Advisors
 */

'use strict';

goog.provide('Blockly.Blocks.drone');

goog.require('Blockly.Blocks');

Blockly.Blocks['take_off'] = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
      .appendField('Take Off');
    this.setNextStatement(true);
  }
};

Blockly.Blocks['land'] = {
  init: function() {
    this.setColour(0);
    this.appendDummyInput()
      .appendField('Land');
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['go_forward'] = {
  init: function() {
    this.setColour(180);
    this.appendDummyInput()
      .appendField('Forward');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['go_backward'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
      .appendField('Backward');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['turn_left'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
      .appendField('Turn Left');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['turn_right'] = {
  init: function() {
    this.setColour(260);
    this.appendDummyInput()
      .appendField('Turn Right');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['tilt_left'] = {
  init: function() {
    this.setColour(30);
    this.appendDummyInput()
      .appendField('Tilt Left');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['tilt_right'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput()
      .appendField('Tilt Right');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['go_up'] = {
  init: function() {
    this.setColour(300);
    this.appendDummyInput()
      .appendField('Go Up');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['go_down'] = {
  init: function() {
    this.setColour(200);
    this.appendDummyInput()
      .appendField('Go Down');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['flip'] = {
  init: function() {
    this.setColour(360);
    this.appendDummyInput()
      .appendField('Flip');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};
