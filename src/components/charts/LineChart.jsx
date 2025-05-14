import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import dayjs from "dayjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = ({ labels, dataValues }) => {

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dataValues,
        borderColor: "#db4444",
        backgroundColor: "#db4444",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
  };

  return <Line data={data} options={options} />;
};

export default LineGraph;
