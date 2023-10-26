// import React, { useState, useEffect } from 'react';

// import 

// const BASE_URL = 'https://fakestoreapi.com/products';

// const fetchData = async (url) => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     setError(error);
//   }
// };

// const ProductList = ({ products }) => (
//   <ul>
//     {products.map((product) => (
//       <li key={product.id}>{product.title}</li>
//     ))}
//   </ul>
// );

// const AllProductCategories = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDataAndCategories = async () => {
//       try {
//         const data = await fetchData(BASE_URL);
//         setProducts(data);

//         const uniqueCategories = [...new Set(data.map((product) => product.category))];
//         setCategories(uniqueCategories);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDataAndCategories();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h2>Categories List</h2>
//       <ProductList products={products} key={product.id} />
//       <ul>
//         {categories.map((category) => (
//           <li key={category}>{category}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AllProductCategories;

// // 