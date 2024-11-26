let categories = [
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/6e371faf-f6d0-448c-b4c2-ffb651bed399.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/a1f181d6-56e4-492a-a084-f03244bf936b.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/1c47e2a5-9518-4890-96f6-1b6bfd6fed51.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/e0258ad7-dfc6-4fda-a45f-5c09aecd7c12.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/5bff9cb8-5191-4632-8672-52e3dddb8494.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/d5ebd85c-15b0-4728-9809-99dce7911794.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/e1716312-c665-49a5-8044-c385ec09d426.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/8f5b0fa0-8151-4838-948e-1f6db201f8ea.webp"
]

import { Link } from "react-router-dom"
export default function CategorySection() {
    return (
        <>
            <Link>
                <div className=" grid grid-cols-4 lg:grid-cols-8 lg:gap-6 lg:my-[40px] my-2">
                    {categories.map((category) => {
                        return (
                            <>
                                <img src={category} alt="" />
                            </>
                        )
                    })}
                </div>
            </Link>
        </>
    )
}
