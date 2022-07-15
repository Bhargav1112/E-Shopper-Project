import React from "react";

function CartItem(props) {
    const {
        title,
        img,
        price,
        totalAmount,
        quantity,
        onAdd,
        onRemove,
        onRemoveWhole,
    } = props;

    return (
        <tr>
            <td className="align-middle">
                <div className="d-flex align-items-center">
                    <img
                        src={img}
                        alt="product image"
                        className="d-block mr-3"
                        style={{ width: 50 }}
                    />
                    {title}
                </div>
            </td>
            <td className="align-middle">${price}</td>
            <td className="align-middle">
                <div
                    className="input-group quantity mx-auto"
                    style={{ width: 100 }}
                >
                    <div className="input-group-btn">
                        <button
                            className="btn btn-sm btn-primary btn-minus"
                            onClick={onRemove}
                        >
                            <i className="fa fa-minus" />
                        </button>
                    </div>
                    <p>{quantity}</p>
                    <div className="input-group-btn">
                        <button
                            className="btn btn-sm btn-primary btn-plus"
                            onClick={onAdd}
                        >
                            <i className="fa fa-plus" />
                        </button>
                    </div>
                </div>
            </td>
            <td className="align-middle">${totalAmount}</td>
            <td className="align-middle">
                <button
                    className="btn btn-sm btn-primary"
                    onClick={onRemoveWhole}
                >
                    <i className="fa fa-times" />
                </button>
            </td>
        </tr>
    );
}

export default CartItem;
