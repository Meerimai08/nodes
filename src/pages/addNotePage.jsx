import { useEffect, useState } from "react";
import { useContext } from "react";
import Context from "../context";
import Header from "../components/header/header";
import { Flex, Input } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";
function AddNotePage() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [add, setAdd] = useState();

  const { date, setDate } = useContext(Context);

  const { search } = useLocation();
  const param = new URLSearchParams(search);
  const id = param.get(`editNav`);

  useEffect(() => {
    if (id) {
      const prod = date.find((el) => el.id == id);
      setAdd(prod);
      setTitle(prod.title);
      setValue(prod.text);
    }
  }, []);

  function addDate() {
    if (id) {
      const editInfo = {
        ...add,
        text: value,
        title,
      };

      const newInfo = date.map((el) => (el.id == id ? editInfo : el));

      setDate(newInfo);
    } else {
      const quillInfo = {
        id: new Date().getTime(),
        date: new Date().toLocaleString(),
        title,
        text: value,
      };
      setDate((prevDate) => [...prevDate, quillInfo]);
    }
  }
  return (
    <div>
      <Header />
      <div className="container" style={{ margin: "0 auto" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault(), addDate();
          }}
        >
          <Flex
            vertical
            align="center"
            style={{ maxWidth: 300, marginLeft: 600, padding: 50 }}
          >
            <Input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Заголовок"
              style={{ width: 300, height: 50 }}
              className="title"
            />
            <Flex justify="center" style={{ padding: "50px 0" }}>
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                className="text"
              />
            </Flex>
          </Flex>

          <button className="btn" style={{ marginLeft: 700 }} type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNotePage;
