<template>
  <div>
    <v-dialog
      v-model="loading"
      persistent
      width="300"
      content content-class="centered-dialog"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Por favor espere
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style>
  .dialog.centered-dialog, .v-dialog.centered-dialog {
    background: #282c2dad;
    box-shadow: none;
    border-radius: 6px;
    width: auto;
    color: whitesmoke;
  }
</style>