import { Link } from 'react-router-dom';

function MenuDesktop({ menu }) {
  return (<>
    <ul className="menu bg-base-200 lg:menu-horizontal ms-2 rounded-box">

      {menu.map((item) => (
        <li>
          <Link to={item.link} className='text-secondary-content'>
            <div dangerouslySetInnerHTML={{ __html: item.icon }} />
            {item.title}
          </Link>
        </li>
      ))}

    </ul>
  </>)
}

export default MenuDesktop