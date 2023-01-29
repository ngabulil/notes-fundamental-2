import React, { useEffect, useState } from "react";
import { getNote } from "../utils/api";
import { useParams } from "react-router-dom";

const DetailPageNote = () => {
  const [note, setNote] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await getNote(id);
      setNote(response.data);
    };

    getData();
  }, [id]);

  return (
    <main>
      <div className="detail-page">
        <h1 className="detail-page__title">{note.title}</h1>
        <p className="detail-page__createdAt">{note.createdAt}</p>
        <p className="detail-page__body">{note.body}</p>
      </div>
    </main>
  );
};

export default DetailPageNote;