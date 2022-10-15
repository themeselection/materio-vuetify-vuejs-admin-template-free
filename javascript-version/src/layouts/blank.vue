<script>
import { h } from 'vue'
import { VMain } from 'vuetify/lib/components/VMain/VMain'
export default defineComponent({
  setup() {
    const routerView = resolveComponent('router-view')
    
    return () => h(VMain, { class: 'layout-wrapper layout-blank' }, {
      default: () => h(routerView),
    })
  },
})
</script>

<style>
.layout-wrapper.layout-blank {
  flex-direction: column;
}
</style>
