import { useRouter } from 'next/router';
import React from 'react';

function ProductDetails() {
  const router = useRouter();

  return (
    <div>
      Product Details
      {JSON.stringify(router, null, 4)}
    </div>
  );
}

export default ProductDetails;
