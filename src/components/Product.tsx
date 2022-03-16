interface ProductProps {
  children: React.ReactNode;
}

const Product = ({ children }: ProductProps) => {
  return <h1>{children}</h1>;
};
export default Product;
