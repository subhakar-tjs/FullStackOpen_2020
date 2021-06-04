import React from "react";

function FilterModule({ filtered, handleFilter }) {
  return (
    <div>
        filter shown with <input onChange={handleFilter} value={filtered}/>
    </div> 
  )
}
export default FilterModule