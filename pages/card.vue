<template>
  <section class="section">
    <div class="columns">
      <template v-if="state.isLoading">読込中....</template>
      <template v-else>
        <div class="listA">
          <h2>List:A</h2>
          <draggable
            :list="state.listA"
            group="list"
            @change="onChange('A', $event)"
            @start="dragging = true"
            @end="dragging = false"
            ghost-class="ghost"
          >
            <card
              :title="card.title"
              :icon="card.icon"
              :content="card.content"
              :key="card.id"
              v-for="card in state.listA"
            >
            </card>
          </draggable>
        </div>
        <div class="listB">
          <h2>List:B</h2>
          <draggable
            :list="state.listB"
            group="list"
            @change="onChange('B', $event)"
            @start="dragging = true"
            @end="dragging = false"
            ghost-class="ghost"
          >
            <card
              :title="card.title"
              :icon="card.icon"
              :content="card.content"
              :key="card.id"
              v-for="card in state.listB"
            >
            </card>
          </draggable>
        </div>
        <div class="listC">
          <h2>List:C</h2>
          <draggable
            :list="state.listC"
            group="list"
            @change="onChange('C', $event)"
            @start="dragging = true"
            @end="dragging = false"
            ghost-class="ghost"
          >
            <card
              :title="card.title"
              :icon="card.icon"
              :content="card.content"
              :key="card.id"
              v-for="card in state.listC"
            >
            </card>
          </draggable>
        </div>
      </template>
    </div>
    <div class="column">
      <div class="log" v-html="state.log"></div>
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
import Draggable from 'vuedraggable'
import Card from '../components/Card.vue'

interface CardData {
  id: Number
  group: String
  title: String
  icon: String
  content: String
}

export default defineComponent({
  name: 'Cards',
  head: {},
  components: {
    Card,
    Draggable,
  },
  props: {},
  setup() {
    useMeta({ title: 'カード一覧' })
    const { app } = useContext()
    const state = reactive<{
      listA: CardData[]
      listB: CardData[]
      listC: CardData[]
      isLoading: Boolean
      log: String
    }>({
      listA: [],
      listB: [],
      listC: [],
      isLoading: true,
      log: 'ログ:',
    })

    useAsync(async () => {
      const cards: CardData[] = await app.$axios
        .get('/json/data.json')
        .then((res: any) => {
          return res.data.cards
        })

      cards.forEach((card: CardData) => {
        switch (card.group) {
          case 'A':
            state.listA.push(card)
            break
          case 'B':
            state.listB.push(card)
            break
          case 'C':
            state.listC.push(card)
            break
        }
      })
      state.isLoading = false
    })

    const onChange = (
      group: String,
      { added, removed, moved }: { added: any; removed: any; moved: any }
    ) => {
      if (added) {
        const { element }: { element: CardData } = added
        state.log =
          state.log + '<br>' + group + 'に' + element.title + 'が追加されました'
      }

      if (removed) {
        const { element }: { element: CardData } = removed
        state.log =
          state.log + '<br>' + group + 'の' + element.title + 'が削除されました'
      }

      if (moved) {
        const {
          element,
          oldIndex,
          newIndex,
        }: { element: CardData; oldIndex: Number; newIndex: Number } = moved
        state.log =
          state.log +
          '<br>' +
          group +
          'の' +
          element.title +
          'の順番が' +
          oldIndex +
          '番目から' +
          newIndex +
          '番目に変わりました'
      }
    }

    return { state, onChange }
  },
})
</script>

<style lang="css">
.listA {
  background: antiquewhite;
  padding: 20px;
  width: 400px;
}
.listB {
  background: #b8d9b8;
  padding: 20px;
  width: 400px;
}
.listC {
  background: #b8b351;
  padding: 20px;
  width: 400px;
}
.ghost {
  opacity: 40%;
}
.log {
  background: #47494e;
  color: #f7f8fb;
  padding: 10px;
}
</style>
