import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Button, DropdownButton, Dropdown } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/cjy0207/hnm-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} width={300} />
        </Col>

        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.new === true ? "Conscious choice" : ""}</div>
          <DropdownButton id="dropdown-basic-button" title="size">
            <Dropdown.Item href="#/action-1">{product?.size[0]}</Dropdown.Item>
            <Dropdown.Item href="#/action-1">{product?.size[1]}</Dropdown.Item>
            <Dropdown.Item href="#/action-1">{product?.size[2]}</Dropdown.Item>
          </DropdownButton>
          <Button variant="dark" className="add-button">추가</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
