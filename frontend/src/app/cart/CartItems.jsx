import { GoTrash } from "react-icons/go";

function CartItems({ cart, removeItem }) {
    return (
        <div className="overflow-x-auto">
            <table className="table text-sm md:text-base">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>نوع طلق</th>
                        <th>نوع میز</th>
                        <th>جنس میز</th>
                        <th>شکل میز</th>
                        <th>ضخامت</th>
                        <th>ابعاد</th>
                        <th>قیمت</th>
                        <th>حذف؟</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, i) => (
                        <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{item.talqType.title}</td>
                            <td>{item.tableType.title}</td>
                            <td>{item.tableMaterial.title}</td>
                            <td>{item.shape}</td>
                            <td>{item.thickness} میلی متر</td>
                            <td>{item.shape === 'دایره' ? `${item.width} سانتی متر` : `${item.length} * ${item.width} سانتی متر`}</td>
                            <td>{(item.price).toLocaleString()}</td>
                            <td><button
                                className="btn btn-error btn-circle btn-outline btn-sm md:btn-md"
                                onClick={() => removeItem(i)}
                            ><GoTrash /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CartItems