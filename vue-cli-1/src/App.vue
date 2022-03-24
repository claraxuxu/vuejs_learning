<template>
  <div>
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
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
    }
  }
}
</script>

<style scoped>
</style>
