import one from "../assert/images/perfumy1.jpg"
import two from "../assert/images/perfumy-2.jpg"
import three from "../assert/images/perfumy3.jpg"

//product component
function Products() {
  return (
    <div className="product-container">
      <div className="box">
        <img src={one} alt="perfume-image1" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="box">
        <img src={two} alt="perfume-image2" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div >
      <div className="box">
        <img src={three} alt="perume-image3" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div >
    </div >
  )
}

export default Products
