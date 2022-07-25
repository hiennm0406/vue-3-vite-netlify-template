<template>
  <vue-slider v-model="value" />
</template>

<script>
import { reactive, toRefs } from 'vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  setup() {
    const data = reactive({ value: 0 })
    return toRefs(data)
  },
}
</script>