import Text from "../atoms/Text";
import ButtonURL from "../atoms/ButtonURL";
import { Link } from "react-router-dom";
import UserRegister from "../molecules/UserRegister";

function Register() {
  return (
    <>
      <Text text="Register Page" />
<div className="border-2 border-gray-300 rounded-lg p-4 max-w-md mx-auto mt-13">
<UserRegister/>
</div>
<div className="flex justify-center items-center mt-4">
      <Link to="/">
        <ButtonURL label="Go to Home"/>
      </Link>
</div>
    </>
  );
}
export default Register;
