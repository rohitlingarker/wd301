import { Link } from "react-router-dom";

function App() {

    return (
      <div>
        <h2>
            404 Not Found
        </h2>
       <button id="backToHomeButton">
            <Link to="/">
             backToHomeButton
            </Link>
       </button>
      </div>
    );
  }
  export default App;