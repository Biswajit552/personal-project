"use client";
import { useState } from "react";
import Multiplefile from "./Multiplefile";

export default function ProjectForm({ onsubmit, menuItem }) {
  const [title, setTitle] = useState(menuItem?.name || "");
  const [description, setDescription] = useState(menuItem?.description || "");
  const [image, setImage] = useState(menuItem?.image || "");

  return (
    <form
      onSubmit={(e) =>
        onsubmit(e, {
          title,
          description,
          image,
        })
      }
      className="mt-8 max-w-3xl mx-auto"
    >
      <div
        className="flex md:flex-row flex-col items-start gap-4 "
        // style={{ gridTemplateColumns: ".3fr .7fr" }}
      >
        <div className="md:w-[300px] w-[250px] mx-auto ">
          <Multiplefile link={image} setLink={setImage} />
        </div>
        <div className="flex flex-col mx-auto ">
          <label>Blog Title:-</label>
          <input
            className="border border-black rounded-lg outline-none mb-4"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Description:-</label>
          <textarea
            cols={38}
            rows={5}
            className="  border border-black rounded-lg outline-none mb-5"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            type="submit"
            className="bg-primary text-white rounded-xl py-2 text-xl "
          >
            Create Post
          </button>
        </div>
      </div>
    </form>
  );
}
