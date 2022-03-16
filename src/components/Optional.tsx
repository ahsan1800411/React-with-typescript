interface OptionalProps {
  price: number;
  description?: string;
}

const Optional = ({ price, description }: OptionalProps) => {
  return (
    <div>
      {price} {description}
    </div>
  );
};

export default Optional;
