import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import { users } from "@/assets/users";
import Home from "../views/Home.vue";
import UserProfile from "../views/UserProfile.vue";
import Admin from "@/views/Admin";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:userId",
    name: "UserProfile",
    component: UserProfile,
  },

  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      requiresAdmin: true,
    },
  },
];

const router = createRouter({
  //history: createWebHashHistory(),  remove the hashtag in the url
  history: createWebHistory(),
  routes,
});

//router.beforeEach(async (to, from, next))
router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user;

  if (!user) {
    //get user from api
    await store.dispatch("User/setUser", users[0]);
  }
  const isAdmin = true;
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);

  if (requiresAdmin && !isAdmin) next({ name: "Home" });
  else next();
});

export default router;
