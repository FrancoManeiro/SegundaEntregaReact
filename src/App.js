import Header from "./components/Header";
import List from "./components/List";
import NavBar from "./components/NavBar";
import data from "./data.json";
import { Navigate, Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";

const App = function () {
  const { Hombre, Mujer, Joyería, Electrónica } = data;
  return (
    <div>
      <Header />
      <main>
        <NavBar />
        <ul>
          <Routes>
            <Route
              path="/"
              element={<p>Bienvenidos a RyM Products</p>}
            />
            <Route path="/hombre" element={<List list={Hombre} />} />
            <Route path="/hombre/:name" element={<ItemDetail data={data}/>}/>
            <Route path="/mujer" element={<List list={Mujer} />} />
            <Route path="/mujer/:name" element={<ItemDetail data={data}/>}/>
            <Route path="/joyería" element={<List list={Joyería} />} />
            <Route path="/joyería/:name" element={<ItemDetail data={data}/>}/>
            <Route path="/electrónica" element={<List list={Electrónica} />} />
            <Route path="/electrónica/:name" element={<ItemDetail data={data}/>}/>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ul>
      </main>
    </div>
  );
};

export default App;
