import { PageProps } from '@/.next/types/app/layout';
import PriorityBadge from '@/app/components/PriorityBadge/PriorityBadge';
import { Ticket } from '@/app/models';
import { getTicket } from '@/app/services';
import React from 'react'



async function getRouteData(props: PageProps): Promise<any> {
  const { params, searchParams } = props;

  const routeParms: any = await params;
  const searchParms: any = await searchParams;

  return { routeParms, searchParms };
}

interface RouteParams {
  id: string;
}

const TicketDetails = async (props: PageProps) => {
  const { routeParms } = await getRouteData(props);
  const routeParams: RouteParams = routeParms;

  const ticket: Ticket = await getTicket(routeParams.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
        <div className="card">
          <h3>{ticket.title}</h3>
          <small>Created by {ticket.user_email}</small>
          <p>{ticket.body}</p>
          <PriorityBadge ticket={ticket} />
        </div>
      </nav>
    </main>
  );
}

export default TicketDetails;