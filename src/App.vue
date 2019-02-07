<template>
  <v-app>
    <pm-toolbar>
      <template slot="toolbar-title">
        <router-link
          :to="{ path: '/home' }"
        >
          Home
        </router-link>
        <router-link
          :to="{ path: '/home' }"
        >
          Todos
        </router-link>
      </template>
    </pm-toolbar>
    <pm-view />
  </v-app>
</template>

<script>
  import PmView from './components/core/View'
  import PmToolbar from './components/core/Toolbar'

  export default {
    name: 'App',
    components: {
      PmView,
      PmToolbar
    },
    data () {
      return {
        //
      }
    }
  }
</script>
