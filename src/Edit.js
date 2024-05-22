import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Api from "./Api";
import "./Style/Edit.css";

function Edit({ data }) {
  const { id } = useParams();

  const load = "https://loading.io/assets/mod/spinner/spinner/lg.gif";
  const contact = data.find((f) => f.id === id);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [create, setCreate] = useState({
    id: "",
    name: "",
    mobile: "",
    photo: "",
    email: "",
    title: "",
    company: "",
  });

  useEffect(() => {
    setLoading(true);
    setCreate({
      id: contact.id,
      name: contact.name,
      mobile: contact.mobile,
      photo: contact.photo,
      email: contact.email,
      title: contact.title,
      company: contact.company,
    });
    setLoading(false);
  }, []);

  console.log(create);
  const handleCreate = () => {
    const response = Api.put(`/contacts/${id}`, create);
    console.log(response.data);
    navigate("/");
  };

  const handleCancel = () => {};

  const createInput = (e) => {
    setCreate({
      ...create,
      id: id,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="edit">
      {loading ? (
        <img  src={load}/>
      ) : (
        <>
          <h1>Update Contact</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            corporis cumque qui dicta sapiente maiores illo quidem. Dolores
            impedit, recusandae fugit autem ex iusto culpa quasi earum deleniti
            maxime sequi!
          </p>
          <form className="e-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={create.name}
              onChange={(e) => createInput(e)}
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={create.mobile}
              onChange={(e) => createInput(e)}
              required
            />
            <input
              type="text"
              name="photo"
              placeholder="Photo Url"
              value={create.photo}
              onChange={(e) => createInput(e)}
              required
            />

            <input
              type="text"
              name="email"
              placeholder="Email"
              value={create.email}
              onChange={(e) => createInput(e)}
              required
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={create.title}
              onChange={(e) => createInput(e)}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={create.company}
              onChange={(e) => createInput(e)}
              required
            />
          </form>
          <div className="c-btns">
            <button id="create" onClick={handleCreate}>
              Update
            </button>
            <button id="cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Edit;
