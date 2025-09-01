import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function SocialMedias() {
  const iconSize = 24

  return (
    <div className="my-auto">
      <a className="btn btn-ghost btn-circle text-red-400" href='https://www.instagram.com/glassco.home?igsh=ajUza2RieDQ5OG9q'>
        <BsInstagram size={iconSize} />
      </a>
      <a className="btn btn-ghost btn-circle text-green-400" href='https://wa.me/09036202425'>
        <BsWhatsapp size={iconSize} />
      </a>
    </div>
  )
}
