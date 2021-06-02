import {
  Table,
  TableColumn,
  Tag,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  TabPane

} from 'element-ui'
const element = {
  install: function(Vue) {
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Tag)
    Vue.use(Button)
    Vue.use(Breadcrumb)
    Vue.use(BreadcrumbItem)
    Vue.use(Tabs)
    Vue.use(TabPane)

    Vue.prototype.$notify = Notification;
  }
}

export default element
