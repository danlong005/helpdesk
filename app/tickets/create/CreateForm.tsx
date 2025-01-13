"use client";

import { RequestTicket } from "@/app/models";
import { createTicket } from "@/app/services";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [loading, setLoading] = useState(false);

  const handleClick = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const newTicket: RequestTicket = {
      title,
      body,
      priority,
      user_email: "daniellong@pplsi.com",
    };

    const createdTicket = await createTicket(newTicket);

    if (createdTicket.id !== "") {
      router.refresh();
      router.push("/tickets");
    }
  };

  return (
    <main>
      <form className="w-1/2" onSubmit={handleClick}>
        Title:{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        Body:{" "}
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        Priority:{" "}
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          className="btn-primary"
          onClick={handleClick}
          disabled={loading}
        >
          Create
        </button>
      </form>
    </main>
  );
};

export default CreateForm;
