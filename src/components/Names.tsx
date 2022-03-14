interface NamesProps {
  studentNames: {
    firstName: string;
    secondName: string;
  }[];
}

const Names = ({ studentNames }: NamesProps) => (
  <>
    {studentNames.map((student, index) => (
      <h1 key={index}>
        {student.firstName} {student.secondName}
      </h1>
    ))}
  </>
);
export default Names;
