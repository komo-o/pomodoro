import React from 'react'

interface ToggleProps {
  checked: boolean
  onChange: () => void
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
  return (
    <button
      type="button"
      className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none ${checked ? 'bg-blue-400' : 'bg-gray-300'}`}
      onClick={onChange}
      aria-pressed={checked}
    >
      <span className="sr-only">Toggle</span>
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform ${checked ? 'translate-x-7' : 'translate-x-1'}`}
      />
    </button>
  )
}

export default Toggle
