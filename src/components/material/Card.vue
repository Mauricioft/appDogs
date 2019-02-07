<template>
  <v-card
    :height="height"
    :style="styles"
    :max-width="width"
    :color="color"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-img
      :src="backgroudImg"
      :lazy-src="backgroudImg"
      :height="imgHeight"
      v-if="$slots.img"
    >
      <slot name="img" />
    </v-img>
    <v-toolbar
      v-if="$slots.toolbar"
    >
      <slot name="toolbar" />
    </v-toolbar>
    <v-card-text
      v-if="$slots.container"
    >
      <slot name="container" />
    </v-card-text>
    <v-card-actions v-if="$slots.actions">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    inheritAttrs: false,
    props: {
      height: {
        type: [Number, String],
        default: null
      },
      imgHeight: {
        type: [Number, String],
        default: 200
      },
      width: {
        type: [Number, String],
        default: null
      },
      padding: {
        type: [Number, String],
        default: null
      },
      img: {
        type: String,
        default: null
      },
      color: {
        type: String,
        default: null
      }
    },
    computed: {
      backgroudImg(){
        if (this.img == null) return ''
        return this.img
      },
      styles(){
        if (this.padding == null) return null
        return {
          height: '100%',
          paddingLeft: `${this.padding}px`,
          paddingRight: `${this.padding}px`
        }
      }
    },
  }
</script>