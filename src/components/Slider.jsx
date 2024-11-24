import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const images = [
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/3bb69abb-8f0d-4e59-ab7d-2a4158f60b8b.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/1d80fa5a-6050-469d-9e86-2f5230d2ee6a.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/b2905957-4319-412d-bd99-59f3e37ba26d.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/d0a8c8d2-d194-48be-a611-b2b2e0cfe6b4.webp",
];

const sm_images = [
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/0fcc8c45-c553-43b8-8ca5-7686af3518ed.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/5b63250e-ecf4-41b6-ad2f-4f3173994984.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/3f7779b1-e9c3-407c-b4cf-1983f20d320a.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/f2f9238d-d104-4636-92d5-a1d0420e9751.webp"
]



export default function Slider() {
    const buttonStyle = {
        padding: "10px",
        borderRadius: "50%",
        background: "white",
        opacity: 1,
        fontSize: "20px",
    };

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <>
        <AutoplaySlider
            className="md:w-[1360px] md:h-[205px] lg:h-[348px] rounded-md w-[0px] h-[0px] pt-6"
            organicArrows={false}
            buttonContentRight={<p style={buttonStyle} className="text-black font-bold"><MdNavigateNext /></p>}
            buttonContentLeft={<p style={buttonStyle} className="text-black font-bold "><GrFormPrevious /></p>}
            play = {true}
            cancelOnInteraction={false}
            interval={3000}
            bullets= {false}
        >
            
            {images.map((src, index) => (
                <div key={index}>
                    <img src={src} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </AutoplaySlider>
        <AutoplaySlider
            className="w-[425px] h-[160px]  rounded-md md:w-[0px] md:h-[0px]"
            organicArrows={false}
            buttonContentRight={<p style={buttonStyle} className="text-black font-bold"><MdNavigateNext /></p>}
            buttonContentLeft={<p style={buttonStyle} className="text-black font-bold "><GrFormPrevious /></p>}
            play = {true}
            cancelOnInteraction={false}
            interval={3000}
            bullets= {false}
        >
            
            {sm_images.map((src, index) => (
                <div key={index}>
                    <img src={src} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </AutoplaySlider>
        </>
        
    );
}
