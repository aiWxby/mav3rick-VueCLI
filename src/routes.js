const homepageContent = resolve => {
  require.ensure(["./components/homepage/Content"], () => {
    resolve(require("./components/homepage/Content"));
  })
}

const demoContent = resolve => {
  require.ensure(["./components/demos/Content"], () => {
    resolve(require("./components/demos/Content"));
  })
}

const submitContent = resolve => {
  require.ensure(["./components/submit/Content"], () => {
    resolve(require("./components/submit/Content"));
  })
}

const userRedirectContent = resolve => {
  require.ensure(["./components/userRedirect/Content"], () => {
    resolve(require("./components/userRedirect/Content"));
  })
}

const registerContent = resolve => {
  require.ensure(["./components/register/Content"], () => {
    resolve(require("./components/register/Content"));
  })
}

const loginContent = resolve => {
  require.ensure(["./components/login/Content"], () => {
    resolve(require("./components/login/Content"));
  })
}

const profileContent = resolve => {
  require.ensure(["./components/profile/Content"], () => {
    resolve(require("./components/profile/Content"));
  })
}

import {store} from './store/store';
export const routes = [
  {path: '*', component: homepageContent},
  {path:'/', component: homepageContent},
  {path:'/demos', component: demoContent},
  {path:'/submit', component: submitContent,
    beforeEnter(to, from ,next){
      if (store.getters.checkAuth) {
        next();
      }else{
        next("/login");
      }
    }
  },
  {path:'/user-redirect', component: userRedirectContent,
    beforeEnter(to, from ,next){
      if (localStorage.getItem('isLogged')) {
        next("/");
      }else{
        next();
      }
    }
  },
  {path:'/login', component: loginContent,
    beforeEnter(to, from ,next){
      if (localStorage.getItem('isLogged')) {
        next("/");
      }else{
        next();
      }
    }
  },
  {path:'/register', component: registerContent,
    beforeEnter(to, from ,next){
      if (localStorage.getItem('isLogged')) {
        next("/");
      }else{
        next();
      }
    }
  },
  {path:'/profile/:id', component: profileContent,
    beforeEnter(to, from ,next){
      if (store.getters.checkAuth) {
        next(true);
      }else{
        next("/login");
      }
    }
  }
]
