// import { chartMoves } from "../../constant/chartMoves";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {},
  },
};

const BarChart = (props: any) => {

  let data = {
    labels: Object.keys(props.data),
    datasets: [
      {
        label: "Counts",
        data: Object.values(props.data),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(201, 203, 207, 1)",
        ],
        // barThickness: 10,
      },
    ],
  };

  const options = {
    scales:{
      xAxis:{
        display: false
      },
    }
  };
  return (
    <>
      <div className={`chart-container`}>
        <Bar data={data} options={options}/>
      </div>
    </>
  );
};

export default BarChart;
