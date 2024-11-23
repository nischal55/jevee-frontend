import BrandOfTheHour from "../components/BrandOfTheHour";
import BrandOfThisSeason from "../components/BrandOfThisSeason";
import BrandsForYou from "../components/BrandsForYou";
import CategorySection from "../components/CategorySection";
import ExploreGadgetsAndAccesories from "../components/ExploreGadgetsAndAccesories";
import MostSearchedProducts from "../components/MostSearchedProducts";
import ProductDisplay from "../components/ProductDisplay";
import ResponsiveBanner from "../components/ResponsiveBanner";
import Slider from "../components/Slider";
import products from "../data/product";
export default function Home() {
  return (
    <div className="bg-[#F2F2F2] ">
      <div className="w-[90%] mx-auto">
        <Slider/>
        <CategorySection/>
        <BrandOfTheHour />
        <ProductDisplay
          href={"/"}
          title={"Bored ? Try some Board games!"}
          products={products}
        />
        <ProductDisplay
          href={"/"}
          title={"13.11 Best Sellers - Gadgets & Appliances"}
          products={products}
        />
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
        <ResponsiveBanner
          smallImage="https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/c9008dc0-5d32-44d5-97f4-21c7aeb791fb.webp"
          largeImage="https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/b06e733b-4e25-4691-8ec5-80ae8b0afe94.webp"
          aspectRatio="3.73 / 1"
          className=""
          altText="Responsive Featured Banner"
        />
        <ResponsiveBanner
          smallImage="https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/9071b97b-bdd4-41c0-847b-e8bf4d19825e.webp"
          largeImage="https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/1b23f65c-06a5-4040-bb09-9b6763301f4a.webp"
          aspectRatio="3.73 / 1"
          className=""
          altText="Responsive Featured Banner"
        />
        <ResponsiveBanner
          smallImage="https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/226b9ffc-db2e-4bcb-b07e-81bba4c1bb1e.webp"
          largeImage="https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/85c1df51-1e40-44e0-9bfa-eb45943256c0.webp"
          aspectRatio="3.73 / 1"
          className=""
          altText="Responsive Featured Banner"
        />
        <BrandsForYou />
        <ExploreGadgetsAndAccesories
          href={"/"}
          title={"Explore Gadgets and Accessories"}
          products={products}
        />
      </div>
    </div>
  );
}
