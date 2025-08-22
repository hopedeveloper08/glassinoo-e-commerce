import { Link } from 'react-router-dom';

function MenuMobile({ menu }) {
  return (<>
    <div className="dock bg-gray-100 border-t-gray-200">
      {menu.map((item) => (
        <Link to={item.link} className='text-secondary-content'>
          <div dangerouslySetInnerHTML={{ __html: item.icon }} />
          <span className="dock-label">{item.title}</span>
        </Link>
      ))}
    </div>
  </>)
}

export default MenuMobile