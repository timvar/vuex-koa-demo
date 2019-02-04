<template>
  <div id="app">
    <product-list-one></product-list-one>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue';

export default {
  components: {
    'product-list-one': ProductListOne,
  },
  name: 'app',
  data() {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style>

 body {
    font-family: Ubuntu;
  }

</style>
