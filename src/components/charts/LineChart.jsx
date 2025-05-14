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

const LineGraph = () => {
  const labels = Array.from({ length: 10 }, (v, i) =>
    dayjs()
      .subtract(9 - i, "day")
      .format("MMM D")
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [0, 5, 6, 10, 23, 10, 10, 20, 10, 40],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          filter: () => false
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineGraph;
