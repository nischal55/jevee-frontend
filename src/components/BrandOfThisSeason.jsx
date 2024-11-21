import React from 'react'
import { Link } from 'react-router-dom';

const BrandOfThisSeason = () => {
    const imageObjects = [
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/f89bb54c-ea29-42ef-a742-e98c1698c831.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/f23dfb90-0778-457c-9821-322f7d0a11ae.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/f5e3eaeb-a1d1-4635-a9db-37ff13a583b9.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/f1f3a93f-8109-415f-ab24-ba74f673b892.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/e0cb227d-bab7-46cd-bc4e-18d133dcf236.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/dc7b0401-88eb-4eb2-852a-881b28f97c27.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/d3eb4c09-0e28-4027-97fe-6bb64c983971.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/d0a702f7-c00a-413b-84a9-c00cff334b83.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/c9ddc012-4b0f-4286-85ea-5519cdd2e16d.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/c9d808f6-968a-4ac3-bb58-0f1eef23c497.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/bc3d72e8-d081-44dd-8d66-1cf4875818f1.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/ac80943a-11c4-400e-8a4e-4dd7681d3a08.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/a8a7e772-667b-41b3-ad4f-4a573d4d66e3.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/a1b0335b-ac47-4db4-9772-e59b0ab2aa3a.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/31827934-8ff5-4a44-b850-501ea67fa422.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/601156ef-dd43-4339-809e-8bf34597fde7.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/14045f5c-8b9b-4e70-9ca8-a8a945b5dc96.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/5924fe5e-3058-417b-ac31-ef597dba8651.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/917cec54-538a-44ad-a6c3-e9b7ad13e52e.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/529ba6ba-c971-4af7-90ac-c5be36ffd5d9.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/388c886c-443a-4387-8f25-ee9cc460d380.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/0346adea-f97f-4647-95f4-f60890b7767a.webpm", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/303c7325-5f9d-4612-9e58-3cf169ef7fb9.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/217fa0f1-f946-4144-96ab-ccd2d46d09d0.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/96c5d460-7b15-4965-a90d-714a31925f00.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/37c8f97c-3661-47d8-9b99-a2c3a17a3f28.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/21e8f662-8bc7-43e6-9061-d1673eb19592.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/18c3009d-17d7-479b-9e3f-eed5d3ccfff1.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/9e24b096-e54a-47da-9aed-c273e31e419b.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/8e64595a-4141-4c7d-bbe9-3ba80194d7c0.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/8be0a3c5-87a8-4f6f-8fb4-4cb86a9715dc.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/4e1aadfc-7fd4-4179-b4f4-eb7d4bcce7ce.webp", href: "/" },
        { img: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/3e86c743-6c95-4930-9d78-550ac20a89a0.webp", href: "/" },
      ];
      
  return (
    <div className='grid grid-cols-2 mb-8  items-center gap-4 justify-between md:grid-cols-4 '>
        {imageObjects.map((item, index) => (
            <Link to={item.href}  key={index} className="">
                <img src={item.img} alt="" />
            </Link>
        ))}
    </div>
  )
}

export default BrandOfThisSeason