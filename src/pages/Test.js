import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "../components/Header";
import List from "../components/list";
import NotesListPage from "./NotesListPage";

const Test = () => {
  const [searchterm, setSearch] = useState("");

  const handle = (e) => {
    setSearch(e.target.value);
  };

  function getValue() {
    if (searchterm.toLowerCase() === "antonio") {
      console.log("Get out of here!");
    }
  }

  const button = document.getElementById("button1");

  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  useEffect(() => {
    if (searchterm) {
      if (searchterm.toLowerCase() !== "tony") {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    }
    console.log(searchterm)
  }, [searchterm, button]);

  return (
    <div>
      <NotesListPage/>
      <Header search={searchterm} onSearch={handle} />
      <button id="button1" onClick={getValue}>
        The value!
      </button>
      <List list={stories} />
    </div>
  );
};

export default Test;
