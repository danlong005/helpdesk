import React from 'react'
import { Ticket } from '../models'
import { getTickets } from '../services';
import PriorityBadge from '@/app/components/PriorityBadge/PriorityBadge';

const TicketList = async () => {
  const tickets: Ticket[] = await getTickets();
  
  return (
    <>
      { tickets.map(ticket => (
        <div key={ticket.id} className='card my-5'>
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <PriorityBadge ticket={ticket} />
        </div>
      ))}
      {tickets.length === 0 && (
        <p className='text-center'>There are no open tickets.</p>
      )}
    </>
  )
}

export default TicketList