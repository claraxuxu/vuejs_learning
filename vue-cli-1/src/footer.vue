<template>
    <footer>
        <p>{{ copyright }} {{ title }}</p>
    </footer>
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
        copyright: "Copyright 2022"
    }
  },
  created() {
      bus.$on('titleChanged', (data) => {
          this.title = data /**Data = 'Vue event Bus' */
      })
  }
}
// im just trying the github
</script>

<style scoped>
footer {
    background: #222;
    padding: 6px;
}

p {
    color: lightgreen;
    text-align: center;
}
</style>
