<template>
  <div class="ui secondary pointing  menu">
    <router-link to="/" class="active item">
      Image Uploader
    </router-link>
    <div class="right menu">
      <div class="horizontal">
        <router-link to="/" class="item">Galleries</router-link> 
        <router-link to="/upload" class="item">Upload</router-link> 
        <a class="item" @click="logout">Logout</a> 
      </div>
      <a href="#" class="ui item" @click="login">Login</a>

      <!-- <div v-if="isLoggedIn" class="horizontal">
        <a class="item">Gallery button</a> 
        <a class="item">Upload button</a> 
        <a class="item" @click="logout">Logout button</a> 
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login', 'logout']),
};
</script>
