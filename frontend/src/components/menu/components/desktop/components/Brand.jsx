import { Link } from 'react-router-dom'

export default function Brand() {
  return (
    <Link to='/'>
      <div className="flex items-center gap-4">
        <img src='/images/logo.png' alt="گلاسینو" width={48} />
        <span className="text-2xl font-bold text-primary opacity-80">گلاسینو</span>
      </div>
    </Link>
  )
}
