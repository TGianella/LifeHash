import {Arrow} from "./Arrow.jsx";
import {TextBox} from "./TextBox.jsx";
import {bitStreamToBase64} from "./bitStreamToBase64.js";

export const BitsToHash = ({resultBits}) => {
    return (
        <div className="password-bits b">
            <TextBox>{resultBits && resultBits.length ? bitStreamToBase64(resultBits.split('')) : 'Digest' }</TextBox>
            <Arrow direction="up" />
            <TextBox>{resultBits && resultBits.length ? resultBits : 'Bits'}</TextBox>
            <Arrow direction="up" />
        </div>
    )
}