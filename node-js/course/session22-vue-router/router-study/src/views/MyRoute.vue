<template>
  <div class="my-route">
    <input type="text" name="email" placeholder="Email"><br>
    <input type="text" name="name" placeholder="Name"><br>
    <button>Register</button>
    <h4>{{routeParameter}}</h4>
    <router-view/>
  </div>
</template>

<script>
export default {
    created(){
        // this.routeParameter = this.$route.params.name;
    },
    data(){
        return{
            routeParameter: null
        }
    }
}
</script>
