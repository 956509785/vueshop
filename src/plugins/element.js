import Vue from 'vue'
import { Button } from 'element-ui'
import { Form}from 'element-ui'
import { FormItem}from 'element-ui'
import { Input}from 'element-ui'
import {Message,Container,Header,Aside,Main
        ,Menu,Submenu,MenuItemGroup,MenuItem,Breadcrumb,BreadcrumbItem
        ,Card,Row,Col,Table,TableColumn,Switch,Tooltip,Pagination,Dialog
        ,MessageBox} from "element-ui";


Vue.use(Button)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Tooltip)
Vue.use(Switch)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
