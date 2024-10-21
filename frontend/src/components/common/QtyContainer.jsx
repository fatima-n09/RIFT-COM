import React, { useContext } from 'react';
import { CartContext } from '../../contextAPIs';
import Button from './Button';
import Row from './Row';

const QtyContainer = ({ data }) => {
  const { cartItems, handleInc, handleDec } = useContext(CartContext);
  const cartItem = cartItems.find((item) => item._id === data?._id);

  return (
    <Row className="items-center">
      <Button
        onClick={() => handleDec(data)} // Using the handleDec from context
        title="-"
        className="w-[52px] h-[52px]"
      />
      <p className="w-[70px] text-center text-[16px] font-semibold">
        {cartItem?.qty || 0}  {/* Display the quantity of the cart item */}
      </p>
      <Button
        onClick={() => handleInc(data)} // Using the handleInc from context
        title="+"
        className="w-[52px] h-[52px]"
      />
    </Row>
  );
};

export default QtyContainer;
