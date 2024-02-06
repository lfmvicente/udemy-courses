<template>
  <div id="app">
    <div class="column is-half is-offset-one-quarter">
      <img src="./assets/pokemon.png" id="logo" />
      <input class="input is-rounded" type="text" placeholder="Type Pokemon name" v-model="search">
      <button class="button is-link" id="searchBtn" @click="searchPokemon">Search</button>
      <div v-for="(poke, index) in filteredPokemons" :key="poke.url">
      <PokemonItem :name="poke.name" :url="poke.url" :num="index+1" />
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PokemonItem from './components/PokemonItem'
export default {
  name: 'App',
  data() {
    return {
      pokemons: [],
      filteredPokemons: [],
      search: ''
    }
  },
  created: function() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then(response => {
      this.pokemons = response.data.results;
      this.filteredPokemons = response.data.results;
    }).catch(err => {
      console.log(err);
    });
  },
  components: {
    PokemonItem
  },
  methods:{
    searchPokemon: function() {
      this.filteredPokemons = this.pokemons;
      if (this.search == '' || this.search == ' ') {
        this.filteredPokemons = this.pokemons;
      }else{
        this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.name == this.search);
      }
    }
  },
  computed: {
    // ##Livesearch
    // resultSearch: function() {
    //   if (this.search == '' || this.search == ' ') {
    //     return this.pokemons;
    //   }else{
    //     return this.pokemons.filter(pokemon => pokemon.name == this.search);
    //   }
    // }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #logo{
    max-width:400px;
    max-height:300px;
  }

  #searchBtn {
    margin-top: 2%;
  }
</style>
