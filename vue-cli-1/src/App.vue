<template>
  <div>
    <!-- <app-header v-bind:title="title" v-on:changeTitleGlobal="updateTitle($event)"></app-header>
    <app-main v-bind:ninjas="ninjas"></app-main>
    <app-footer v-bind:title="title"></app-footer> -->
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component='form-one'">Show form One</button>
    <button v-on:click="component='form-two'">Show form Two</button>
    <!-- <form-one></form-one>
    <form-two></form-two> -->
  </div>
</template>

<script>

import Header from './header.vue';
import Footer from './footer.vue';
import MainCom from './mainComponent.vue';

import formOne from './formOne.vue';
import formTwo from './formTwo.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-main': MainCom,
    'form-one': formOne,
    'form-two': formTwo
  },
  data() {
    return {
      ninjas: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yosho', speciality: 'Data Diggin', show: false},
      ],
      component: 'form-one',
      // title: 'Vue Ninjas'
      title: 'I am a dynamic title slot'
    }
  },
  methods: {
    updateTitle: function(val) {
      this.title = val /**change title globally, connect with the function in header.vue */
    }
  }
}
</script>

<style scoped>
</style>
