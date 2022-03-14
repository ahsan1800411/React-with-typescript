type GreeProps = {
  name: string;
  messages: number;
  isLoggedIn: boolean;
};

const Greet = ({ name, messages, isLoggedIn }: GreeProps) => {
  return (
    <>
      {isLoggedIn ? (
        <h1>
          Good Morning {name}, You have {messages} unread messages
        </h1>
      ) : (
        'Welcome Guest'
      )}
    </>
  );
};

export default Greet;
