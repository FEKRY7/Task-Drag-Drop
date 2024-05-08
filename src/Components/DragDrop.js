import React, { useState } from "react";
import "./../App.css";
import { useDrop } from "react-dnd";
import Picture from "./Picture";
export const PictureList = [
  {
    id: 1,
    url: "Input",
  },
  {
    id: 2,
    url: "Output",
  },
  {
    id: 3,
    url: "Add",
  },
  {
    id: 4,
    url: "Subtract",
  },
  {
    id: 5,
    url: "multiply",
  },
  {
    id: 6,
    url: "Divide",
  },
];
const DragDrop = () => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "text",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
    console.log(id);
  };

  return (
    <>
      <div className="Pictures">
        <h1 className="box1">
          {PictureList.map((picture) => {
            return (
              <Picture url={picture.url} id={picture.id} key={picture.id} />
            );
          })}
        </h1>
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} key={picture.id} />;
        })}
      </div>
    </>
  );
};

export default DragDrop;
