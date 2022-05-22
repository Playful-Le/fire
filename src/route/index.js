import { createRouter, createWebHashHistory } from "vue-router"

const index = () => import("../view/index/index")
const user = () => import("../view/user/user")
const NotFound = () => import("../view/NotFound")


const routes = [
  { path: "/", redirect: "/index" },
  {
    path: "/index",
    name: "index",
    component: index
  },
  {
    path: "/user",
    name: "user",
    component: user
  },
  {
    path: "/404",
    name: "404",
    component: NotFound
  },
  {//放到路由最下边一项，因为路由会先匹配上边的项
    path:'/:pathMatch(.*)/',
    name:'NotFound',
    redirect:'404',
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})