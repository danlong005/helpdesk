import { notFound } from "next/navigation"
import { Ticket, RequestTicket } from "../models"


export async function getTickets(): Promise<Ticket[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  
  const response = await fetch('http://localhost:4000/tickets', { next : { revalidate: 0 }})
  const data: Ticket[] = await response.json()
  return data
}

export async function getTicket(id: string): Promise<Ticket> {
  const response = await fetch(`http://localhost:4000/tickets/${id}`, { next : { revalidate: 0 }})
  
  if (response.status !== 200) {
    notFound();
  }
  
  const data: Ticket = await response.json();

  return data;
}

export async function createTicket(ticket: RequestTicket): Promise<Ticket> {
  const response = await fetch('http://localhost:4000/tickets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ticket),
  });

  let data: Ticket = {
    id: '',
    title: '',
    body: '',
    priority: '',
    user_email: '',
  }

  if (response.status === 201) {
    data = await response.json();
  }

  return data;
}