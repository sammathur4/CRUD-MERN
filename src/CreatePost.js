import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function CreatePost(){
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        description: "",        

    });

    const handleChange = (event)=>{
        // console.log(event.target);
        const {name, value} = event.target;
        setPost(prev =>{
            return({
                ...prev,
                [name]: value
            })
        })
    }

    const handleClick = (event)=>{
        event.preventDefault();
        // console.log(post);



        axios.post("create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

      navigate("posts");

    }


    
    

    return (
        <div style={{width: "90%", margin: "auto auto", textAlign: "center" } }>
            <h1 >Create a Post</h1>
<Form>
<Form.Group>
          <Form.Control
            name="title"
            value={post.title}
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            placeholder="title"
          />
          <Form.Control
            onChange={handleChange}
            name="description"
            value={post.description}
            style={{ marginBottom: "1rem" }}
            placeholder="description"
          />
        </Form.Group>
        <Button onClick={handleClick}
        variant="outline-success"
        style={{width: "100%",marginBottom: "1rem"  }}
        >Create Post</Button>
                    
</Form>

            <Button style={{width: "100%",
            }} variant="outline-dark"
             onClick={()=>navigate(-1)}>BACK</Button>

        </div>


    );
}

export default CreatePost;