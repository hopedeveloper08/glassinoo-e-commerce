import { Link } from "react-router-dom"

function Brand() {
  return (<>
    <Link to='/'>
      <div class="flex items-center gap-2">
        <img src='/logo.png' alt="logo" width={64} />
        <span class="text-xl font-bold text-primary">گلاسینو</span>
      </div>
    </Link>
  </>)
}

export default Brand