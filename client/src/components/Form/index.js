import React from "react";
import "./style.css"


function SearchForm(props) {
  return (
    <div className="col-8 cont mb-4 p-4 card text-center">
      <h5 className="pb-2">SEARCH FOR A BOOK</h5>
      <form>
          <input className="mr-2 mb-3  p-2 width_ " id="Title" type="text" value={props.search_term}
          placeholder="Book name" name="search_term" onChange={props.handleInputChange} required />
         
         <button onClick={props.handleFormSubmit} type="submit" className="btn btn-md text-light btn-primary padding">Search</button>
         </form>
    </div>
  );
}

export default SearchForm;
