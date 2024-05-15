import {Arrow} from "./Arrow.jsx";
import {TextBox} from "./TextBox.jsx";
import {bitStreamToBase64} from "./bitStreamToBase64.js";

export const BitsToHash = ({hashBits}) => {
    const digest = bitStreamToBase64(hashBits)

    return (
        <div className="password-bits b">
            <TextBox>{digest}</TextBox>
            <Arrow direction="up" />
            <TextBox>{hashBits.join('')}</TextBox>
            <Arrow direction="up" />
        </div>
    )
}