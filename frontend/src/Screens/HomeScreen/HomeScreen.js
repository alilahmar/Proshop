import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../../Components/Product/Product";
import { listProducts } from "../../Redux/Actions/productActions";
import Message from "../../Components/messages/Message";
import Loader from "../../Components/loader/Loader";
import Paginate from "../../Components/Paginate/Paginate";
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";

const HomeScreen = ({ match }) => {
  // check for the keyword in searchBox
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;
  console.log("ali", products);

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
    // keyword as dependency to be changed everyTime
  }, [dispatch, keyword, pageNumber]);
  return (
    <>
      {!keyword && <ProductCarousel />}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>

          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
