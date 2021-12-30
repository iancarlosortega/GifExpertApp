import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ( { category } ) => {

    const {data:images} = useFetchGifs( category );

    return (

        <>
            <h3>{category}</h3>
            <div className="card-grid ">

                { images.map( image => {
                    return <GifGridItem key={image.id} {...image} />
                })} 

            </div>
        </>
      
    )
}

export default GifGrid
