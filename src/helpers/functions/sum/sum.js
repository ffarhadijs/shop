const sum = (selectedProducts) => {
  const totalProducts = selectedProducts.reduce(
    (total, products) => total + products.quantity,
    0
  );
  const totalPrice = selectedProducts.reduce(
    (total, products) => total + products.quantity * products.price,
    0
  );
  return { totalProducts, totalPrice };
};

export { sum };
