import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p>
        We could not find the page you were looking for.
        <br />
        <Link href="/">Go Back to the DashBoard</Link>
      </p>
    </main>
  );
};

export default NotFound;
