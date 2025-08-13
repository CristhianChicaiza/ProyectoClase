interface ButtonProps {
   onClick?: () => void;
    label: string;
    url?: string;
    type?: "button" | "submit" | "reset" | undefined;    
}

function ButtonURL({label = "Click", type='submit', onClick} : ButtonProps) {
    const baseStyle = "py-2 px-20 max-w-2xs flex justify-center items-center hover:bg-yellow-600 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg";
    const variant = type === 'submit' ? `bg-yellow-400`: `bg-red-600`;
  return (
    <button
      type={type}
      onClick={onClick}
      className= {`${variant} ${baseStyle}`}>
      {label}
    </button>
  );
}

export default ButtonURL;