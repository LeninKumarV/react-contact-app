import React, { useEffect, useState } from "react";
import Api from "./Api";
import "./Style/Contacts.css";
import { Link, useNavigate } from "react-router-dom";

function Contacts({data,setData,length}) {
  const load = "https://loading.io/assets/mod/spinner/spinner/lg.gif";

  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();



  useEffect(() => {
    const apiRequest = async () => {
      setLoading(true);
      const response = await Api.get("/contacts");
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    };
    apiRequest();
  }, []);

  const handleCreate=()=>{
      navigate('/create')
  }
  return (
    <div className="contacts">
      {loading ? (
        <img src={load} />
      ) : (
        <>
          <div className="left">
            <button onClick={handleCreate}>
              <i class="fa-solid fa-plus"></i> Create Contact
            </button>
          </div>
          <br />
          <div className="right">
            <h3>Contacts ({length})</h3>
            <table>
              <tr>
                <th>Name</th>
                <th>E-mail</th>
                <th>Phone Number</th>
                <th>Job title & company</th>
              </tr>
              {data.map((d) => {
                return (
                  <tr key={d.id}>
                    <td style={{ textAlign: "start" }} className="profile">
                      <img src={d.photo} style={{ width: "50px" }} />
                      <Link to={`/read/${d.id}`}> <span style={{ textAlign: "start" }}>{d.name}</span></Link>
                    </td>
                    <td>{d.email}</td>
                    <td>{d.mobile}</td>
                    <td>
                      {d.title} at {d.company}
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Contacts;
