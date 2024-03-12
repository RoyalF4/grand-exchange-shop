import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <h1>Oops, this route doesn't exist!</h1>
      <Link to="/">Go to the home page by clicking here.</Link>
    </>
  );
};

export default ErrorPage;
