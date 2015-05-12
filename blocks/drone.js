/* globals Blockly goog */

/**
 * @fileoverview Drone blocks for Blockly.
 * @author Emerging Technology Advisors
 */

'use strict';

goog.provide('Blockly.Blocks.drone.loops');
goog.provide('Blockly.Blocks.drone.rotation');
goog.provide('Blockly.Blocks.drone.horizontal');
goog.provide('Blockly.Blocks.drone.vertical');
goog.provide('Blockly.Blocks.drone.startstop');
goog.provide('Blockly.Blocks.drone.aerobatics');
goog.provide('Blockly.Blocks.drone.hover');

Blockly.Blocks.drone.loops.HUE = 30; // orange
Blockly.Blocks.drone.rotation.HUE = 200; // light blue
Blockly.Blocks.drone.horizontal.HUE = 260; // purple
Blockly.Blocks.drone.vertical.HUE = 120; // green
Blockly.Blocks.drone.startstop.HUE = 0; // red
Blockly.Blocks.drone.aerobatics.HUE = 300; // pink
Blockly.Blocks.drone.hover.HUE = 60; // gold

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
    this.setColour(Blockly.Blocks.drone.startstop.HUE);
    this.appendDummyInput()
      .appendField('Takeoff');
    this.setNextStatement(true);
  }
};

Blockly.Blocks['land'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.startstop.HUE);
    this.appendDummyInput()
      .appendField('Land');
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['go_forward'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.horizontal.HUE);
    this.appendDummyInput()
      .appendField('Move Forward');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['go_backward'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.horizontal.HUE);
    this.appendDummyInput()
      .appendField('Move Backward');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['turn_left'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.rotation.HUE);
    this.appendDummyInput()
      .appendField('Turn Left');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['turn_right'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.rotation.HUE);
    this.appendDummyInput()
      .appendField('Turn Right');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['tilt_left'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.horizontal.HUE);
    this.appendDummyInput()
      .appendField('Move Left');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['tilt_right'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.horizontal.HUE);
    this.appendDummyInput()
      .appendField('Move Right');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['go_up'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.vertical.HUE);
    this.appendDummyInput()
      .appendField('Go Up');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['go_down'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.vertical.HUE);
    this.appendDummyInput()
      .appendField('Go Down');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};

Blockly.Blocks['flip'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.aerobatics.HUE);
    this.appendDummyInput()
      .appendField('Flip');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
  }
};
