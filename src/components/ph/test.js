import React, { PureComponent, useState, useEffect } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const covidEndPoint = "https://coronavirus-ph-api.now.sh/cases";

export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      COLORS: []
    };
  }

  componentDidMount() {
    fetch(covidEndPoint)
      .then(res => res.json())
      .then(data => this.setState(data))
      .catch(err => console.log(err));

    // Get patient's status
    const recovered = data.filter(item => item.status === "Recovered");
    const died = data.filter(item => item.status === "Died");
    const admitted = data.filter(item => item.status === "Admitted");
    const toBeIdentified = data.filter(item => item.status === "TBA");

    // Get patient profile
    const male = data.filter(item => item.gender === "M");
    const female = data.filter(item => item.gender === "F");

    this.setState({
      data: [
        { name: "Recovered", value: recovered },
        { name: "Deaths", value: died },
        { name: "Admitted", value: admitted },
        { name: "To be Identified", value: toBeIdentified }
      ],
      COLORS: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]
    });
  }

  render() {
    return (
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </PieChart>
    );
  }
}
