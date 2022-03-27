<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitleGlobal="updateTitle($event)"></app-header>
    <app-main v-bind:ninjas="ninjas"></app-main>
    <form-helper>
      <!-- <h2 slot="title">{{ title }}</h2>
      <p slot="text">I am the paragraph of the slot</p> -->

      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Infos of the form</p>
      </div>

      <div slot="form-field">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>

      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>

import Header from './header.vue';
import Footer from './footer.vue';
import MainCom from './mainComponent.vue';
import formHelper from './formHelper.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-main': MainCom,
    'form-helper': formHelper
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
