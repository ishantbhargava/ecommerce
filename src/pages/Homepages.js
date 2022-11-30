import Slider from "../components/slider/Slider";
import Navbar from "../components/navigation/Navbar";

export function Homepage(){
    return (
    <div>
    
    <Navbar/>
    <img className="img-rd" alt="section " src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-lastfewhours-1440x128%20-%204.jpg"/>
    <Slider/>
    </div>
    )
}