
import './App.css';


import {useNavigate} from 'react-router-dom';

import {Button} from 'react-bootstrap';

function App() {
  const navigate = useNavigate();
  return (
    <div style={{width: "90%", margin: "auto auto", textAlign:"center"}}>
      <h1>Home Page</h1>
      <Button
        variant="outline-success"
        style={{ width: "90%" }}
        onClick={() => navigate("create")}
      >
        NEXT
      </Button>
    </div>
  );
}

export default App;
