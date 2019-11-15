import React from "react";
import Router, { useRouter } from "next/router";
import { Container, Row, Button, Col } from "reactstrap";

const StellarSystem = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Container>
      <Row>
        <Button>Back</Button>
        <Col className="text-center"><h1>{name}</h1></Col>
      </Row>
    </Container>
  );
};

StellarSystem.getInitialProps = async function ({ isServer, res, query }: any) {
  
  const stellarClass: string = query.class as string;

  return {  };
};

export default StellarSystem;
