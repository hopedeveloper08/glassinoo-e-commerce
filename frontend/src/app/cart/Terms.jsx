function Terms({ setAgree }) {
    return (
        <>
            <div className="flex gap-2">
                <input type="checkbox" className="checkbox checkbox-primary" onClick={() => setAgree(prev => !prev)} />
                <div className="text-base-content">
                    <span className="link text-primary" onClick={() => console.log('click')}>شرایط و ضوابط</span>{' '}
                    خرید را مطالعه کردم و با آن موافقم
                </div>
            </div>

            <div className="modal">

            </div>
        </>
    )
}

export default Terms