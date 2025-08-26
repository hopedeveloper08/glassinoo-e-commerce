import { NavLink } from 'react-router-dom';

export default function MobileMenu(props) {
  return (<>
    <div className="dock z-100 bg-gray-100 border-t-gray-200">
      {props.menu.map((item) => (
        <NavLink to={item.link} key={item.title} className={({ isActive }) => (isActive ? 'dock-active' : '')}>
            <div dangerouslySetInnerHTML={{ __html: item.icon }} />
            <span className="dock-label">{item.title}</span>
        </NavLink>
      ))}
    </div>
  </>)
}