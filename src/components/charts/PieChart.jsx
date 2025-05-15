import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import useWindowResize from '../../utils/hooks/useWindowResize';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ labels, dataValues}) {

  const windowSize = useWindowResize();


  const data = {
    labels: labels, 
    datasets: [
      {
        label: "# of Votes",
        data: dataValues,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    responsive: false,
    maintainAspectRation: false,
    plugins: {
      legend: { 
        position: windowSize <= 330 ? 'bottom' : 'right',
        labels: {
          boxWidth: 20,
          padding: 15, 
        } 
      }
    },
  };

  return <Pie data={data} options={options}/>;
}
