export default function Loading() {
  return (
    <>
      {[1, 2, 3, 4].map(table =>
        <button className="card border-1 border-gray-200 shadow-sm" key={table}>
          <figure className="skeleton h-64 w-full"><span className="loading loading-spinner text-primary size-8"></span></figure>
          <p className="skeleton h-4 w-1/2 mx-auto my-1"></p>
        </button>
      )}  
    </>
  )
}
