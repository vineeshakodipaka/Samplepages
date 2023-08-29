// // src/components/Cart.js
// import React from 'react';
// import { useSelector } from 'react-redux';

// const Cart = () => {
//   const cartItems = useSelector(state => state.cart);

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       <ul>
//         {cartItems.map(item => (
//           <li key={item.id}>
//             {item.title} - Quantity: {item.quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;








// src/components/Cart.js

import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state => state.products.cart);

  return (
    <div className="container">
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
