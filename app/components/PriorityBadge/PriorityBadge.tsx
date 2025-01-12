import { Ticket } from '@/app/models';
import React from 'react'

const PriorityBadge = async function(params: {ticket: Ticket}) {
  const ticketData: Ticket = (await params).ticket;

  return (
    <div className={`pill ${ticketData.priority}`}>
    {ticketData.priority} priority
  </div>
  )
}

export default PriorityBadge;