import Banner from "@/components/Banner";
import ProductCard from "@/components/Product";
import img1 from '/public/img1.jpg'
import img2 from '/public/img2.jpg'
import img3 from '/public/img3.jpg'
import FootBanner from "@/components/FootBanner";

export default function Home() {
  return (
    <section className="w-[90%] md:w-[75%] lg:w-[70%] mx-auto">
      <Banner/>
      <div className="mt-8">
        <h1 className="font-extrabold py-1 text-5xl text-center">Best Seller Products</h1>
        <p className="text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti voluptatum ipsa alias dignissimos eaque.</p>
        <div className="grid grid-cols-2 py-3 gap-3 md:gap-8 md:grid-cols-3 mt-9 lg:grid-cols-4">
          <ProductCard />
        </div>
      </div>
      <FootBanner/>
    </section>
  );
}
