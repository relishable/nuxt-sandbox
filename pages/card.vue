<template>
  <section class="section">
    <div class="columns is-mobile">
      <card
        :title="card.title"
        :icon="card.icon"
        :key="card.title"
        v-for="card in response.cards"
      >
        {{ card.content }}
      </card>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api'
import axios from 'axios'
import Card from '../components/Card.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    Card,
  },
  props: {},
  setup() {
    const { response, error, isLoading } = useAsync(async () => {
      const res = await axios.get('/json/data.json')
      console.log(res.data)
      return res.data
    })

    return { response, error, isLoading }
  },
})
</script>
