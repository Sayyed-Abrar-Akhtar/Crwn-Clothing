import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  console.log(process.env.PUBLISHABLE_KEY);
  const publishableKey = process.env.PUBLISHABLE_KEY;

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='Crwn Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
