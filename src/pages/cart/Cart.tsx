import { useEffect } from "react";
const Cart = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-10 min-h-screen">
      <div className="max-w-6xl bg-red-100 mx-auto">
        <h1>This is Cart page</h1>
      </div>
    </div>
  );
};

export default Cart;
