<template>
    <header>
      <h1 v-on:click="changeTitle">{{ title }}</h1>
    </header>
</template>

<script>
import { bus } from './main'

export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      title: "Clara exo 00"
    }
  },
  methods: {
    changeTitle: function() {
      /*this.title = 'Vue Changed' only change the title here, not the variable in global */
      /*this.$emit('changeTitleGlobal', 'Vue Changed Globally') Change parent variable */
      this.title = 'Vue event Bus'
      bus.$emit('titleChanged', 'Vue event Bus')
    }
  }
}
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>
