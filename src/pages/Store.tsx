import React from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

import storeItems from "../data/items.json"

export function Store() {
    return (<>
        <h1>Store</h1>
        <Row> 
            {storeItems.map((item, index) => (
                <Col key={index}>
                    <StoreItem {...item}  />
                </Col>
            ))}
        </Row>
    </>)
}