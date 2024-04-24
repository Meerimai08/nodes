import { useContext } from "react";
import Context from "../context";
import { Button, Card, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/header";

function NoteList() {
  const nav = useNavigate();

  const { date, setDate } = useContext(Context);
  console.log(date);

  function clickHandler(id, e) {
    e.stopPropagation();
    nav(`/add/note/page?editNav=${id}`);
  }

  function clickedNote(id) {
    nav(`/note/page/${id}`);
  }
  function deleteBtn(id, e) {
    e.stopPropagation();
    const deleteButton = date.filter((el) => el.id !== id);
    setDate(deleteButton);
  }

  return (
    <div>
      <Header />
      <div className="container" style={{ margin: "0 auto" }}>
        <Flex
          justify="center"
          align="center"
          gap={30}
          style={{ margin: "100px 0 0 0" }}
        >
          {date.map((el) => (
            <Card
              key={el.id}
              hoverable
              style={{ width: 240 }}
              onClick={() => clickedNote(el.id)}
            >
              <Card.Meta
                title={el.title}
                style={{ marginLeft: "50px", fontSize: "15px" }}
              />
              <Button
                style={{
                  margin: "20px 0 0 30px",
                }}
                onClick={(e) => clickHandler(el.id, e)}
              >
                Edit
              </Button>
              <Button
                danger
                onClick={(e) => deleteBtn(el.id, e)}
                style={{ marginLeft: "20px" }}
              >
                Delete
              </Button>
            </Card>
          ))}
        </Flex>
      </div>
    </div>
  );
}

export default NoteList;
