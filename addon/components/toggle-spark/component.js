import Ember from 'ember';
import layout from './template';
import styles from './styles';

import SparkComponent from 'ember-sparks/components/spark-component';

const {
  computed,
} = Ember;

const ToggleComponent = SparkComponent.extend({
  layout,
  styles,

  // @public
  on: false,
  disabled: false,

  inputId: computed('elementId', function() {
    let elementId = this.get('elementId');
    return `${elementId}-input`;
  }),

  actions: {
    onChange(e) {
      let isOn = e.target.checked;

      this.set('on', isOn);

      this.sendAction('onChange', isOn, ...arguments);
    },
  },

});

ToggleComponent.reopenClass({
  positionalParams: ['on'],
});

export default ToggleComponent;

