import "./App.css";
import Module from "./components/module";

function App() {
  const InlineMethod1 = {
    backgroundColor: "rgb(109, 130, 61)",
    borderRadius: "12px",
    padding: "10px",
    margin: "10px",
    color: "white",
  };

  return (
    <>
    <Module />
      <div className="firstmethod">
        <h1>внешний sсss/sсss файл</h1>
      </div>
      <div style={InlineMethod1}>
        <h1>inline-стили ( через открывающий тег) метод 1</h1>
      </div>
      <div
        style={{
          backgroundColor: "rgb(61, 130, 86)",
          borderRadius: "12px",
          padding: "10px",
          margin: "10px",
          color: "white",
        }}
      >
        <h1>inline-стили ( через открывающий тег) метод 2</h1>
      </div>
    </>
  );
}

export default App;
