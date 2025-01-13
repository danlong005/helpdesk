import React, { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

const Tickets = () => {
  return (
    <main>
      <h2>Tickets</h2>
      <p>Currently open tickets.</p>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
};

export default Tickets;
