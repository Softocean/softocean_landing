import React from 'react';

interface TagProps {
  label: string;
}

function Tag({ label }: TagProps) {
  return (
    <div className="flex items-center justify-center rounded-full border border-dark-as-night px-3 py-2 md:px-5 md:py-3">
      <span className="font-nunito text-body-2-mobile font-semibold md:text-body-2">{label}</span>
    </div>
  );
}

export default Tag;
