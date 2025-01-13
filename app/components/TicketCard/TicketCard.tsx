import Link from "next/link";
import React from "react";
import PriorityBadge from "../PriorityBadge/PriorityBadge";
import { Ticket } from "@/app/models";

const TicketLink = async (params: { ticket: Ticket }) => {
  const ticketData: Ticket = (await params).ticket;
  return (
    <Link href={`/tickets/${ticketData.id}`}>
      <div key={ticketData.id} className="card my-5">
        <h3>{ticketData.title}</h3>
        <p>{ticketData.body.slice(0, 200)}...</p>
        <PriorityBadge ticket={ticketData} />
      </div>
    </Link>
  );
};

export default TicketLink;
