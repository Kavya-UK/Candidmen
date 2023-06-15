import React from 'react'
import Label from './LabelComponent';
import ErrorMessage from './ErrorMessage';

export default function InputSelect({ type, placeholder, label, name, errorMessage }) {
  return (
    <div>
      {label ? (
        <Label label={label} labelFor={name} labelColor="text-black" />
      ) : null}
      <select
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        className="w-full border-b-2 rounded-[8px] border-solid border-black outline-none	placeholder-grayShade"
      />
      <ErrorMessage errorFor={name} errorMessage={errorMessage} />
    </div>
  );
}
