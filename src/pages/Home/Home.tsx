import HeroCarousel from "../../components/HeroCarousel/HeroCarousel"
import HomeProductList from "../../components/HomeProuductList/HomeProductList"

const Home = () => {
  return (
    <div>
       <HeroCarousel />

       <div className="mb-5 p-8">
          <span className="font-bold inline-block text-5xl max-w-[200px] border-b-4 border-black pb-2">Latest Products</span>
       </div>

         <div className="p-8">
             <HomeProductList />
         </div>

    </div>

  
  )
}

export default Home
