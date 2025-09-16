import { Link, NavLink } from "react-router";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

function DesktopMenu({ menuItems }) {
    return (
        <div className="max-md:hidden navbar bg-base-300 shadow">
            <div className="lg:container mx-auto px-4 flex justify-between">
                <div className="flex gap-4 items-center">

                    {/* brand */}
                    <Link to="/" className="flex items-center gap-4">
                        <img
                            src="/images/menu-logo.webp"
                            loading='lazy'
                            alt="گلاسینو"
                            width={48}
                        />
                        <span className="text-2xl font-bold text-primary opacity-80">
                            گلاسینو
                        </span>
                    </Link>

                    {/* items */}
                    <ul className="menu menu-horizontal">
                        {menuItems.map((item) => {
                            return (
                                <li key={item.id}>
                                    <NavLink
                                        to={item.link}
                                        className={({ isActive }) => `flex items-center text-neutral ${isActive ? "dock-active text-primary border-b-1" : ''}`}
                                    >
                                        <item.icon size={20} />
                                        <span className="mt-1">{item.title}</span>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>

                </div>

                {/* social medias */}
                <div className="my-auto max-lg:hidden flex gap-2">
                    <a
                        className="btn btn-ghost btn-circle text-red-400"
                        href="https://www.instagram.com/glassco.home?igsh=ajUza2RieDQ5OG9q"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsInstagram size={24} />
                    </a>
                    <a
                        className="btn btn-ghost btn-circle text-green-400"
                        href="https://wa.me/09036202425"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsWhatsapp size={24} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DesktopMenu