import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [
      {name: 'Banana Skin', price: 20},
      {name: 'Shiny Star', price: 40},
      {name: 'Green Shells', price: 60},
      {name: 'Red Shells', price: 80}
    ],
    greeting: 'Moi maailma!',
    finGreeting: 'Hei!',
    sweGreeting: 'Hej!',
    engGreeting: 'Hi!',
    gerGreeting: 'Hallo!',
  },

  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map( product => {
        return {
          name: '**' + product.name + '**',
          price: product.price/2
        }
      });
      return saleProducts;

    },
    userGreeting: state => { 
      return state.greeting; },
    finGreeting: state => { 
      return state.finGreeting; },
    sweGreeting: state => { 
      return state.sweGreeting; },
    engGreeting: state => { 
      return state.engGreeting; },
    gerGreeting: state => { 
      return state.gerGreeting; }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(element => {
        element.price  -= payload;
      })
    },
    setGreeting: (state, newGreeting) => {
      state.greeting = newGreeting
    },
    setFinGreeting: (state, newGreeting) => {
      state.finGreeting = newGreeting
    },
    setSweGreeting: (state, newGreeting) => {
      state.sweGreeting = newGreeting
    },
    setEngGreeting: (state, newGreeting) => {
      state.engGreeting = newGreeting
    },
    setGerGreeting: (state, newGreeting) => {
      state.gerGreeting = newGreeting
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      context.commit('reducePrice', payload)
    },
    setGreeting: (context) => {
      axios.get('http://localhost:3000/')
        .then(response => {
          console.log(response);
          context.commit('setGreeting', response.data.msg);
        });
    },
    setFinGreeting: (context) => {
      axios.get('http://localhost:3000/fin')
        .then(response => {
          console.log(response);
          context.commit('setFinGreeting', response.data.msg);
        });
    },
    setSweGreeting: (context) => {
      axios.get('http://localhost:3000/swe')
        .then(response => {
          console.log(response);
          context.commit('setSweGreeting', response.data.msg);
        });
    },
    setEngGreeting: (context) => {
      axios.get('http://localhost:3000/eng')
        .then(response => {
          console.log(response);
          context.commit('setEngGreeting', response.data.msg);
        });
    },
    setGerGreeting: (context) => {
      axios.get('http://localhost:3000/ger')
        .then(response => {
          console.log(response);
          context.commit('setGerGreeting', response.data.msg);
        });
    },

  }
})
