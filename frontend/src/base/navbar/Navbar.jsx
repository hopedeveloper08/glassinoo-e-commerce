import { Link } from "react-router-dom"
import DesktopMenu from "./components/DesktopMenu"
import MobileMenu from "./components/MobileMenu"
import SocialMedia from "./components/SocialMedia"

function Navbar() {
  const iconSize = 18
  const menuItems = [
    {
      title: 'صفحه اصلی',
      link: '/',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width=${iconSize} height=${iconSize} fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16"><path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" /></svg>`
    },
    {
      title: 'سفارش طلق',
      link: '/order/',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width=${iconSize} height=${iconSize} fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" /></svg>`
    },
    {
      title: 'سبد خرید',
      link: '/cart/',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width=${iconSize} height=${iconSize} fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" /><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" /></svg>`
    },
    {
      title: 'پیگیری سفارش',
      link: '/tracking/',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width=${iconSize} height=${iconSize} fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16"><path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/></svg>`
    },
  ]

  const isMobile = window.innerWidth < 768

  return (<>
    {isMobile ? <MobileMenu menu={menuItems} /> :
      <div className="navbar bg-base-200 shadow-sm px-3">
        <div className="navbar-start w-full">
          <Link to='/'>
            <div className="flex items-center gap-2">
              <img src='/logo.png' alt="logo" width={50} />
              <span className="text-xl font-bold text-primary">گلاسینو</span>
            </div>
          </Link>
          <DesktopMenu menu={menuItems} />
        </div>
        <div className="navbar-end w-16 gap-5 me-3">
          <SocialMedia size={32} key={1} />
        </div>
      </div>
    }
  </>)
}

export default Navbar