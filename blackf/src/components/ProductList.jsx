import react from 'react'
import { useState } from 'react';
import Cart from './Cart';


const ProductList = ({products, desconto, valorFinal, cart, setCart, id, AddProductsCart,TakeID}) => {

   

    console.log(products)

    return (
       
    <div>
        {products && products.map(item =>
            
            <div>
                
                <div>Nome: {item.name}</div>
                <div>Preço: R${item.price}</div>
                <div>Desconto: {desconto}%</div>
                <div>Valor do desconto: R${item.valueOfdiscount}</div>
                <div>Valor final: R${valorFinal}</div>
                <button onClick={() => (AddProductsCart(item.id))}>Adicionar ao carrinho</button>
                <div>--------------------------</div>
            </div>
            )}
            <div>
            
            </div>
    </div>
    )
}

export default ProductList;

