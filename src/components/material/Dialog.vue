<template>
  <v-dialog
    v-model="dialog"
    width="500"
    persistent
    v-bind="$attrs"
    v-on="$listeners"
  >
    <section
      slot="activator"
    >
      <slot name="btn" />
    </section>
    <pm-card>
      <template slot="toolbar">
        <v-toolbar-title>Lorem ipsum dolor sit amet</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            icon
            @click="dialog = false"
          >
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </template>
      <template slot="container">
        <v-layout>
          <v-flex xs5>
            <v-img
              :src="src"
              height="150"
              contain
            />
          </v-flex>
          <v-flex
            xs7
            text-xs-center
          >
            <v-card-text>
              <h3 class="headline mb-2">Supermodel</h3>
              <div class="blue--text mb-2">Foster the Peopled dasdsadsa</div>
              <div class="blue--text subheading font-weight-bold">2017</div>
            </v-card-text>
          </v-flex>
        </v-layout>
      </template>
    </pm-card>
    <v-card> 
    </v-card>
  </v-dialog>
</template>

<script>
  import PmCard from '../material/Card'

  export default {
    components: {
      PmCard
    },
    props:{
      src: {
        type: String,
        default: null
      }
    },
    inheritAttrs: false,
    data: () => ({
      dialog: false,
    }),
    methods: {
      
    },
  }
</script>