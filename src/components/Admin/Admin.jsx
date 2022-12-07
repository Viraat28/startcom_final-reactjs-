import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";

function Admin() {
  const [rval, setrval] = useState(0);
  const [userData, setuserData] = useState([]);
  const [adminData, setadminData] = useState([]);
  const [state, setState] = useState([]);
  const [datanotfound, setdatanotfound] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:3001/users?role=user`).then((res) => {
      setuserData(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/users?role=admin`).then((res) => {
      setadminData(res.data);
    });
  }, []);

  async function Deluser(a) {
    await axios.delete(`http://localhost:3001/users/${a}`);
    alert(`User with id ${a} deleted`);
    console.log(a);
    await axios.get(`http://localhost:3001/users`).then((res) => {
      setuserData(res.data);
    });
  }

  var Data = userData;
  if (rval !== 0) {
    Data = adminData;
  } else {
    Data = userData;
  }
  return (
    <div>
      <div className="Container">
        {rval === 0 ? <h1>USERS</h1> : <h1>ADMIN</h1>}

        {/* <div>
          <button className="btn1" onClick={() => setrval(0)}>
            user
          </button>
          <button className="btn1" onClick={() => setrval(1)}>
            admin
          </button>
        </div> */}
        <div className="box">
          <table>
            <tr>
              <th style={{ textAlign: "center", width: "17%" }}>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th style={{ textAlign: "center", width: "10%" }}>Delete</th>
            </tr>
            {Data.map((x) => {
              return (
                <tr>
                  <td>{x.id}</td>
                  <td className="admin">{x.username}</td>
                  <td className="admin">{x.email}</td>
                  <td className="admin">{x.password}</td>
                  <td>
                    <button                     
                      onClick={() => Deluser(x.id)}
                    >Delete</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
