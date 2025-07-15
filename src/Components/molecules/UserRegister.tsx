import { useEffect, useRef, useState } from "react";
import ButtonURL from "../atoms/ButtonURL";
import Input from "../atoms/Input";

interface FieldsType {
    type: string;
  placeholder?: string;
  isDisabled?: boolean;
  id: string; 
}
function UserRegister (){
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
      placeholder: "Ingrese su nombre",
      isDisabled: false,
      id: "name",
    },
    {
      type: "text",
      placeholder: "Ingrese su apellido",
      isDisabled: false,
      id: "name",
    },
        {
      type: "text",
      placeholder: "Ingrese su correo",
      isDisabled: false,
      id: "name",
    },
    {
      type: "number",
      placeholder: "Ingrese su edad",
      isDisabled: false,
      id: "age",
    },
    {
      type: "password",
      placeholder: "Ingrese ",
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
    <div className="flex flex-col items-center justify-center gap-4">
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
      <ButtonURL onClick={() => setIsButtonClick(true)}>
        Registrar
      </ButtonURL>
      </div>
    </>      
      )}
    </>
  );
}

export default UserRegister;