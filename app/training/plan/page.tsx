"use client";
import { InputField } from "@/components/InputField";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import axios from "axios";

type NewPlan = {
  text: string;
  isDynamic: boolean;
};

export default function PlanPage() {
  const [text, setText] = useState<string>("");
  const [isDynamic, setDynamic] = useState(false);
  const ref = useRef(null);

  const {
    mutate: createPlan,
    isLoading,
    isSuccess,
    isError,
    data,
  } = useMutation({
    mutationFn: async (newPlan: NewPlan) => {
      const result = await axios.post("/api/training/ojhjoklhb", newPlan);
      console.log({ result });
      return result;
    },
    onSuccess: () => {
      (ref.current as any)?.close();
    },
  });

  console.log({ isLoading, isSuccess, data });

  const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.target.value;
    setText(value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    console.log("submit", { text, isDynamic });
    e.preventDefault();
    createPlan({ text, isDynamic });
  };

  return (
    <div>
      <button
        className="btn absolute bottom-24 right-5 rounded-full hover:bg-white"
        onClick={() => (ref.current as any)?.showModal()}
      >
        +
      </button>
      <dialog ref={ref} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Create a plan</h3>
          <div className="modal-action">
            <form method="dialog" onSubmit={handleSubmit}>
              <InputField
                name="planName"
                placeholder="Give a name"
                value={text}
                onChange={handleTextChange}
              />
              <label className="label cursor-pointer">
                <span className="label-text">Dynamic plan</span>
                <input
                  type="checkbox"
                  name="isDynamic"
                  className="toggle"
                  checked={isDynamic}
                  onChange={() => setDynamic((prev) => !prev)}
                />
              </label>
              {isError ? <p>Elbasztad 🖕</p> : null}
              <div
                className="btn m-2"
                onClick={() => (ref.current as any)?.close()}
              >
                Close
              </div>
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
