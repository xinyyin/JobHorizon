import { Outlet } from "react-router-dom"

/*在React Router这样的库中，
<Outlet /> 组件用于占位，表示页面路由的出口点，
也就是说这里将渲染与当前URL匹配的路由组件。*/

import React from 'react'

const HomeLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default HomeLayout