import { IoMdClose } from "react-icons/io";

function Terms({ setAgree }) {
    return (
        <>
            <div className="flex gap-2">
                <input type="checkbox" className="checkbox checkbox-primary" onClick={e => setAgree(e.target.checked)} />
                <div className="text-base-content">
                    <span className="link text-primary font-bold" onClick={() => document.getElementById('terms').showModal()}>شرایط و ضوابط</span>{' '}
                    خرید را مطالعه کردم و با آن موافقم
                </div>
            </div>

            <dialog id="terms" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-error absolute right-2 top-2"><IoMdClose size={16} /></button>
                    </form>
                    <p className="py-8">شرایط همینه دیگه چاره ای نیست باید بپذیری و بخری</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default Terms