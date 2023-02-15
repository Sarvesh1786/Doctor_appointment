import React, { useState } from "react";
import { ExcelRenderer, OutTable } from "react-excel-renderer";

const Testproject = () => {
  const initialstate = { rows: "", cols: "" };
  const [state, setState] = useState(initialstate);

  const fileHandler = (event) => {
    let fileObj = event.target.files[0];

    ExcelRenderer =
      (fileObj,
      (err, resp) => {
        if (err) {
          console.log(err);
        } else {
          console.log("res", resp);
          setState({
            cols: resp.cols,
            rows: resp.rows,
          });
        }
      });
  };
  const { rows, cols } = state;
  console.log(state);
  return (
    <>
      <div>
        <input
          type="file"
          onChange={() => fileHandler}
          style={{ padding: "100px" }}
        />
        <div>
          {rows && (
            <OutTable
              data={rows}
              columns={cols}
              tableClassName="ExcelRenderer"
              tableHeaderRowClass="heading"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Testproject;
