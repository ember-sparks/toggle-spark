"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,n,t,o,r){var a=void 0;n.default.MODEL_FACTORY_INJECTIONS=!0,a=n.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default}),(0,o.default)(a,r.default.modulePrefix),e.default=a}),define("dummy/components/content-editable",["exports","ember-content-editable/components/content-editable"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-component",["exports","ember-sparks/components/spark-component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-content-container/component",["exports","ember-sparks-web/components/spark-content-container/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-footer/component",["exports","ember-sparks-web/components/spark-footer/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-header/component-menu/component",["exports","ember-sparks-web/components/spark-header/component-menu/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-header/component",["exports","ember-sparks-web/components/spark-header/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-header/sparks-logotype/component",["exports","ember-sparks-web/components/spark-header/sparks-logotype/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-page/component",["exports","npm:markdown-it","ember-sparks-web/components/spark-page/component"],function(e,n,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/spark-page/page-body/component",["exports","ember-sparks-web/components/spark-page/page-body/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-page/page-header/component",["exports","ember-sparks-web/components/spark-page/page-header/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-page/spark-demo/code-window/component",["exports","ember-sparks-web/components/spark-page/spark-demo/code-window/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-page/spark-demo/component",["exports","ember-sparks-web/components/spark-page/spark-demo/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-page/spark-demo/try-code/component",["exports","ember-sparks-web/components/spark-page/spark-demo/try-code/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-page/spark-demo/try-code/option-row/component",["exports","ember-sparks-web/components/spark-page/spark-demo/try-code/option-row/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-page/spark-options/component",["exports","ember-sparks-web/components/spark-page/spark-options/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-page/spark-options/options-table/column-value/component",["exports","ember-sparks-web/components/spark-page/spark-options/options-table/column-value/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-page/spark-options/options-table/column-value/css-code/component",["exports","ember-sparks-web/components/spark-page/spark-options/options-table/column-value/css-code/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-page/spark-options/options-table/column-value/css-result/component",["exports","ember-sparks-web/components/spark-page/spark-options/options-table/column-value/css-result/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/spark-page/spark-options/options-table/component",["exports","ember-sparks-web/components/spark-page/spark-options/options-table/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/toggle-spark/component",["exports","ember-toggle-spark/components/toggle-spark/component"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/controllers/application",["exports","ember","ember-sparks-web/mixins/spark-page-controller-mixin","ember-toggle-spark/components/toggle-spark/styles"],function(e,n,t,o){e.default=n.default.Controller.extend(t.default,{styleClasses:o.default})}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment"],function(e,n,t){function o(){return r}e.appVersion=o;var r=t.default.APP.version;e.default=n.default.Helper.helper(o)}),define("dummy/helpers/local-class",["exports","ember-css-modules/helpers/local-class"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"localClass",{enumerable:!0,get:function(){return n.localClass}})}),define("dummy/helpers/spark",["exports","ember-sparks/helpers/spark"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,n,t){var o=t.default.APP,r=o.name,a=o.version;e.default={name:"App Version",initialize:(0,n.default)(r,a)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,n){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/ember-css-modules",["exports","ember-css-modules/initializers/ember-css-modules"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return n.initialize}})}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,n,t){function o(){var e=arguments[1]||arguments[0];if(t.default.exportApplicationGlobal!==!1){var o;if("undefined"!=typeof window)o=window;else if("undefined"!=typeof global)o=global;else{if("undefined"==typeof self)return;o=self}var r,a=t.default.exportApplicationGlobal;r="string"==typeof a?a:n.default.String.classify(t.default.modulePrefix),o[r]||(o[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[r]}}))}}e.initialize=o,e.default={name:"export-application-global",initialize:o}}),define("dummy/resolver",["exports","ember-resolver"],function(e,n){e.default=n.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,n,t){var o=n.default.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL});o.map(function(){}),e.default=o}),define("dummy/routes/application",["exports","ember","ember-sparks-web/mixins/spark-page-route-mixin"],function(e,n,t){e.default=n.default.Route.extend(t.default)}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/styles/app",["exports"],function(e){e.default={}}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"/blSD519",block:'{"statements":[["block",["spark-page"],null,[["config"],[["get",["config"]]]],0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","\\n  "],["append",["helper",["toggle-spark"],null,[["on","disabled"],[["get",["demo","on"]],["get",["demo","disabled"]]]]],false],["text","\\n\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/config/environment",["ember"],function(e){var n="dummy";try{var t=n+"/config/environment",o=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),r=JSON.parse(unescape(o)),a={default:r};return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-toggle-spark",version:"0.1.0+3af725ae"});