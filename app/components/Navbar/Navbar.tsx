import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.png";

const Navbar = () => {
  return (
    <nav>
      <Image
        src={logo}
        alt="Helpdesk Logo"
        width={70}
        quality={100}
        placeholder="blur"
      />

      <h1>HelpDesk</h1>

      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create">Create Ticket</Link>
    </nav>
  );
};

export default Navbar;
