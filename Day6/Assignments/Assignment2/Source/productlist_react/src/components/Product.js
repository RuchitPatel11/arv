import ProductList from "./ProductList";
const Product = (props) => {
  const products = [
    {
      img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      name: "Cotton Jacket",
      price: 2200,
      quantity: 2,
    },
    {
      img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      name: "Shirt",
      price: 1400,
      quantity: 3,
    },
    {
      img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      name: "T-shirt",
      price: 1350,
      quantity: 3,
    },
  ];
  const newarray = products.map((item) => {
    item.Gross = item.price * item.quantity;
    item.discount = item.Gross * 0.05;
    item.payable = item.Gross - item.discount;
    console.log(item);
    return item;
  });

  return <ProductList product={newarray} />;
};

export default Product;
