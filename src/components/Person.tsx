interface PersonProps {
  fullName: {
    firstName: string;
    secondName: string;
  };
}

const Person = ({ fullName }: PersonProps) => {
  return (
    <h1>
      {fullName.firstName} {fullName.secondName}
    </h1>
  );
};

export default Person;
