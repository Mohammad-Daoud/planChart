import "./styles.css";
import TreeChart from "@ssthouse/react-tree-chart";
import "@ssthouse/react-tree-chart/lib/react-tree-chart.css";

const sampleData = {
  value: "1",
  children: [
    { value: "2", children: [{ value: "4" }, { value: "5" }] },
    { value: "3" }
  ]
};

export default function App() {
  return (
    <div className="App">
      <h1>@ssthouse/react-tree-chart</h1>

      <TreeChart
        dataset={sampleData}
        collapseEnabled={true}
        style={{
          width: "600px",
          height: "600px",
          border: "1px solid black"
        }}
        renderCustomNode={({ data, collapsed }) => (
          <div>
            <span style={{ color: "green" }}>
              {(data as any).value + (collapsed ? "yes" : "no")}
            </span>
          </div>
        )}
      />
    </div>
  );
}
