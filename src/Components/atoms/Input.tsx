interface InputProps {
    inputType: string;
    placeholder?: string;
    value?: string | number;
    isDisabled?: boolean;
    id: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({inputType, id, placeholder, isDisabled, onChange})=>{
  return (<input 
    className="border border-gray-400 p-2 "
    type={inputType}
    placeholder={placeholder}
    disabled={isDisabled}
    onChange={onChange}
    id={id}
  ></input>);
};

export default Input;