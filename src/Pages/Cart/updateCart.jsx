// import React, { useEffect, useState } from 'react';

// const BASE_URL = 'https://fakestoreapi.com/carts';

// const UpdateCart = () => {
//   const [carts, setCarts] = useState([]);

//   const fetchData = async (url) => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//     }
//   };
  
//   const getAllCarts = async () => {
//     const data = await fetchData(BASE_URL);
//     setCarts(data);
//   };

//   const updateCart = async (id, updatedCartData) => {
//     try {
//       const response = await fetch(`${BASE_URL}/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedCartData),
//       });

//       if (response.ok) {
//         console.log(`Cart with id ${id} updated successfully`);
       
//         getAllCarts();
//       } else {
//         console.error(`Failed to update cart with id ${id}`);
//       }
//     } catch (error) {
//       console.error('Error updating cart:', error);
//     }
//   };

//   useEffect(() => {
    
//     getAllCarts();
//   }, []);

//   return (
//     <div>
//       <h2>Cart List</h2>
//       {carts.map((cart) => (
//         <div key={cart.id}>
//           <p>Cart ID: {cart.id}</p>
//           <p>User ID: {cart.userId}</p>
//           <p>Date: {cart.date}</p>
//           <p>Products:</p>
//           <ul>
//             {cart.products.map((product, index) => (
//               <li key={index}>
//                 Product ID: {product.productId}, Quantity: {product.quantity}
//               </li>
//             ))}
//           </ul>
//           <button onClick={() => updateCart(cart.id, { userId: 1, date: new Date(), products: [{ productId: 1, quantity: 3 }] })}>
//             Update Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UpdateCart;
