import { useEffect, useState } from "react";

import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const Display = () => {
const [allAuthors, setAllAuthors] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:8000/authors")
    .then((response) => {
        console.log(response.data);
        setAllAuthors(response.data);
    })
    .catch((err) => {
        console.log(err.response);
    });
}, []);

const deleteAuthor = (id) => {
    axios.delete(`http://localhost:8000/authors/${id}`)
        .then((response) => {
        console.log(response);
        const pickAuthors = allAuthors.filter((author) => {
            return author._id !== id;
        });
        setAllAuthors(pickAuthors);
    })
        .catch((err) => {
        console.log("error on deletion", err.response);
    });
};
    return (
        <div>
            <Link to="/new">Add an author</Link>
            <p>We have quotes by:</p>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Author</th>
                    <th scope="col">Actions-Available</th>
                </tr>
                </thead>
                <tbody>
                {
                    allAuthors.map((author) => {
                    return (
                        <tr key={author._id}>
                        <td>{author.name}</td>
                        <td>
                            <Link to={`/edit/${author._id}`}><button>Edit</button></Link>
                            <button onClick={() => deleteAuthor(author._id)}>Delete</button>
                        </td>
                    </tr>

                    );
                })
                }
                </tbody>

            </table>
        </div>
);
};

export default Display;