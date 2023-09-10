import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from '../components/Elements/Button/index'

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "https://source.unsplash.com/1200x800?shoes",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            dolorem consequuntur molestias iusto at exercitationem fuga aperiam
            maiores laborum soluta eligendi non illo minus, eos odit id
            deserunt, aut a!`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 1.570.000",
    image: "https://source.unsplash.com/1200x800?shoes",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    name: "Sepatu Adidas",
    price: "Rp 2.000.000",
    image: "https://source.unsplash.com/1200x800?shoes",
    description: `Ini adalah sepatu baru dari brand Adidas.`,
  },
];

const email =localStorage.getItem('email');

const ProductsPage = () => {
    const handleLogout = () => {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      window.location.href = "/login";
    }

    return (
      <Fragment>
        <div className="flex justify-end items-center h-20 bg-blue-600 text-white px-10">
          {email}
          <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
        </div>
        <div className="flex justify-center py-5">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} />
            </CardProduct>
          ))}
        </div>
      </Fragment>
    );
}

export default ProductsPage;