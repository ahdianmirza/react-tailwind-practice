import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from '../components/Elements/Button/index';

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image: "https://source.unsplash.com/1200x800?shoes",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            dolorem consequuntur molestias iusto at exercitationem fuga aperiam
            maiores laborum soluta eligendi non illo minus, eos odit id
            deserunt, aut a!`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: 1570000,
    image: "https://source.unsplash.com/1200x800?shoes",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    name: "Sepatu Adidas",
    price: 2000000,
    image: "https://source.unsplash.com/1200x800?shoes",
    description: `Ini adalah sepatu baru dari brand Adidas.`,
  },
];

const email =localStorage.getItem('email');

const ProductsPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    useEffect(() => {
      if (cart.length > 0) {
        const sum = cart.reduce((acc, item) => {
          const product = products.find((product) => product.id === item.id);
          return acc + product.price * item.qty;
        }, 0);
        setTotalPrice(sum);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }, [cart]);

    const handleLogout = () => {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      window.location.href = "/login";
    };

    const handleAddToChart = (id) => {
      if (cart.find((item) => item.id === id)) {
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
      } else {
        setCart(
          [...cart, {id, qty: 1}]
        );
      }
    }

    return (
      <Fragment>
        <div className="flex justify-end items-center h-20 bg-blue-600 text-white px-10">
          {email}
          <Button classname="ml-5 bg-black" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        <div className="flex justify-center py-5">
          <div className="w-4/6 flex flex-wrap">
            {products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.name}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToChart={handleAddToChart}
                />
              </CardProduct>
            ))}
          </div>
          <div className="w-2/6">
            <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
            <table className="text-left table-auto border-separate border-spacing-3">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );

                  return (
                    <tr key={item.id}>
                      <td>{product.name}</td>
                      <td>
                        Rp{" "}
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        Rp{" "}
                        {(product.price * item.qty).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={3}>
                    <b>Total Price</b>
                  </td>
                  <td>
                    <b>
                      Rp{" "}
                      {totalPrice.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <div className="mt-5">
          <Counter></Counter>
        </div> */}
      </Fragment>
    );
}

export default ProductsPage;