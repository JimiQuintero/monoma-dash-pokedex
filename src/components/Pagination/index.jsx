import React from "react";
import "./Pagination.css";

function Pagination() {
  return (
    <div className="pagination">
      <div className="btn-group my-10">
        <button className="btn">«</button>
        <button className="btn">Page 22</button>
        <button className="btn">»</button>
      </div>
    </div>
  );
}

export default Pagination;
