import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {

  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newName = {name }

    axios.post("http://localhost:8000/authors/new", { newName })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrors(err.response.data.errors);
      });
  };
  return (
        <div>
          <Link to="/">Home</Link>
          <p>Add a New Author</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                  {errors.name ? <p>{errors.name.message}</p> : null}
            </div>
            <button className="btn btn-primary" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
  );
};

export default Form;