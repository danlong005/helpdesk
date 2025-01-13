import Link from "next/link";
import React from "react";

const TicketNotFound = () => {
  return (
    <main className="text-center">
      <h2 className="text-3xl">Could not find the ticket.</h2>
      <p>
        <Link href="/tickets">Back to Tickets Page</Link>
      </p>
    </main>
  );
};

export default TicketNotFound;
