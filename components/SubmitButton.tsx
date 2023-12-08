type SubmitButtonProps = {
  label: string
  type?: string
}
const SubmitButton = ({ label, type }: SubmitButtonProps) => {
  return (
    <button
      className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
      style={{
        background: 'linear-gradient(to right, #1d4b6a, #5ba7db, #328ecc, #0099FF)',
      }}
      type="submit"
    >
      {label}
    </button>
  )
}

export default SubmitButton
