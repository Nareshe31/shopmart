import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSearchParams,useLocation,useNavigate } from "react-router-dom";
import ProductList from "../ProductList/ProductList";

export const Search = (props) => {
  const [searchProducts, setsearchProducts] = useState([]);
  const [loading, setloading] = useState(true)

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const location=useLocation()
  const navigate=useNavigate()

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("/api/v1/searchProduct?query="+query);
        const data = await res.json();
        setsearchProducts(data.products);
        setloading(false)
      } catch (error) { }
    }
    getData();

    return () => { };
  }, [query]);

  if ( location.pathname==="/search" && (query==="" || query===null)) {
    navigate('/')
  }

  return (
    <main className="main__content">
      <ProductList
        loading={loading}
        products={searchProducts}
        title={"Search results for " + query}
      />
    </main>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
