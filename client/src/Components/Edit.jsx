import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Edit = (props) => {
const { id } = useParams();

const [name, setName] = useState("");
const [error, setError] = useState({});

const navigate = useNavigate();


const [authorNotFoundError, setAuthorNotFoundError] = useState("");
    console.log(id);
    
    useEffect(() => {
    axios.get(`http://localhost:8000/authors/${id}`)
        .then((response) => {
        console.log(response.data);
        setName(response.data.name);
    })
      .catch((err) => {
        console.log(err.response);
        setAuthorNotFoundError(`Author not found`);
    });
}, []);

const submitHandler = (e) => {
    e.preventDefault();

    axios.patch(`http://localhost:8000/authors/${id}`, { name: name })
        .then((response) => {
        console.log(response);
        navigate("/");
    })
        .catch((err) => {
        console.log(err.response.data.errors);
        setError(err.response.data.errors);
    });
};
  return (
    <form onSubmit={submitHandler}>
      {authorNotFoundError ? (
        <h2>
          {authorNotFoundError} <Link to="/new">Click here to add author</Link>
        </h2>
      ) : null}
      <Link to="/">Home</Link>
      <p>Edit This Author</p>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error.name ? <p>{error.name.message}</p> : null}
      </div>
      <button type="submit" className="btn btn-primary">
        SUBMIT
      </button>
    </form>
  );
};

export default Edit;