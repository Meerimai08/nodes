import { useParams } from "react-router-dom";
import Header from "../components/header/header";
import { useContext, useEffect, useState } from "react";
import Context from "../context";
import parse from "html-react-parser";
function NotePage() {
  const [state, setState] = useState({});
  const { id } = useParams();
  const { date } = useContext(Context);

  useEffect(() => {
    const newDate = date.find((el) => el.id == id);
    setState(newDate);
  }, []);

  console.log(state);
  return (
    <div className="container" style={{ margin: "0 auto" }}>
      <Header />
      <div className="notePage">
        {/* <h1 className="title">{parse(state.title)}</h1>
        <h1 className="text">{parse(state.text)}</h1>
        <h1 className="date">{`Date: ${state.date}`}</h1> */}
        <h1>{state.title}</h1>
        {state.text ? parse(state.text) : null}
        {state.date}
      </div>
    </div>
  );
}

export default NotePage;
