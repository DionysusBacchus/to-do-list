import React from "react";
import Tag from "./Tag";
import useList from "../hooks/useList";
import AddTag from "./AddTag";

const uuid = require("uuid");

export default function TagList() {
  const [tagsArray, List] = useList('myTags');

  const addTag = (text) => {
    const newTag = { id: uuid.v4(), text: text };
    List.add(newTag);
  };

  return (
    <div>
      <AddTag onAdd={addTag} />
      {tagsArray.map((tag) => (
        <span key={tag.id}>
          <Tag
            item={tag}
            handles={{ deleteTag: List.delete, editTag: List.edit }} />
        </span>
      ))}
    </div>

  );
}