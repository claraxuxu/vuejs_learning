<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitleGlobal="updateTitle($event)"></app-header>
    <app-main v-bind:ninjas="ninjas"></app-main>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>

import Header from './header.vue';
import Footer from './footer.vue';
import MainCom from './mainComponent.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-main': MainCom
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
      title: 'Vue Ninjas'
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
