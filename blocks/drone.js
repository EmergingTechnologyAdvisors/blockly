/* globals Blockly goog */

/**
 * @fileoverview Drone blocks for Blockly.
 * @author Emerging Technology Advisors
 */

'use strict';

goog.provide('Blockly.Blocks.drone.loops');
goog.provide('Blockly.Blocks.drone.yaw');
goog.provide('Blockly.Blocks.drone.roll');
goog.provide('Blockly.Blocks.drone.pitch');
goog.provide('Blockly.Blocks.drone.altitude');
goog.provide('Blockly.Blocks.drone.takeoff');
goog.provide('Blockly.Blocks.drone.land');
goog.provide('Blockly.Blocks.drone.flip');
goog.provide('Blockly.Blocks.drone.hover');

Blockly.Blocks.drone.loops.HUE = 0;
Blockly.Blocks.drone.yaw.HUE = 280;
Blockly.Blocks.drone.roll.HUE = 200;
Blockly.Blocks.drone.pitch.HUE = 260;
Blockly.Blocks.drone.altitude.HUE = 60;
Blockly.Blocks.drone.takeoff.HUE = 120;
Blockly.Blocks.drone.land.HUE = 0;
Blockly.Blocks.drone.flip.HUE = 300;
Blockly.Blocks.drone.hover.HUE = 30;

Blockly.Blocks['drone_controls_repeat_ext'] = {
  /**
   * Block for repeat n times (external number).
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.CONTROLS_REPEAT_HELPURL);
    this.setColour(Blockly.Blocks.drone.loops.HUE);
    this.interpolateMsg(Blockly.Msg.CONTROLS_REPEAT_TITLE,
                        ['TIMES', 'Number', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.CONTROLS_REPEAT_TOOLTIP);
  }
};

Blockly.Blocks['hover'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.hover.HUE);
    this.appendDummyInput()
      .appendField('Hover');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};


Blockly.Blocks['take_off'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.takeoff.HUE);
    this.appendDummyInput()
      .appendField('Take Off');
    this.setNextStatement(true);
  }
};

Blockly.Blocks['land'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.land.HUE);
    this.appendDummyInput()
      .appendField('Land');
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['go_forward'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.pitch.HUE);
    this.appendDummyInput()
      .appendField('Forward');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['go_backward'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.pitch.HUE);
    this.appendDummyInput()
      .appendField('Backward');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['turn_left'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.yaw.HUE);
    this.appendDummyInput()
      .appendField('Turn Left');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['turn_right'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.yaw.HUE);
    this.appendDummyInput()
      .appendField('Turn Right');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['tilt_left'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.roll.HUE);
    this.appendDummyInput()
      .appendField('Tilt Left');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['tilt_right'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.roll.HUE);
    this.appendDummyInput()
      .appendField('Tilt Right');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['go_up'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.altitude.HUE);
    this.appendDummyInput()
      .appendField('Go Up');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['go_down'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.altitude.HUE);
    this.appendDummyInput()
      .appendField('Go Down');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['flip'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.flip.HUE);
    this.appendDummyInput()
      .appendField('Flip');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};
