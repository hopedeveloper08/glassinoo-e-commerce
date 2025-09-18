function GalleryLoading() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map(table =>
                <button className="w-full card shadow border-2 border-primary/20 bg-primary/3" key={table}>
                    <figure className="skeleton h-64 w-full"><span className="loading loading-spinner text-primary size-8"></span></figure>
                    <p className="skeleton h-4 w-1/2 mx-auto my-1"></p>
                </button>
            )}
        </div>
    )
}

export default GalleryLoading