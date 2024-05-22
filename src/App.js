import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contacts from "./Contacts";
import Navbar from "./Navbar";
import Read from "./Read";
import Edit from "./Edit";
import Create from "./Create";

function App() {
  const [data, setData] = useState([]);
  const [length, setLength] = useState(0);

  const [input, setInput] = useState("");  
  const [search, setSearch] = useState([]);

  const filterData=()=>{
    const result=data.filter((f)=>f.name.toLowerCase().includes(input.toLowerCase()));
    setSearch(result);    
  }

  useEffect(()=>{
    filterData();
  },[input,data]);

  useEffect(() => {
    setLength(data.length);
    console.log(length);
  }, [data]);

  
  return (
    <div className="App">
      <Navbar setInput={setInput} />
      <Routes>
        <Route
          path="/"
          element={<Contacts data={search} setData={setData} length={length} />}
        />
        <Route path="/read/:id" element={<Read data={data} />} />
        <Route path="/edit/:id" element={<Edit data={data} />} />
        <Route path="/create" element={<Create length={length} />} />
      </Routes>
    </div>
  );
}

export default App;
