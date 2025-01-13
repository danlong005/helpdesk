import { notFound } from "next/navigation"
import { Ticket } from "../models"


export async function getTickets(): Promise<Ticket[]> {
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
