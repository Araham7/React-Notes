import CarCard from "./CarCard";
import ImageCard from "./ImageCard";


const App = () => {
  return (
    <>
    {/* (1). */}
      <ImageCard txt="Araham Abeddin" img="https://images.pexels.com/photos/28714404/pexels-photo-28714404/free-photo-of-honey-drizzle-from-wooden-dipper-on-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="300" alt="This is honey photo!" />

    {/* (2). */}
      <ImageCard txt="Forest image" img="https://images.pexels.com/photos/29187003/pexels-photo-29187003/free-photo-of-couple-strolling-through-a-vibrant-autumn-forest.jpeg" width="400" alt="This is Forest image!"/>
      <ImageCard />

      {/* (3). */}
      <ImageCard txt="Sea beach" img="https://images.pexels.com/photos/28988215/pexels-photo-28988215/free-photo-of-surfer-at-sunset-on-ipanema-beach-rio-de-janeiro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="500" alt="This is sea beach image!"/>
      <ImageCard />

      {/* (4). */}
      <ImageCard txt="Lemon juice" img="https://images.pexels.com/photos/17525263/pexels-photo-17525263/free-photo-of-peach-juice-in-glasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="300" alt="Lemon juice!"/>
      <ImageCard />

      {/* (5). */}
      <CarCard
      name="Tesla Model S" 
      color="Red" 
      price="$79,990" 
      src="https://images.pexels.com/photos/26957121/pexels-photo-26957121/free-photo-of-tesla.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      width="300" 
      alt="Tesla Model S"
      />

    </>
  )
}

export default App;


