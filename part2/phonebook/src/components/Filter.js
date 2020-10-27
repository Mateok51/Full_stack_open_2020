import React from "react"

const Filter = ({ filterName, setFilterName }) => {
  const handleFilterChange = (Event) => {
    setFilterName(Event.target.value)
  }
  return (
    <div>
      filter shown with{" "}
      <input value={filterName} onChange={handleFilterChange} />
    </div>
  )
}

export default Filter
