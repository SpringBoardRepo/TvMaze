import { useState } from "react";
import axios from "axios";
import Shows from "./Shows";

function Search(){

    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (e) =>{
     const q = e.target.value;
     setQuery(q);
    }

    async function getSearchResults() { 
        let response = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
        setSearchResults(response.data);
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        setQuery("");
        getSearchResults();
    }
    
    return (
    <>
        <form onSubmit={handleSubmit}>
         <input type="text" 
                placeholder="Search Your Show"
                value = {query}
                onChange={handleChange} /> 
         <button>Search</button>
        </form>
            {searchResults && <Shows shows={ searchResults}/> }   
    </>
    )

}

export default Search;