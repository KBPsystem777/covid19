import React, { PureComponent, useState, useEffect } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { render } from "react-dom";

const covidEndPoint = "https://coronavirus-ph-api.now.sh/cases";

class Example1extends PureComponent {
  const [data, setData] = useState(["Loading"]);
  const [chart, setChart] = useState(["Loading"])

  async function getData() {
    setTimeout(() => {
      fetch(covidEndPoint)
        .then(res => res.json())
        .then(setData);
    }, 100);
  }

  useEffect(() => {
    getData();
    setData(data);
    setChart(chart)
  }, []);

  // Get patient's status
  const recovered = data.filter(item => item.status === "Recovered");
  const died = data.filter(item => item.status === "Died");
  const admitted = data.filter(item => item.status === "Admitted");
  const toBeIdentified = data.filter(item => item.status === "TBA");

  // Get patient profile
  const male = data.filter(item => item.gender === "M");
  const female = data.filter(item => item.gender === "F");

  // Chart Config
  const chartData = [
    { name: "Recovered", value: recovered },
    { name: "Deaths", value: died },
    { name: "Admitted", value: admitted },
    { name: "To be Identified", value: toBeIdentified }
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  render() {
    return (
        <PieChart width={800} height={400}>
          <Pie
            data={chartData}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      );
  }

}

export default Example1;
