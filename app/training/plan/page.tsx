"use client";
import { InputField } from "@/components/InputField";
import React, { useState } from "react";

interface FormData {
  planName: string;
  isDynamic: boolean;
}

export default function PlanPage() {
  const [formData, setFormData] = useState<FormData>({
    planName: "",
    isDynamic: false,
  });

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    if (event.target.type == "checkbox") {
      console.log("checkbox");
      setFormData({ ...formData, [name]: !formData.isDynamic });
    }
    console.log("value", value);
    setFormData({ ...formData, [name]: value });
    console.log("formData", formData);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("formdata from submit", formData);
  };

  return (
    <div>
      <button
        className="btn absolute bottom-24 right-5 rounded-full hover:bg-white"
        onClick={() => document.getElementById("create_plan_modal").showModal()}
      >
        +
      </button>
      <dialog id="create_plan_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Create a plan</h3>
          <div className="modal-action">
            <form onSubmit={handleSubmit}>
              <InputField
                name="planName"
                placeholder="Give a name"
                value={formData.planName}
                onChange={handleTextChange}
              />
              <label className="label cursor-pointer">
                <span className="label-text">Dynamic plan</span>
                <input
                  type="checkbox"
                  name="isDynamic"
                  className="toggle"
                  onChange={handleTextChange}
                />
              </label>
              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
