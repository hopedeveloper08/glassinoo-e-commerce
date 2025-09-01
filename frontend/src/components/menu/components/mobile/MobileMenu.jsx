import { NavLink } from 'react-router-dom';
import menuItems from '../../utils/menuItems'

export default function MobileMenu() {
  return (
    <ul className="dock z-50 bg-base-200">
      {menuItems.map((item) => (
        <NavLink to={item.link} key={item.title} className={({ isActive }) => (isActive ? 'dock-active' : '')}>
          {<item.icon size={20} />}
          <span className="dock-label">{item.title}</span>
        </NavLink>
      ))}
    </ul>
  )
}