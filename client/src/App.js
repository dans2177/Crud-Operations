import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Formtable from "./components/Formtable";

axios.defaults.baseURL = "http://localhost:8080";

function App() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    email: "",
    mobile: "",
    _id: "",
  });
  const [dataList, setDataList] = useState([]);
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("/create", formData);
    console.log(data);
    if (data.data.sucess) {
      setAddSection(false);
      await getData();
    } else {
      alert(data.data.message);
    }
  };

  const getData = async () => {
    const data = await axios.get("/");
    console.log(data);
    if (data.data.sucess) {
      setDataList(data.data.data);
    } else {
      alert(data.data.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    const data = await axios.delete("/delete/" + id);
    console.log(data);
    if (data.data.sucess) {
      getData();
    } else {
      alert(data.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
  const data = await axios.put("/update/" + formDataEdit._id, formDataEdit);
    console.log(data);
    if (data.data.sucess) {
      setEditSection(false);
      await getData();
    } else {
      alert(data.data.message);
    }
    
  };

const handleEditOnChange = async (e) => {
  const { id, value } = e.target;
  setFormDataEdit({
    ...formDataEdit,
    [id]: value,
  });
};

const handleEdit = async (e) => {
  setEditSection(true);
  setFormDataEdit({
    name: e.name,
    email: e.email,
    mobile: e.mobile,
    _id: e._id,
  });
};

  return (
    <>
      <div className="container">
        {!addSection && !editSection && (
          <button className="btn btn-add" onClick={() => setAddSection(true)}>
            Add
          </button>
        )}

        {addSection && (
          <Formtable
            handleOnChange={handleOnChange}
            handleSubmit={handleSubmit}
            setAddSection={() => setAddSection(false)}
            formData={formData}
            isEditForm={false}
          />
        )}
        {editSection && (
          <Formtable
            handleOnChange={handleEditOnChange}
            handleSubmit={handleUpdate}
            setEditSection={() => setEditSection(false)}
            setAddSection={() => setAddSection(false)}
            formData={formDataEdit}
            isEditForm={true}
          />
        )}

        {!addSection && !editSection && (
          <div className="dataContainer">
            {!addSection && (
              <div className="dataContainer">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {dataList[0] ? (
                      dataList.map((item) => (
                        <tr key={item._id}>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.mobile}</td>
                          <td> Active</td>
                          <td>
                            <button
                              className="btn btn-edit"
                              onClick={() => handleEdit(item)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-delete"
                              onClick={() => handleDelete(item._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">
                          <p
                            style={{
                              textAlign: "center",
                              color: "red",
                              fontWeight: "bold",
                              fontSize: "20px",
                            }}
                          >
                            No data found
                          </p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
