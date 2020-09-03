<template>
  <section class="section">
    <div class="columns">
      <template v-if="state.isLoading">読込中....</template>
      <template v-else>
        <card
          :title="card.title"
          :icon="card.icon"
          :content="card.content"
          :key="card.title"
          v-for="card in state.cards"
        >
        </card>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  useAsync,
  useContext,
  useMeta,
} from '@nuxtjs/composition-api'
import Card from '../components/Card.vue'

export default defineComponent({
  name: 'Cards',
  head: {},
  components: {
    Card,
  },
  props: {},
  setup() {
    const { app } = useContext()
    const state = reactive({
      cards: [],
      isLoading: true,
    })

    useAsync(async () => {
      state.cards = await app.$axios.get('/json/data.json').then((res: any) => {
        return res.data.cards
      })
      state.isLoading = false
    })

    useMeta({ title: 'カード一覧' })

    return { state }
  },
})
</script>
