import React from 'react';

export default function Cart(props){
    const {cartItems, onAdd, onRemove} = props;
    return (
        <aside className="block col-1">
            <h2>Grocery list</h2>
            <hr></hr>
            
            <div>
                {cartItems.length === 0 && <div>Cart Is Empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2">{item.name}
                        </div>
                        <br></br><br></br>
                        <div className="col-2">
                            <button onClick={()=>onAdd(item)} className="add">+</button>
                            <button onClick={()=>onRemove(item)} className="remove">- </button>
                                
                        </div>
                        
                        <div className="col-2 text-right">
                        {item.qty}
                           {/* {item.qty} x ${item.price} */}
                        </div>
                    </div>

                ))}
            </div>
        </aside>
    );
}
