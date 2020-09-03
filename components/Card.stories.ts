import Card from './Card.vue'

export default {
  title: 'Card',
}

export const Normal = () => ({
  components: { Card },
  template:
    '<card title="Free" icon="github">Open source on <a href="https://github.com/buefy/buefy"> GitHub </a></card>',
})
