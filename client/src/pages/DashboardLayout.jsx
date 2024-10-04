import { Outlet } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSidebar, SmallSidebar, Navbar  } from "../components"
import {createContext, useContext, useState} from "react"
import { checkDefaultTheme  } from "../App"

const DashboardContext = createContext();



//DashboardLayout 是应用程序的一个布局组件，它使用 DashboardContext.Provider 包裹子组件，从而使这些组件能够访问 DashboardContext 中共享的状态和函数。
const DashboardLayout = ({}) => {
  // temp
  const user={name:'vicky'}
  const [showSidebar, setShowSidebar] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme()) 
  
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    document.body.classList.toggle("dark-theme", newDarkTheme)
    localStorage.setItem("darkTheme", newDarkTheme)
  }


  const toggleSidebar = () => {
    setShowSidebar(!showSidebar) 
  }

  const logoutUser = async () => {
    console.log('logout user');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}
//useContext(DashboardContext) 是 React 的 useContext Hook，用于订阅 DashboardContext。它会返回 DashboardContext.Provider 提供的值。
export const useDashboardContext = () => {
  return useContext(DashboardContext)
}
export default DashboardLayout

// useDashboardContext 是一个自定义 Hook，用于让组件可以方便地访问 DashboardContext 中的共享状态和方法。
// useContext(DashboardContext) 是 React 的 useContext Hook，用于订阅 DashboardContext，从而访问通过 DashboardContext.Provider 提供的值。
// DashboardContext 是通过 createContext() 创建的，目的是共享状态和方法，并在整个组件树中提供访问这些状态和方法的能力。
