export default function LoadingGallery() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(table =>
                <button className="card border-1 w-full border-gray-200 shadow-sm" key={table}>
                    <figure className="skeleton h-64 w-full"><span className="loading loading-spinner text-primary size-8"></span></figure>
                    <p className="skeleton h-4 w-1/2 mx-auto my-1"></p>
                </button>
            )}
        </div>
    )
}
