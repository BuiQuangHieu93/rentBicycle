import React from "react";
import "../../index.css";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../index.css";

function Admin() {
  const [users, setUsers] = useState();
  const [stations, setStation] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const [selectedStations, setSelectedStations] = useState();

  const url_users = "http://localhost:5000/users";
  const url_stations = "http://localhost:5000/stations";

  const navigate = useNavigate();
  async function pullJsonUsers() {
    const response = await fetch(url_users);
    const responseData = await response.json();
    console.log(responseData);
    setUsers(responseData);
  }
  async function pullJsonStations() {
    const response = await fetch(url_stations);
    const responseData = await response.json();
    console.log(responseData);
    setStation(responseData);
  }

  const deleteMember = (id) => {
    Axios.post("http://localhost:5000/deleteMember", {
      id: id,
    });
    window.location.reload();
  };
  const deleteStation = (id) => {
    Axios.post("http://localhost:5000/deleteStation", {
      id: id,
    });
    window.location.reload();
  };

  useEffect(() => {
    pullJsonUsers();
    pullJsonStations();
  }, []);

  return (
    <React.Fragment>
      <div className="admin-contain-total">
        <div className="admin-heading">
          <a className="admin-member-heading" href="#admin-member">
            Member
          </a>
          <a className="admin-stations-heading" href="#admin-stations">
            Stations
          </a>
          <a className="admin-dashboard-heading" href="#admin-dashboard">
            Dashboard
          </a>
        </div>
        <div className="admim-body">
          <div className="admin-members" id="admin-member">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Unit</th>
                  <th>Type</th>
                  <th>Validity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users?.recordsets[0].map((user, i) => (
                  <tr key={i}>
                    <th>{user?.Account_id}</th>
                    <th>{user?.Account_name}</th>
                    <th>{user?.Account_role}</th>
                    <th>{user?.Account_unit}</th>
                    <th>{user?.Account_type}</th>
                    <th>{user?.Account_validity}</th>
                    <th>
                      <Button
                        className="delete-member"
                        onClick={() => setSelectedUser(user)}
                      >
                        Delete
                      </Button>
                    </th>
                  </tr>
                ))}

                {selectedUser ? deleteMember(selectedUser.Account_id) : null}
              </tbody>
            </table>
          </div>
          <div className="admin-stations" id="admin-stations">
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>lat</th>
                  <th>lng</th>
                  <th>available</th>
                </tr>
              </thead>
              <tbody>
                {stations?.recordsets[0].map((station, i) => (
                  <tr key={i}>
                    <th>{station?.Station_id}</th>
                    <th>{station?.Station_lat}</th>
                    <th>{station?.Station_lng}</th>
                    <th>{station?.Station_available}</th>
                    <th>
                      <Button
                        className="delete-member"
                        onClick={() => setSelectedStations(station)}
                      >
                        Delete
                      </Button>
                    </th>
                  </tr>
                ))}

                {selectedStations
                  ? deleteStation(selectedStations.Station_id)
                  : null}
              </tbody>
            </table>
          </div>
          <div className="admin-dashboards" id="admin-dashboard">
            <div className="admin-dashboard-item">
              <div className="admin-dashboard-item-left">
                <img src="http://localhost:5000/model//Hour.png" alt="hour" />
              </div>
              <div className="admin-dashboard-item-right">
                <img src="http://localhost:5000/model/Hour_1.png" alt="hour1" />
              </div>
            </div>
            <div className="admin-dashboard-item">
              <div className="admin-dashboard-item-left">
                <img
                  src="http://localhost:5000/model/Humidity.png"
                  alt="humidity"
                />
              </div>
              <div className="admin-dashboard-item-right">
                <img
                  src="http://localhost:5000/model//Humidity_1.png"
                  alt="humidity1"
                />
              </div>
            </div>
            <div className="admin-dashboard-item">
              <div className="admin-dashboard-item-left">
                <img
                  src="http://localhost:5000/model/Windspeed.png"
                  alt="windspeed"
                />
              </div>
              <div className="admin-dashboard-item-right">
                <img
                  src="http://localhost:5000/model/Windspeed_1.png"
                  alt="windspeed1"
                />
              </div>
            </div>
            <div className="admin-dashboard-item">
              <div className="admin-dashboard-item-left">
                <img
                  src="http://localhost:5000/model/Newtemp.png"
                  alt="newtemp"
                />
              </div>
              <div className="admin-dashboard-item-right">
                <img
                  src="http://localhost:5000/model/Newtemp_1.png"
                  alt="newtemp1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Admin;
