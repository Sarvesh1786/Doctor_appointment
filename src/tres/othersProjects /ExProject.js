import React, { useState } from "react";
import { read, utils, writeFile } from "xlsx";

const ExProject = () => {
  const [movies, setMovies] = useState([]);

  const handleImport = ($event) => {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          setMovies(rows);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleExport = () => {
    const headings = [["Movie", "Category", "Director", "Rating"]];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, movies, { origin: "A2", skipHeader: true });
    utils.book_append_sheet(wb, ws, "Report");
    writeFile(wb, "Movie Report.xlsx");
  };

  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <input
                    type="file"
                    name="file"
                    className="custom-file-input"
                    id="inputGroupFile"
                    required
                    onChange={handleImport}
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  />
                  <label className="custom-file-label" htmlFor="inputGroupFile">
                    Choose file
                  </label>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={handleExport}
                className="btn btn-primary float-right"
              >
                Export <i></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Movie</th>
                <th scope="col">Category</th>
                <th scope="col">Director</th>
                <th scope="col">Rating</th>
              </tr>
            </thead>
            <tbody>
              {movies.length ? (
                movies.map((movie, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{movie.Movie}</td>
                    <td>{movie.Category}</td>
                    <td>{movie.Director}</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        {movie.Rating}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No Movies Found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ExProject;
