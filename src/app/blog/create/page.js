"use client";
import MenuItemForm from "@/components/layout/MenuItemForm";
import { useState } from "react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export default function CreateBlog() {
  const [redirectToItems, setRedirectToItems] = useState(false);
  console.log(redirectToItems);

  const handleCreate = async (e, data) => {
    e.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const res = fetch("/api/create", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        resolve();
      } else {
        reject();
      }
      await toast.promise(savingPromise, {
        loading: <b>Saving...</b>,
        success: <b>Item created!</b>,
        error: <b>Could not save.</b>,
      });
    });

    setRedirectToItems(true);
    toast.success("Blog created successfully");
  };
  if (redirectToItems) {
    return redirect("/blog");
  }

  return (
    <section>
      <MenuItemForm onsubmit={handleCreate} menuItem={null} />
    </section>
  );
}
