type ButtonProps = {
  handleClick: () => void;
};

const Button = ({ handleClick }: ButtonProps) => {
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button onClick={handleClick}>Click me</button>
        <button onClick={clickHandler}>Double Click</button>
      </form>
    </>
  );
};

export default Button;
