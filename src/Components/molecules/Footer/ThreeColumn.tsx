import TwoText from "../../atoms/Two_Title";
import Text from "../../atoms/Text";

function ThreeColumn() {
    return (
            <div>
                <TwoText text="My Account" />
                <ul className="list-disc pl-5 space-y-2">
                
                <li>
                    <a>
                    <Text text="Home" />
                    </a>
                </li>
                <li>
                    <a>
                    <Text text="Our Shop" />
                    </a>
                </li>
                <li>
                    <a>
                    <Text text="Shop Detail" />
                    </a>
                </li>
                <li>
                    <a>
                    <Text text="Shopping Cart" />
                    </a>
                </li>
                <li>
                    <a>
                    <Text text="Checkout" />
                    </a>
                </li>
                <li>
                    <a>
                    <Text text="Contact Us" />
                    </a>
                </li>
</ul>
            </div>
    );
}
export default ThreeColumn;