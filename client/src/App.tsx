import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin
} from "./pages"  

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true"
  document.body.classList.toggle("dark-theme", isDarkTheme)
  return isDarkTheme
}
const isDarkThemeEnabled = checkDefaultTheme()




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />, //使用组件作为路由的渲染内容
    errorElement: <Error/>,
    children: [
      {
        index: true, //index: true表示当前的路由对象是索引路由，即它对应于当前路径的默认页面
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout  />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          }, 
          
        ]
      },
    ],
  },
])


const App = () => { 
  return <RouterProvider router={router}/>
}

export default App;

