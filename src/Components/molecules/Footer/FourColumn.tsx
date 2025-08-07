import TwoText from "../../atoms/Two_Title";
import Text from "../../atoms/Text";
import Input from "../../atoms/Input";

function FourColumn() {
    return (
            <div>
                <TwoText text="Newsletter" />
                <Text text="Duo stet tempor ipsum sit amet magna ipsum tempor est" />
                <Text text="Follow Us" />
                <Input type="text" className="border p-2 w-full mb-2" placeholder="Your Name" />
            </div>
    );
}
export default FourColumn;