import { checkAccessToken } from '../api/api'

function load (page) {
  return () => import(`pages/${page}.vue`)
}

const routes = [
  {
    path: '/login',
    component: load('login/LoginPage')
  },
  {
    path: '/forgotPassword',
    component: load('login/ForgotPasswordPage')
  },
  {
    path: '/email/validation/:encodedEmail',
    component: load('login/ValidationPage')
  },
  {
    path: '/password/restore/:token',
    component: load('login/RestorePasswordPage')
  },
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    beforeEnter: (to, from, next) => {
      checkAccessToken().then(function (response) {
        if (response.includes('Error')) {
          next('/login')
        } else {
          next()
        }
      })
    },
    children: [
      {
        path: '/',
        component: load('home/HomePage')
      },
      {
        path: '/roles',
        component: load('roles/RolesPage')
      },
      {
        path: '/role/:id?',
        component: load('roles/RolePage')
      },
      {
        path: '/user',
        component: load('users/LogInUserPage')
      },
      {
        path: '/users/new',
        component: load('users/UserCreationPage')
      },
      {
        path: '/users/:id',
        component: load('users/UserPage')
      },
      {
        path: '/users',
        component: load('users/UsersPage')
      },
      {
        path: '/courses',
        component: load('courses/CoursesPage')
      },
      {
        path: '/courses/:id',
        component: load('courses/CoursePage')
      },
      {
        path: '/outcomeCategorys',
        component: load('outcomeCategorys/OutcomeCategorysPage')
      },
      {
        path: '/outcomeCategorys/:id',
        component: load('outcomeCategorys/OutcomeCategoryPage')
      }
    ]
  },

  { path: '/forbidden', component: load('error/403') }, // Not access
  { path: '/backend_disconnected', component: load('error/501') }, // Backend not deployed
  { path: '*', component: load('error/404') } // Not found
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: load('error/404')
  })
}

export default routes
