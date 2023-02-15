import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CurdOpretion = () => {
  const initalstate = {
    name: "",
    data: [],
  };
  const [state, setState] = useState(initalstate);

  const onChangeMethod = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onClickMethod = (e) => {
    e.preventDefault();
    console.log(state);
    const id = uuidv4();
    setState((prevState) => ({
      ...prevState,
      name: "", // empty data
      data: [...prevState.data, { id, name: prevState.name }],
    }));

    // setState(initalstate);
  };

  const DeleteHandler = (e, id) => {
    e.preventDefault();

    const copyeState = [...state.data];
    const deldata = copyeState.filter((item) => item.id !== id);
    setState((prevState) => ({ ...prevState, data: deldata }));
  };

  const oneditMethod = (id, name) => {
    console.log(id, name);
    setState((prevState) => ({ ...prevState, name: name, updateId: id }));
  };

  const onUpdateMethod = (e) => {
    e.preventDefault();
    const onEdit = state.data.map((value) => {
      if (value.id === state.updateId) {
        return {
          id: value.id,
          name: state.name,
        };
      } else {
        return value;
      }
    });

    setState((prevState) => ({
      ...prevState,
      name: "", // empty data
      data: onEdit,
    }));
  };

  const { name } = state;
console.log("name",initalstate.data.deldata)
console.log(state.data)

  console.log(state);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center " }}>
        <label>Name :</label>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter Your name"
          required
          onChange={onChangeMethod}
        ></input>
        <button type="button" onClick={(e) => onClickMethod(e)}>
          {" "}
          Add
        </button>
        <button type="button" onClick={(e) => onUpdateMethod(e)}>
          Update
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          //   border: "3px solid gray",
          paddingTop: "80px",
        }}
      >
        <table border={1}>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>

          {state.data.map(({ id, name }) => (
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>
                <button type="button" onClick={(e) => oneditMethod(id, name)}>
                  Edit
                </button>
                <button type="button" onClick={(e) => DeleteHandler(e, id)}>
                  Del
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default CurdOpretion;
