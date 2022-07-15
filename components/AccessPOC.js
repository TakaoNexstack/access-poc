import { useEffect, useState } from "react";

const AccessPOC = () => {
  const [loggedIn, setLoggedIn] = useState("User 1");
  const [visibleCams, setVisibleCams] = useState([]);
  const users = [
    {
      id: 1,
      username: "User 1",
      department: "Department A",
      sites: ["Site A", "Site B"],
    },
    {
      id: 2,
      username: "User 2",
      department: "Department B",
      sites: ["Site C"],
    },
    {
      id: 3,
      username: "User 3",
      department: "Department C",
      sites: ["Site A", "Site B", "Site C"],
    },
    {
      id: 4,
      username: "User 4",
      department: "Department C",
      sites: ["Site C"],
    },
  ];
  const cameras = [
    {
      id: 1,
      camera_name: "Cam 1",
      site: "Site A",
      groups: ["Group 1", "Group 2"],
      alerts: ["Alert 1", "Alert 2", "Alert 3"],
    },
    {
      id: 2,
      camera_name: "Cam 2",
      site: "Site B",
      groups: ["Group 2", "Group 3"],
      alerts: ["Alert 4", "Alert 5"],
    },
    {
      id: 3,
      camera_name: "Cam 3",
      site: "Site C",
      groups: ["Group 2"],
      alerts: ["Alert 6"],
    },
  ];

  const filterAccess = (username) => {
    const user = users.find((user) => user.username === username);
    return cameras.filter((camera) =>
      user.sites.find((site) => site === camera.site)
    );
  };
  useEffect(() => {
    const filtered = filterAccess(loggedIn);
    setVisibleCams(filtered);
  }, [loggedIn]);

  return (
    <>
      <div className="users-container">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <button onClick={() => setLoggedIn(user.username)}>Login</button>
            <p className="username">{user.username}</p>
            <p className="department">{user.department}</p>
            <ul className="sites">
              {user.sites.map((site, i) => (
                <li key={i}>{site}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="cameras-container">
        <h3>All Cameras</h3>
        <ul>
          {cameras.map((camera) => (
            <li key={camera.id}>{camera.camera_name + ` (${camera.site})`}</li>
          ))}
        </ul>
      </div>
      <br></br>
      <div className="application">
        <h3>Application</h3>
        <p>
          Logged in as: <b>{loggedIn}</b>
        </p>
        <p>Visible Cameras:</p>
        <div className="app-body">
          <ul>
            {visibleCams.map((cam) => (
              <li key={cam.id}>{cam.camera_name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccessPOC;
