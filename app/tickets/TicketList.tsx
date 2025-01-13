import React from "react";
import { Ticket } from "../models";
import { getTickets } from "../services";
import TicketCard from "../components/TicketCard/TicketCard";

const TicketList = async () => {
  const tickets: Ticket[] = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets.</p>
      )}
    </>
  );
};

export default TicketList;
