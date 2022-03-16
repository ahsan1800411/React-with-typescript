interface StatusProps {
  status: 'loading' | 'success' | 'error';
}

const Status = ({ status }: StatusProps) => {
  let message;
  if (status === 'loading') {
    message = 'Loading';
  }
  if (status === 'success') {
    message = 'Success';
  }
  if (status === 'error') {
    message = 'error';
  }

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Status;
