import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <div>
      <main className="block">
      <h2 style={{textAlign:'center',margin:10,fontSize:36,fontWeight:800,color:'#090996'}}>Products</h2>
      <div className="Mainrow">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
    </div>
    
  );
}