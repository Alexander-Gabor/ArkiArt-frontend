/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-no-useless-fragment */
// import React, { Fragment, useState } from 'react';
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from '@material-tailwind/react';
// import { Tooltip } from '@material-tailwind/react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart } from '../../reducers/cartSlice';

// const Cart = ({ openModal, setOpen }) => {
//   const cart = useSelector((state) => state.cart.cart);
//   const totalPrice = useSelector((state) => state.cart.totalPrice);

//   const dispatch = useDispatch();
//   return (
//     <div>
//       {cart.length > 0 ? (
//         <Fragment>
//           <Dialog
//             className="border-0 outline-0"
//             open={openModal}
//             handler={() => setOpen(false)}
//             animate={{
//               mount: { scale: 1, y: 0 },
//               unmount: { scale: 0.9, y: -100 },
//             }}
//           >
//             <DialogHeader>Shopping Bag</DialogHeader>
//             <DialogBody
//               divider
//               className="flex flex-col justify-center items-start"
//             >
//               {cart.map((item, index) => {
//                 return (
//                   <div key={index}>
//                     <div className="grid grid-cols-2 py-4">
//                       <div>
//                         <img
//                           className="h-[125px] rounded-md"
//                           src={item.img}
//                           alt={item.name}
//                         ></img>
//                         <div className="flex flex-col items-start">
//                           <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
//                             {item.name}
//                           </h4>
//                         </div>
//                         <div className="max-w-xs">
//                           <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
//                             {item.text}
//                           </p>
//                         </div>
//                       </div>
//                       <div>
//                         <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
//                           Selected size:{' '}
//                           <span className="ml-2">{item.size}</span>
//                         </p>
//                         <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
//                           Selected color:{' '}
//                           <span
//                             className="ml-2 rounded-full px-2"
//                             style={{ backgroundColor: item.color }}
//                           ></span>
//                         </p>
//                         <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
//                           Amount: <span className="ml-2">{item.amount}</span>
//                         </p>
//                         <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
//                           Single Item Price:{' '}
//                           <span className="ml-2">{item.price}$</span>
//                         </p>
//                         <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
//                           Total Item Prices:{' '}
//                           <span className="ml-2">{item.totalPrice}$</span>
//                         </p>
//                         <div className="pt-4">
//                           <Tooltip
//                             content="Remove from the Cart"
//                             placement="bottom"
//                           >
//                             <Button
//                               onClick={() => dispatch(removeFromCart(item))}
//                               size="sm"
//                               color="red"
//                               ripple={true}
//                               variant="filled"
//                             >
//                               Remove
//                             </Button>
//                           </Tooltip>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </DialogBody>
//             <DialogFooter className="flex justify-start items-center">
//               <p className="text-black text-base font-inter tracking-normal leading-none pt-2">
//                 Total Price of All Products:{' '}
//                 <span className="ml-2">{totalPrice}$</span>
//               </p>
//             </DialogFooter>
//           </Dialog>
//         </Fragment>
//       ) : (
//         <Fragment>
//           <Dialog
//             className="border-0 outline-0"
//             open={openModal}
//             handler={() => setOpen(false)}
//             animate={{
//               mount: { scale: 1, y: 0 },
//               unmount: { scale: 0.9, y: -100 },
//             }}
//           >
//             <DialogHeader>Shopping Bag</DialogHeader>
//             <DialogBody divider>
//               <div>
//                 <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
//                   Your bag is empty
//                 </h1>
//                 <p className="text-black text-base font-inter tracking-normal leading-none ">
//                   Add some products
//                 </p>
//               </div>
//             </DialogBody>
//           </Dialog>
//         </Fragment>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { Fragment, useState } from 'react';
import styled from 'styled-components/macro';
import {
  Button,
  Dialog as MaterialDialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { Tooltip } from '@material-tailwind/react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../reducers/cartSlice';

const Dialog = styled(MaterialDialog)`
  &.border-0 {
    outline: none;
  }
`;

const CartContainer = styled.div`
  background-color: #ffffff;
  padding: 1rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
`;

const ProductImage = styled.img`
  height: 125px;
  border-radius: 4px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.h4`
  color: #333333;
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

const ProductText = styled.p`
  color: #555555;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: #333333;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SizeLabel = styled.span`
  margin-left: 0.5rem;
`;

const ColorDot = styled.span`
  margin-left: 0.5rem;
  background-color: ${(props) => props.color};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: inline-block;
`;

const TotalPrice = styled.p`
  color: #333333;
  font-size: 1rem;
  margin-top: 1rem;
`;

const EmptyCartContainer = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  text-align: center;
`;

const EmptyCartTitle = styled.h1`
  color: #333333;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0;
`;

const EmptyCartText = styled.p`
  color: #555555;
  font-size: 1rem;
`;

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  return (
    <div>
      {cart.length > 0 ? (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 }
            }}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody divider>
              <CartContainer>
                {cart.map((item, index) => (
                  <ProductGrid key={index}>
                    <ProductImage src={item.img} alt={item.name} />
                    <ProductInfo>
                      <ProductName>{item.name}</ProductName>
                      <ProductText>{item.text}</ProductText>
                      <ItemDetails>
                        Selected size:
                        <SizeLabel>{item.size}</SizeLabel>
                        Selected color:
                        <ColorDot color={item.color} />
                        Amount: {item.amount}
                      </ItemDetails>
                      <ItemDetails>
                        Single Item Price: ${item.price}
                        Total Item Prices: ${item.totalPrice}
                      </ItemDetails>
                      <div>
                        <Tooltip
                          content="Remove from the Cart"
                          placement="bottom"
                        >
                          <Button
                            onClick={() => dispatch(removeFromCart(item))}
                            size="sm"
                            color="red"
                            ripple={true}
                            variant="filled"
                          >
                            Remove
                          </Button>
                        </Tooltip>
                      </div>
                    </ProductInfo>
                  </ProductGrid>
                ))}
                <TotalPrice>
                  Total Price of All Products: ${totalPrice}
                </TotalPrice>
              </CartContainer>
            </DialogBody>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody divider>
              <EmptyCartContainer>
                <EmptyCartTitle>Your bag is empty</EmptyCartTitle>
                <EmptyCartText>Add some products</EmptyCartText>
              </EmptyCartContainer>
            </DialogBody>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;

