import { useEffect, useRef, useState } from "react";
import ButtonURL from "../atoms/ButtonURL";
import Input from "../atoms/Input";
import { Link } from "react-router-dom";
import Image from "../atoms/Img";
import login from "../../image/login.png";

interface FieldsType {
    type: string;
  placeholder?: string;
  isDisabled?: boolean;
  id: string; 
}
function Login (){
      const [form, setForm] = useState({
    name: "",
    age: 0,
    password: "",
    selectedValue: "",

  });

  const handleChange = (field: string, value: string) => {
  setForm((prevForm) => ({
    ...prevForm,
    [field]: value,
  }));
};


  const [isButtonClick, setIsButtonClick] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
 useEffect(() => {
    console.log("Se envió registro formulario");
    //setIsButtonClick(true);
  }, [form]);
  
const fields: FieldsType[] = [
        {
      type: "text",
      placeholder: "Email",
      isDisabled: false,
      id: "name",
    },

    {
      type: "password",
      placeholder: "Password ",
      isDisabled: false,
      id: "password",
    },
  ];

  return (
     <>
      {isButtonClick ? (
        <p>Formulario enviado</p>
      ) : (
    <>
    
    <div className="flex flex-col items-center justify-center gap-4 border-black-100 border-2 p-4 rounded-lg">
     <Image width={200} src={login} />
      {fields.map((field) => (
        <Input
              key={field.id}
              inputType={field.type}
              isDisabled={field.isDisabled}
              placeholder={field.placeholder}
              ref={inputRef}
              onChange={(e) => {
                console.log("type", e);
                handleChange(field.id, e.target.value);
              }}
              id={field.id}
        />
      ))}
      <ButtonURL onClick={() => setIsButtonClick(true)} label="Ingresar"/>
        <Link to="/Homepages">
            <ButtonURL label="Home" />
        </Link>
      </div>
    </>      
      )}
    </>
  );
}

export default Login;