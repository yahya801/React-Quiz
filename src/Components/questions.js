import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiFillDelete } from "react-icons/ai";
import { IconContext } from "react-icons";
function Questions() {
  const [answeroptions, setansweroptions] = useState([
    { id: uuidv4(), answeroption: "" },
    { id: uuidv4(), answeroption: "" },
  ]);
  const [questiontype, setquestiontype] = useState("shortanswer");
  const [shortanswer, setshortanswer] = useState([]);

  const handleChangeInput = (id, event) => {
    // console.log(id,event)
    const newansweroptions = answeroptions.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setansweroptions(newansweroptions);
  };

  const handleAddFields = () => {
    setansweroptions([...answeroptions, { id: uuidv4(), answeroption: "" }]);
  };
  const handleRemoveFields = (id) => {
    console.log(id);
    console.log(answeroptions);
    const values = [...answeroptions];
    var removeindex = answeroptions
      .map(function (Event) {
        return Event.id;
      })
      .indexOf(id);
    values.splice(removeindex, 1);
    console.log(values);
    setansweroptions(values);
  };
  const multiplechoice = () => {
    console.log(questiontype);
    if (questiontype === "multiplechoice") {
      return answeroptions.map((options) => (
        <div className="map" key={options.id}>
          <input
            className="answer"
            name="answeroption"
            value={options.answeroption}
            onChange={(event) => handleChangeInput(options.id, event)}
          />
          <button
            className="delete"
            disabled={answeroptions.length === 2}
            onClick={() => handleRemoveFields(options.id)}
          >
            <IconContext.Provider value={{ size: "25px" }}>
              <AiFillDelete />
            </IconContext.Provider>
          </button>
        </div>
      ));
    }
  };
  const Addoption = () => {
    if (questiontype == "multiplechoice") {
      return (
        <button
          className="addoption"
          disabled={answeroptions.length >= 4}
          onClick={handleAddFields}
        >
          Add Option
        </button>
      );
    }
  };
  const para = () => {
    if (questiontype == "para") {
      return <textarea />;
    }
  };
  const checkboxes = () => {
    if (questiontype == "checkboxes") {
      return (
        <div>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="option1"> Option1</label>
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label for="option2"> Option2</label>
        </div>
      );
    }
  };
  // const handleshortInput = (event) => {
  //   answer.append({id: uuidv4,fullanswer:event.target.value})
  // };
  const answer = () => {
    if (questiontype == "shortanswer") {
      return (
        <input
          className="answer"
          // value={shortanswer}
          // onChange={(event) => handleshortInput(event)}
        />
      );
    }
  };

  const selectoption = (event) => {
    console.log(event.target.value);
    setquestiontype(event.target.value);
  };

  return (
    <div className="questioncontainer">
      <input className="question" placeholder="Question will be typed here" />
      <div className="row">
        <div className="column">
          <select
            className="selectoption"
            onChange={(event) => selectoption(event)}
            value={questiontype}
          >
            <option value="shortanswer">Short Answer</option>
            <option value="para">Paragraph</option>
            <option value="multiplechoice">Multiple Choice</option>
            <option value="checkboxes">Checkboxes</option>
          </select>
        </div>
        <div className="column2">
          {multiplechoice()}
          {Addoption()}
          {para()}
          {answer()}
          {checkboxes()}
        </div>
      </div>
    </div>
  );
}

export default Questions;
