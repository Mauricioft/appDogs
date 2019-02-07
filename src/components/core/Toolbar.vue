<template>
  <v-toolbar
    id="core-toolbar"
    flat
    prominent
    style="background: #eee;"
    :height="height"
  >
    <div class="v-toolbar-title">
      <v-toolbar-title class="tertiary--text font-weight-light">
        <slot name="toolbar-title" />  
      </v-toolbar-title>
    </div>
    <v-spacer />
    <v-toolbar-items>
      <v-flex align-center layout py-2>
        <slot name="toolbar-items" /> 
      </v-flex>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    props: {
      height: {
        type: [Number, String],
        default: 64
      }
    },
    data: () => ({
      responsive: false,
      responsiveInput: false
    }),
    mounted() {
      this.onResponsiveInverted()
      window.addEventListener('resize', this.onResponsiveInverted)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onResponsiveInverted)
    },
    methods: {
      onResponsiveInverted () {
        if (window.innerWidth < 991) {
          this.responsive = true
          this.responsiveInput = false
        } else {
          this.responsive = false
          this.responsiveInput = true
        }
      }
    }
  }
</script>

<style>
  #core-toolbar a {
    text-decoration: none;
  }
</style>