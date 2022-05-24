const quantity = (state,productData) => {
  const index = state.selectedProducts.findIndex(
    (product) => product.id === productData.id
  );
  if (index === -1) {
    return false;
  }
  if (index !== -1) {
    return state.selectedProducts[index].quantity;
  }
};

export { quantity };
