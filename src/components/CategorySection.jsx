let categories = [
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/3a018d90-7940-48fe-bd5d-bf8ae926aa61.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/8ac73169-c32e-4312-bb88-37081567cc26.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/5436fd7f-a9c4-4662-ba7a-6495649b0bbb.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/d38617db-607c-4949-bf22-82c830d5aaf2.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/e8eb555d-1954-453e-a910-d24618377afa.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/a963c045-9987-4309-b06c-e4135b8611e3.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/12b5467c-9b0b-42c9-a2eb-f9b25da1dc99.webp",
    "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/b999dafe-ac05-4635-9d93-df7e7d5f5f35.webp"
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
