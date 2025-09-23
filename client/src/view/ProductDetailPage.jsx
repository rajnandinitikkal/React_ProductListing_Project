import productsData from "../data/products.json";
import { useParams } from "react-router-dom";
import Footer from "../component/footer";
import "../Styles/ProductDetailPage.css"

function ProductDetailPage(props) {
  const { productId } = useParams();
  const product = productsData.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <div>
        <div className="productDetailPage">
          <div className="productDetailPageImage">
            <img src={product.imgUrl} alt={product.name} />
          </div>
          <div className="productDetailPageInformation">
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <p>{product.category}</p>
              <p>{product.Rating}</p>
          </div>
            <button className="addtobagbutton">Add To Bag</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetailPage;
