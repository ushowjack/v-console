// import Vue from 'vue';
import Vue from 'vue';
import tpl from './src/console';

const VconsoleConstructor = Vue.extend(tpl);

const Vconsole = {};

export default Vconsole.install = function vconsole() {
  const vue = Vue;
  vue.component('v-console', VconsoleConstructor);
  vue.prototype.$msg = 'Hello World';
};
