import Vue from "vue";
import Input from "./index.vue";

const Components = {
  Input
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;