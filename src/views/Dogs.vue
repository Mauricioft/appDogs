<template>
  <v-container
    fill-height
    grid-list-xl
    class="scroll-y"
  >
    <pm-loading
      :loading="loading"
    />
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="(item, index) in sortedDogs"
        :key="index"
        xs6
        sm6
        md4
        d-flex
      >
        <pm-dialog
          :src="item"
        >
          <template slot="btn">
            <pm-card
              :img="item"
              :imgHeight="250"
            >
              <template
                slot="img"
              > 
                <div styles="display:none;"/>
              </template>
            </pm-card>
          </template>
        </pm-dialog>
      </v-flex>
      <v-flex
        xs12
        sm12
        md12
        class="text-xs-center"
      >
        <v-pagination
          v-model="pagination.page"
          :length="pages"
          total-visible="5"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import apiSrvc from './apiSrvc'
  import PmCard from '../components/material/Card'
  import PmDialog from '../components/material/Dialog'
  import PmLoading from '../components/material/Loading'

  export default {
    components: {
      PmCard,
      PmDialog,
      PmLoading,
    },
    data: () => ({
      items: [],
      loading: false,
      pagination: {
        page: 1,
        rowsPerPage: 6
      },
    }),
    computed: {
      sortedDogs(){
        return this.items.filter((row, index) => {
          let start = (this.pagination.page - 1) * this.pagination.rowsPerPage;
          let end = this.pagination.page * this.pagination.rowsPerPage;
          if (index >= start && index < end) return true;
        });
      },
      pages(){
        var page = Math.ceil(this.items.length / this.pagination.rowsPerPage);
        return page == 0 ? 1 : page;
      },
    },
    mounted() {
      this.init()
    },
    methods: {
      async init(){
        try{
          this.loading = true
          const data = await apiSrvc.list()
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