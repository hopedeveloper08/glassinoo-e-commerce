import { NavLink } from 'react-router-dom';
import menuItems from '../../../utils/menuItems'

export default function DesktopMenuItems() {
  return (
    <ul className="menu menu-horizontal">
      {menuItems.map((item) => (
        <li key={item.title}>
          <NavLink to={item.link} className={({ isActive }) => (isActive ? 'menu-active' : '')}>
            {/* <div dangerouslySetInnerHTML={{ __html: item.icon }} /> */}
            {<item.icon size={20} />}
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
