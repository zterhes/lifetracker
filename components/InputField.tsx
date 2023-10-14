import React, { InputHTMLAttributes, useState } from "react";

type Props = {
  name: string;
  label?: string;
  placeholder: string;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const InputField: React.FC<Props> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="w-full max-w-xs">
      {label ? (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      ) : (
        ""
      )}
      <input
        type="text"
        name="planName"
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
