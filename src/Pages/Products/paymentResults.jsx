// import React, { useState, useEffect, useContext } from "react";
// import { CartContext } from "../src/cartContext";

// function PaymentResults() {
//   const [paymentResult, setPaymentResult] = useState(null);

//   useEffect(() => {
//     // Simulate a payment result using localStorage
//     const storedPaymentResult = localStorage.getItem("paymentResult");
//     if (storedPaymentResult) {
//       setPaymentResult(JSON.parse(storedPaymentResult));
//     } else {
//       // If payment result doesn't exist in localStorage, handle it as needed
//       console.log("Payment result not found in localStorage");
//     }
//   }, []);

//   const { setCartItems } = useContext(CartContext);

//   useEffect(() => {
//     if (paymentResult && paymentResult.AUTH_RESP === "00") {
//       // Simulate the successful payment logic
//       localStorage.removeItem("TAC");
//       localStorage.removeItem("myCart");
//       localStorage.removeItem("totalCost");
//       setCartItems([]);
//     }
//   }, [paymentResult, setCartItems]);

//   if (!paymentResult) return <p>Loading...</p>;

//   return (
//     <div className="w-50 mx-auto border">
//       {paymentResult.AUTH_RESP === "00" ? (
//         <div className="text-center p-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="70"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-2 h-2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01-1.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
//             />
//           </svg>

//           <p className="fw-bold">Payment succeeded</p>

//           <p>Amount paid: ${paymentResult.AUTH_AMOUNT_REQUESTED}</p>
//           <p>Account No: {paymentResult.AUTH_MASKED_ACCOUNT_NBR}</p>
//         </div>
//       ) : (
//         <div className="text-center p-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="70"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 9v3.75M2.697 16.126L12 9l9.303 7.126c.866 1.5.217 3.374-1.948 3.374H3.646c-2.165 0-2.814-1.874-1.948-3.374z"
//             />
//           </svg>

//           <p className="fw-bold">Payment failed</p>
//           <p>Reason: {paymentResult.AUTH_RESP_TEXT}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PaymentResults;
