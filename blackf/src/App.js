import './App.css';
import { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999 },
    { id: 2, name: "PlayStation 5", price: 12000 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215 },
   ]);

   const [RamdonProduct, setRamdonProduct] = useState([])

   const [Price, setPrice] = useState("")

   const [ide, setIde] = useState("")

   const [name, setName] = useState("")

   const [FinalValue, setFinalValue] = useState("")

   const [Discount, setDiscount] = useState("")

   const [ValueOfDiscount, setValueOfDiscount] = useState("")

   const [RandomProductList, setRamdonProductList] = useState([])

   const [cart, setCart] = useState([])

 

    function Random (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



  function ProductDescount(price,discount) {
    console.log(price)
    console.log(discount)
    return ((price/10)*(discount/10))
  }

  const MakePromo = () => {

  const ide = Random(1,6)
  console.log(ide)

  const discount = Random(40,90)
  console.log(discount)

  const FilterProduct = products.filter(function(item){

    if(item.id === ide){
      return item
    }
  }) ;

  const price = FilterProduct.map(item => item.price)

  const name = FilterProduct.map(item => item.name)

  const id = FilterProduct.map(item => item.id)

  const ValueDescount = Math.ceil(ProductDescount(price,discount ))
  
  const valueOfdiscount = ValueDescount - price;

 

  /* produto sorteado */
  setRamdonProduct(FilterProduct)

  /* preço */
  setPrice(price)

  setName(name)

  setIde(ide)

  /* porcentagem sorteada de desconto */
  setDiscount(discount)

  /* valor final de venda */
  setFinalValue(ValueDescount)

  /* valor de desconto */
  setValueOfDiscount(valueOfdiscount)

  /* lista com os produtos sorteados */
  setRamdonProductList([...RandomProductList, 
    
    {id: id, name:name, price:price, discount:Discount, valueOfdiscount: valueOfdiscount*-1, FinalValue: FinalValue}])

  

  console.log(RandomProductList)
  }

  
  const AddProductsCart = (id) => {
    const ide = id['0']
    const item = products.find(element => element.id === ide)
    console.log(item)
    setCart([...cart,item])
  }
 
 
  return (
    <div className="App">
      <header className="App-header">
        <div className="Botao">
            <button onClick={() => MakePromo()}>Gera Promoção</button>
            <h4>Produto sorteado</h4>
        </div>
          <div>
          
              {RamdonProduct && RamdonProduct.map(item => 
              
              <section className="ProdutoSorteado">
                
                <div>{item.name}</div>
                <div>Valor original: R${item.price},00</div>
                <div>Valor promocional :R${FinalValue},00</div>
                <div>--------------------------------------</div>

              </section>
              )}

              <div className="ListaProdutosSorteados">
                <h4>Sorteados</h4>
              <ProductList 
              products={RandomProductList}
              desconto={Discount} 
              valorFinal={FinalValue}
              setCart={setCart}
              cart={Cart}
              id={ide}
              AddProductsCart={AddProductsCart}
              
              />
              </div>
          </div> 
          <div className="Carrinho">
              <h4>Carrinho</h4>
              <Cart 
               cart={cart} 
               desconto={Discount} 
               valorFinal={FinalValue} 
               ValueOfDiscount={ValueOfDiscount}/>

          </div> 
      </header>
    </div>
  );
}

export default App;
