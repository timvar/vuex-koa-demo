<template>
  <div id="product-list-one">
    <h1>Viestejä Koa backendiltä...</h1>

    <p>Greeting: {{userGreeting}}</p>
    <button v-on:click="setGreeting">New Greeting</button>
    
    <p>Greeting: {{finGreeting}}</p>
    <button v-on:click="setFinGreeting">New Greeting</button>
    
    <p>Greeting: {{engGreeting}}</p>
    <button v-on:click="setEngGreeting">New Greeting</button>
    
    <p>Greeting: {{sweGreeting}}</p>
    <button v-on:click="setSweGreeting">New Greeting</button>
    
    <p>Greeting: {{gerGreeting}}</p>
    <button v-on:click="setGerGreeting">New Greeting</button>
    

    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{ product.name }}</span>
        <span class="price">€{{ product.price }}</span>
      </li>
    </ul>
    <button v-on:click="reducePrice(1)">Reduce Price</button>

  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex'; 

export default {
  //props: ['products'],
  /*
  data() {
    return {
      
    }
  }
  */
  
  computed: {
    products(){
      return this.$store.state.products;
    },
    ...mapGetters([
      'saleProducts',
      'userGreeting',
      'finGreeting',
      'sweGreeting',
      'engGreeting',
      'gerGreeting'
    ])
    /*
    saleProducts(){
      return this.$store.getters.saleProducts;
    }
    */
  },
  methods: {
    ...mapActions([
      'reducePrice',
      'setGreeting',
      'setFinGreeting',
      'setSweGreeting',
      'setEngGreeting',
      'setGerGreeting',
    ])
    
    // reducePrice: function(amount) {
      /*this.$store.state.products.forEach(element => {
        element.price  -= 1;
      });*/
      /*  this.$store.commit('reducePrice'); */
    //  this.$store.dispatch('reducePrice', amount)
    //}
  }
}
</script>

<style scoped>
 body {
    font-family: Ubuntu;
  }

</style>
