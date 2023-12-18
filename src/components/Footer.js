import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Container style={{ padding: "3rem" }}>
      <p className="float-right">
        <a href="#">Back to top</a>
      </p>
      <p>
        Album example is © Bootstrap, but please download and customize it for
        yourself!
      </p>
      <p>
        New to Bootstrap?{" "}
        <a href="https://getbootstrap.com/">Visit the homepage</a> or read our{" "}
        <a href="/docs/4.4/getting-started/introduction/">
          getting started guide
        </a>
        .
      </p>
    </Container>
  );
}
