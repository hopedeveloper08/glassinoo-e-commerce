
export default function Loading() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {[1, 2, 3, 4].map((item) => (
        <div className="card bg-base-200 hover:bg-base-300 transition rounded-xl overflow-hidden" key={item}>
          <figure className='aspect-square'>
            <div className="skeleton h-full w-full flex justify-center items-center">
              <span className="loading loading-spinner text-primary loading-xl"></span>
            </div>
          </figure>
          <div className="card-body flex flex-row px-12 justify-between items-center">
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
