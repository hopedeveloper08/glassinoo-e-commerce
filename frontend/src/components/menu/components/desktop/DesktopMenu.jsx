import Brand from './components/Brand';
import DesktopMenuItems from './components/DesktopMenuItems';
import SocialMedias from './components/SocialMedias';

export default function DesktopMenu() {
  return (
    <div className="navbar bg-base-200 shadow-lg">
      <div className='lg:container mx-auto px-4 flex justify-between'>
        <div className='flex gap-4'>
          <Brand />
          <DesktopMenuItems />
        </div>
        <SocialMedias />
      </div>
    </div>
  )
}
