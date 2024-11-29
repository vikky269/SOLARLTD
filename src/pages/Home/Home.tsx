import HeroCarousel from "../../components/HeroCarousel/HeroCarousel"
import HomeProductList from "../../components/HomeProuductList/HomeProductList"

const Home = () => {
  return (
    <div>
       <HeroCarousel />

       <div className="mb-5 p-8">
          <span className="font-bold text-5xl border-b-4 border-black pb-4">Latest Products</span>
       </div>

         <div className="p-8">
             <HomeProductList />
         </div>

    </div>

  
  )
}

export default Home
