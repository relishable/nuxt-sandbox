import Card from './Card.vue'

export default {
  title: 'Card',
  argTypes: {
    title: {
      name: 'title',
      defaultValue: 'Free',
      control: {
        type: 'text',
      },
    },
    icon: {
      name: 'icon',
      defaultValue: 'github',
      control: {
        type: 'select',
        options: [
          'github',
          'cellphone-link',
          'alert-decagram',
          'arrange-bring-to-front',
        ],
      },
    },
    content: {
      name: 'content',
      defaultValue: '<a href="https://github.com/relishable">github</a>',
      control: {
        type: 'text',
      },
    },
  },
}

export const Normal = (args: any, { argTypes }: { argTypes: any }) => ({
  components: { Card },
  template:
    '<card :title="title" :icon="icon" :content="content"></card>',
  props: Object.keys(argTypes),
})
