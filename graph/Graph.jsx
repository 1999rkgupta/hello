import React from "react";
import { CChart } from "@coreui/react-chartjs";
const GraphApp = () => {
  return (
    <div
      style={{
        heigh: "600px",
        width: "600px",
        background: "#fff",
      }}
    >
      <CChart
        type="line"
        data={{
          labels: [
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "June",
            "July",
            "Aug",
            "sept",
          ],
          datasets: [
            {
              label: "My GitHub Commits",
              backgroundColor: "#f87979",
              data: [40, 20, 60, 39, 10, 40, 39, 78, 40],
            },
          ],
        }}
        labels="months"
      />
    </div>
  );
};

export default GraphApp;
