import BrandOfTheHour from "../components/BrandOfTheHour";
import BrandOfThisSeason from "../components/BrandOfThisSeason";
import MostSearchedProducts from "../components/MostSearchedProducts";
import ProductDisplay from "../components/ProductDisplay";
import ResponsiveBanner from "../components/ResponsiveBanner";
import products from "../data/product";
export default function Home() {
  return (
    <>
      <h1 className="text-slate-800 md:text-orange-600 lg:text-indigo-600">THis is Home page</h1>
      <div className="w-[90%] mx-auto">

      <BrandOfTheHour />
      <ProductDisplay href={"/"} title={"Bored ? Try some Board games!"} products={products} />
      <ProductDisplay href={"/"} title={"13.11 Best Sellers - Gadgets & Appliances"} products={products} />
      <ResponsiveBanner
        smallImage="https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/53a596a7-e38f-492f-8b36-689ad61a9436.jpg"
        largeImage="https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/e00d8e53-fab7-47ba-ac7b-443b4a776980.jpg"
        aspectRatio="3.73 / 1"
        className=""
        altText="Responsive Featured Banner"
      />
      <ProductDisplay href={"/"} title={""} products={products} />
      <ResponsiveBanner
        smallImage="https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/b78c4af2-a4a5-42d9-9dd8-aaf11e426b94.webp"
        largeImage="https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/32d15921-884b-4a40-8ac6-53ce6f70e6a5.webp"
        aspectRatio="3.73 / 1"
        className=""
        altText="Responsive Featured Banner"
      />
      <BrandOfThisSeason />
<MostSearchedProducts />
      </div>
    </>
  )
}
