import React, { useEffect, useState } from "react";
import "./Style/Create.css";
import Api from "./Api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Create({ length }) {
  const [create, setCreate] = useState({
    id: "",
    name: "",
    mobile: "",
    photo: "",
    email: "",
    title: "",
    company: "",
  });

  const navigate = useNavigate();

  const [id, setId] = useState(length);

  console.log(create.company.length);

  const handleCreate = async () => {
    if (
      create.company.length <= 0 ||
      create.email.length <= 0 ||
      create.mobile.length <= 0 ||
      create.name.length <= 0 ||
      create.photo.length <= 0 ||
      create.title.length <= 0
    ) {
      Swal.fire({
        title: "Do you want to save without values?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          handleApiData();
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } else {
        handleApiData();
    }
  };

  const handleApiData = async () => {
    const response = await Api.post("/contacts", create);
    console.log(response.data);
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const createInput = (e) => {
    setCreate({
      ...create,
      id: `${id + 1}`,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="create">
      <h1>Create Contact</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
        corporis cumque qui dicta sapiente maiores illo quidem. Dolores impedit,
        recusandae fugit autem ex iusto culpa quasi earum deleniti maxime sequi!
      </p>
      <form className="c-form">
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
          Create
        </button>
        <button id="cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Create;
