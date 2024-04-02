"use client";
import { useState } from "react";
import EditableImage from "../../components/layout/EditableImage";

export default function MenuItemForm({ onsubmit, menuItem }) {
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
        className="flex items-start gap-4 "
        // style={{ gridTemplateColumns: ".3fr .7fr" }}
      >
        <div className="w-[300px]">
          <EditableImage link={image} setLink={setImage} />
        </div>
        <div className="flex flex-col ">
          <label>Blog Title:-</label>
          <input
            className="border border-black rounded-lg outline-none mb-4"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Description:-</label>
          <textarea
            cols={40}
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
