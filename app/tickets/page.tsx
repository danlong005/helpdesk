import React from 'react'
import TicketList from './TicketList';

const Tickets = () => {
  return (
    <main>
      <h2>Tickets</h2>
      <p>Currently open tickets.</p>
      <TicketList />
    </main>
  );
}

export default Tickets;
