import { useDashboardContext } from "../pages/DashboardLayout"
import links from "../utils/links"
import { NavLink } from "react-router-dom"
import LogoutContainer from "./LogoutContainer"

const NavLinks = ({isBigSidebar} ) => {
    const {toggleSidebar, user} = useDashboardContext( )

    return (
        <div className="nav-links">
        {links.map((link) => {
            const {text, path, icon} = link
            //key 属性为每个 NavLink 提供一个唯一的标识符。text 是从 links 数组中的 link 对象解构出来的值，通常代表链接的显示文本。path 是链接的路径，icon 是链接的图标。
            return (
            <NavLink
                to={path}
                key={text}
                className="nav-link"
                onClick={isBigSidebar? null: toggleSidebar}
                end
            >
                <span className="icon">{icon}</span>
                {text}
            </NavLink>
            )
        })}
        </div>
    )
}

export default NavLinks