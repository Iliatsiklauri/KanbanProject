import React from 'react';

export default function AddTaskButton({ disabled }: { disabled?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="32"
      viewBox="0 0 48 32"
      fill="none"
      opacity={disabled ? 0.25 : 1}
      className="md:hidden cursor-pointer"
    >
      <rect width="48" height="32" rx="16" fill="#635FC7" />
      <path
        d="M25.368 22V17.344H30V14.632H25.368V10H22.656V14.632H18V17.344H22.656V22H25.368Z"
        fill="white"
      />
    </svg>
  );
}
