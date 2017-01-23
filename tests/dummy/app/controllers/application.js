import Ember from 'ember';
import SparkPageControllerMixin from 'ember-sparks-web/mixins/spark-page-controller-mixin';

import styleClasses from 'ember-toggle-spark/components/toggle-spark/styles';

export default Ember.Controller.extend(SparkPageControllerMixin, {
  styleClasses,                                     
});

