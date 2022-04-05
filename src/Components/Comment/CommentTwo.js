import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useComment from "../../hooks/useComment";
import "./Comment.css";
import CommentList from "../CommentList/CommentList";

const CommentTwo = () => {
  const [Comments, setComments] = useComment();

  return (
    <section className="Comment-area">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-center mb-5">
              Total Customer Comment {Comments.length}
            </h2>
            <div className="grid grid-col-3 gap-50">
              {Comments.map((Comment) => (
                <CommentList key={Comment.id} Comment={Comment}></CommentList>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CommentTwo;
