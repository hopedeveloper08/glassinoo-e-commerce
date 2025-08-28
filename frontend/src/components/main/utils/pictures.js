import isMobile from "../../../utils/isMobile"

const mobilePictures = [1, 2, 3, 4, 5].map((item) => `/images/header/mobile/${item}.jpg`)
const desktopPictures = [1, 2, 3].map((item) => `/images/header/desktop/${item}.jpg`)

const pictures = isMobile ? mobilePictures : desktopPictures

export default pictures