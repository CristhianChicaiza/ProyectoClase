import TwoText from "../../atoms/Two_Title";
import Text from "../../atoms/Text";

function OneColumn() {
    return (
            <div>
                <TwoText text="Quick Shop" />
                <ul className="list-disc pl-5 space-y-2">
                
                <li>
                    <a href="#">
                    <Text text="Home" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <Text text="Our Shop" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <Text text="Shop Detail" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <Text text="Shopping Cart" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <Text text="Checkout" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <Text text="Contact Us" />
                    </a>
                </li>
</ul>
            </div>
    );
}
export default OneColumn;