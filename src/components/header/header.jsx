import { Flex } from "antd";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container" style={{ margin: "0 auto" }}>
      <div className="header-content">
        <Flex
          justify="center"
          gap={50}
          style={{
            fontSize: "20px",
            padding: "40px 0 0 0",
          }}
        >
          <Link to="/">NoteList</Link>
          <Link to="/add/note/page">AddNotePage</Link>
        </Flex>
      </div>
    </div>
  );
}

export default Header;
