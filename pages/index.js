import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

const Home = () => {
    ChartJS.register(
      RadialLinearScale,
      PointElement,
      LineElement,
      Filler,
      Tooltip,
      Legend
    );

    const data = {
      labels: [
        "WH 1",
        "WH 2",
        "WH 3",
        "WH 4",
        "WH 5",
        "WH 6",
      ],
      datasets: [
        {
          label: "# of Warehouses",
          data: [2, 9, 3, 5, 2, 3],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };
       return <Radar data={data} />;

}
export default Home;



