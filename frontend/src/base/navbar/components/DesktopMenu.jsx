import { Link } from 'react-router-dom';

export default function DesktopMenu(props) {
  return (<>
    <ul className="menu flex flex-row bg-base-200 lg:menu-horizontal ms-2 rounded-box">
      {props.menu.map((item) => (
        <li key={item.title}>
          <Link to={item.link} className='text-secondary-content'>
            <div dangerouslySetInnerHTML={{ __html: item.icon }} />
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </>)
}
