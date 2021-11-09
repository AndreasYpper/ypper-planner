import React from "react";

export default function Todo({ name, complete }) {
  const [checked, setChecked] = React.useState(complete);
  return (
    <div className="flex mb-8">
      <div className="w-1/4 h-12">{name}</div>
      <div className="w-1/2 h-12">
        <div className="md:w-2/3 block text-gray-500 font-bold">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span className="text-sm">Complete</span>
        </div>
      </div>
    </div>
  );
}
