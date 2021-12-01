import { useState } from "react";

const Cart = ({cart, desconto, valorFinal, ValueOfDiscount}) => {
    console.log(cart)

const total = cart.reduce(function(acc,cur){return acc + cur.price},0)

    
    return (
       <div> 
           {cart && cart.map(item => 
           <div>
                 <div>Nome : {item.name}</div>
                 <div>Preço: {item.price}</div>
                 <div>Desconto: {desconto}%</div>
                 <div>Valor do desconto: R${ValueOfDiscount*-1}</div>
                 <div>Valor final: {valorFinal}</div>
                 <div>---------------------------</div>
           </div>
              
           
           )}
                    <h4>Total carrinho : R${total}</h4>
       </div>
    )
}
export default Cart;