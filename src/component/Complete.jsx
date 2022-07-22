import React, { useEffect } from 'react';
import '../style/complete.scss';

export default function Complete(props) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Thank You';
    setTimeout(() => {
      props.history.push('/');
    }, 3000);
    return () => {
      document.title = originalTitle;
    };
  });
  return (
    <div id="complete">
      <p>
        Thank you for purchasing our product.
        <br />
        We will process your order soon.
      </p>
    </div>
  );
}
