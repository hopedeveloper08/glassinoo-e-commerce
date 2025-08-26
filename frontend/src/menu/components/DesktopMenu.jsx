import { NavLink } from 'react-router-dom';

export default function DesktopMenu(props) {
  return (<>
    <ul className="menu menu-horizontal space-x-4 bg-base-200 px-8 rounded-box">
      {props.menu.map((item) => (
        <li key={item.title} className=''>
          <NavLink to={item.link} className={({ isActive }) => (isActive ? 'menu-active' : '')}>
            <div dangerouslySetInnerHTML={{ __html: item.icon }} />
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </>)
}
