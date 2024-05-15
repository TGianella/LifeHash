import {Arrow} from "./Arrow.jsx";
import {TextBox} from "./TextBox.jsx";
import {bitStreamToBase64} from "./bitStreamToBase64.js";

export const BitsToHash = ({resultBits}) => {
    return (
        <div className="password-bits b">
            <TextBox className="digest" title="Digest">{resultBits && resultBits.length ? bitStreamToBase64(resultBits.split('')) : '' }</TextBox>
            <Arrow direction="up" />
            <TextBox title="Hashed bits">{resultBits && resultBits.length ? resultBits : ''}</TextBox>
            <Arrow direction="up" />
        </div>
    )
}