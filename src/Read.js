import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Style/Read.css";
import Api from "./Api";

function Read({ data }) {
  const { id } = useParams();
  const contacts = data.find((f) => f.id === id);
  console.log(contacts);
  const navigate=useNavigate();

  const handleBack=()=>{
    navigate('/');
  }

  const handleUpdate=()=>{
    navigate('/edit')
  }

  const handleDelete=(id)=>{
    const response=Api.delete(`/contacts/${id}`);
    alert("Succesfully Deleted");
    navigate('/');
  }
  return (
    <div className="read">
      <h1 style={{ color: "yellow" }}>View Contact</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
        corporis cumque qui dicta sapiente maiores illo quidem. Dolores impedit,
        recusandae fugit autem ex iusto culpa quasi earum deleniti maxime sequi!
      </p>
      {contacts ? (
        <article>
          <img
            src={contacts.photo}
            style={{ width: "200px"}}
          />
          <table border={1}>
            <tr>
              <td>{contacts.name}</td>
            </tr>
            <tr>
              <td>{contacts.email}</td>
            </tr>
            <tr>
              <td>{contacts.mobile}</td>
            </tr>
            <tr>
              <td>{contacts.title}</td>
            </tr>
            <tr>
              <td>{contacts.company}</td>
            </tr>
            <tr>
              <td><Link to={`/edit/${contacts.id}`}><button id="update" onClick={handleUpdate}>Update</button></Link> 
              <button id="delete" onClick={()=>handleDelete(contacts.id)}>Delete</button>
              </td>
            </tr>
          </table>
        </article>
      ) : (
        <h1>No Data's Here ...</h1>
      )}
      <button id="back" onClick={handleBack}>back</button>
    </div>
  );
}

export default Read;
