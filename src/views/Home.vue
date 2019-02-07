<template>
  <v-container
    fill-height
    grid-list-xl
  >
    <pm-loading
      :loading="loading"
    />
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm12
        md6
        text-xs-center
      >
        <pm-card
          :width="500"
          :padding="50"
        >
          <template slot="container">
            <h3 class="headline mb-2">
              The standard Lorem Ipsum
            </h3>
            <div class="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              quis nostrud exercitation ullamco.
            </div>
          </template>
          <template slot="actions">
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :to="{ path: '/list' }"
              exact
            >
              ver mas
            </v-btn>
            <v-spacer></v-spacer>
          </template>
        </pm-card>
      </v-flex>
      <v-flex
        xs12
        sm12
        md6
      >
        <v-layout
          row
          wrap
        >
          <v-flex
            v-for="(item, index) in items"
            sm12
            md6
          >
            <pm-card
              :img="item"
            >
              <template slot="img">
                <v-container
                  fill-height
                  fluid
                  pa-2
                >
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline white--text">Lorem ipsum</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </template>
              <template slot="actions">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
              </template>
            </pm-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import apiSrvc from './apiSrvc'
  import PmCard from '../components/material/Card'
  import PmLoading from '../components/material/Loading'

  export default {
    components: {
      PmCard,
      PmLoading
    },
    data: () => ({
      items: [],
      loading: false,
    }),
    mounted() {
      this.init()
    },
    methods: {
      async init(){
        try{
          this.loading = true
          const data = await apiSrvc.index()
          if(data['status'] == 'success'){
            this.items = data['message']
            this.loading = false
          }else{
            alert('Vaya, parece que algo ha ido mal')
            this.loading = false
          }
        }catch(error){
          console.log(error)
          this.loading = false
        }
      }
    },
  }
</script>
