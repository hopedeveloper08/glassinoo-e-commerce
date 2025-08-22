import Brand from "./components/Brand"
import Menu from "./components/Menu"
import SocialMedia from "./components/SocialMedia"

function Navbar() {
  return (<>
    <div className="navbar bg-base-200 shadow-sm px-3">
      <div className="navbar-start">
        <Brand />
        <Menu />
      </div>
      <div className="navbar-end">
        <SocialMedia />
      </div>
    </div>
  </>)
}

export default Navbar