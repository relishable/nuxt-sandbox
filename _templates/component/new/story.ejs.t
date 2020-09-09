---
to: '<%= story ? `components/${category}/${name}/${name}.stories.ts` : null %>'
---
import <%= name %> from './<%= name %>.vue'

export default {
  title: '<%= category %>/<%= name %>/<%= name %>',
}

export const Normal = () => ({
  components: { <%= name %> },
  template: '<<%= h.changeCase.param(name) %> />',
})
