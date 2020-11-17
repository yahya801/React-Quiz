import React, { useState } from "react";
import Questions from "./questions";
import { v4 as uuidv4 } from "uuid";
import { AiFillDelete } from "react-icons/ai";
import { IconContext } from "react-icons";
import { IoIosAdd } from "react-icons/io";
function Container() {
  const [question, setquestion] = useState([{ id: uuidv4() }]);

  const handleAdd = () => {
    setquestion([...question, { id: uuidv4() }]);
  };
  const handleRemove = (id) => {
    const values = [...question];
    var removeindex = question
      .map(function (Event) {
        return Event.id;
      })
      .indexOf(id);
    values.splice(removeindex, 1);
    setquestion(values);
  };
  return (
    <div>
      {question.map((count) => (
        <div className="box" key={count.id}>
          <div className="column3">
            <Questions />
          </div>
          <div>
            <button
              disabled={question.length == 1}
              className="delete2"
              onClick={() => handleRemove(count.id)}
            >
              <IconContext.Provider value={{ size: "25px" }}>
                <AiFillDelete />
              </IconContext.Provider>
            </button>
            <button  disabled={question.length >= 10} className="add" onClick={handleAdd}>
              <IconContext.Provider value={{ size: "25px" }}>
                <IoIosAdd />
              </IconContext.Provider>{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Container;
