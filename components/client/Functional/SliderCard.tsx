'use client'

export const LEFT_CARD = 0;
export const CENTRE_CARD = 1;
export const RIGHT_CARD = 2;
interface sliderCardConfig {
    cardPosition: 0 | 1 | 2,

}
const SliderCard = ({ cardPosition }: sliderCardConfig) => {
    return (
        <div></div>
    )
}


export default SliderCard;