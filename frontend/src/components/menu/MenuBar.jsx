import DesktopMenu from "./components/desktop/DesktopMenu.jsx"
import MobileMenu from "./components/mobile/MobileMenu.jsx"

import isMobile from '../../utils/isMobile'

export default function MenuBar() {
  return isMobile ? <MobileMenu /> : <DesktopMenu />
}