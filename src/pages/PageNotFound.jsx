
import { Link } from 'react-router-dom';  

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/" className="text-blue-500 underline">
        Go back to the homepage
      </Link>
    </div>
  );
}

export default PageNotFound;
