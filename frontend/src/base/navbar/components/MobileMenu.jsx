import { Link } from 'react-router-dom';

export default function MobileMenu(props) {
  return (<>
    <div className="dock z-100 bg-gray-100 border-t-gray-200">
      {props.menu.map((item) => (
        <Link to={item.link} className='text-secondary-content' key={item.title} >
          <div dangerouslySetInnerHTML={{ __html: item.icon }} />
          <span className="dock-label">{item.title}</span>
        </Link>
      ))}
    </div>
  </>)
}