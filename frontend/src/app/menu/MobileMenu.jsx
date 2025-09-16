import { NavLink } from "react-router";

function MobileMenu({ menuItems }) {
    return (
        <ul className="md:hidden dock bg-base-300 z-50">
            {menuItems.map((item) => {
                return (
                    <NavLink
                        to={item.link}
                        key={item.id}
                        className={({ isActive }) => `flex flex-col items-center ${isActive ? "dock-active text-primary": ''}`}
                    >
                        <item.icon size={20} />
                        <span className="dock-label">{item.title}</span>
                    </NavLink>
                );
            })}
        </ul>
    )
}

export default MobileMenu