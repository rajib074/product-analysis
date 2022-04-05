import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <section className="blog-area">
      <Container>
        <Row>
          <Col md={12}>
            <h1>What is Context API?</h1>
            <p>
              Context API Is the New Feature In React App. Earlier React Version
              16.3 React First Introduce Context API. We Know That how match we
              provides a props to declare our child component. It's Say "prop
              drilling" or moving props from parent child to child component.
              This is where we can slow down our application and cause
              development issues...
            </p>
          </Col>
          <Col md={12}>
            <h1>What Is Semantic Tag ?</h1>
            <p>
              Semantic Tag or HTML elements are those that clearly describe
              their meaning in a Developer and Browser readable way. Semantic
              Tag such as <code>header</code>, <code>footer</code> and{" "}
              <code>article</code> are all considered semantic because they
              accurately describe the purpose of the element and the type of
              content that is inside them. When using semantic tags that
              meanings it's not only a presentation purposes, be careful that
              you don't use them incorrectly simply for their common display
              properties. According to W3C's HTML documentation: "A section is a
              thematic grouping of content, typically with a heading..."
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
