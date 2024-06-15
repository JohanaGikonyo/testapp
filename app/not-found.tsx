import Link from "next/link";

const PageNotFound = () => {
  return (
    <div>
      <h1>404 - This Page Is Not Found.</h1>
      <Link href="/" className="text-blue-400">
        Go Back To HomePage
      </Link>
    </div>
  );
};
export default PageNotFound;
