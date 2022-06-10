import { useState } from "react";
import axios from "axios";
import Shows from "./Shows";
import "./App.css";
import { Form, Button } from "react-bootstrap";

function Search() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const q = e.target.value;
    setQuery(q);
  };

  async function getSearchResults() {
    try {
      let response = await axios.get(
        `http://api.tvmaze.com/search/shows?q=${query}`
      );
      setSearchResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery("");
    getSearchResults();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 input">
          <Form.Control
            type="text"
            placeholder="Search Your Show"
            value={query}
            onChange={handleChange}
          />
          <Button className="SearchButton" type="submit">
            Search
          </Button>
        </Form.Group>
      </Form>
      {searchResults && <Shows shows={searchResults} />}
    </>
  );
}

export default Search;
