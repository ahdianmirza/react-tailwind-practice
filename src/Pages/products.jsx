import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
    return (
      <div className="flex justify-center items-center py-5">
        <CardProduct>
          <CardProduct.Header image="https://source.unsplash.com/1200x800?shoes" />
          <CardProduct.Body title="Sepatu Baru">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            dolorem consequuntur molestias iusto at exercitationem fuga aperiam
            maiores laborum soluta eligendi non illo minus, eos odit id
            deserunt, aut a!
          </CardProduct.Body>
          <CardProduct.Footer price="Rp 1.000.000" />
        </CardProduct>
        <CardProduct>
          <CardProduct.Header image="https://source.unsplash.com/1200x800?shoes" />
          <CardProduct.Body title="Sepatu Baru">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            dolorem consequuntur molestias iusto at exercitationem fuga aperiam
            maiores laborum soluta eligendi non illo minus, eos odit id
            deserunt, aut a!
          </CardProduct.Body>
          <CardProduct.Footer price="Rp 1.000.000" />
        </CardProduct>
      </div>
    );
}

export default ProductsPage;