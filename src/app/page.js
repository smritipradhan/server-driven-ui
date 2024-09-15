"use client";
import styles from "./page.module.css";
import { configData } from "./constants";
import { useState } from "react";
import InfoCard from "./components/infoCard";
import Chart from "./components/chart";
import Table from "./components/table";

export default function Home() {
  console.log({ configData });
  const [dashboardConfig, setDashboardConfig] = useState(configData); // Dummy Data, set from API

  const renderWidget = (widget) => {
    switch (widget.type) {
      case "infoCard":
        return <InfoCard key={widget.title} {...widget} />;
      case "chart":
        return <Chart key={widget.title} {...widget} />;
      case "table":
        return <Table key={widget.title} {...widget} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.page}>
      {dashboardConfig ? (
        <div>
          <h1>{dashboardConfig?.title}</h1>
          <div>{dashboardConfig?.widgets.map(renderWidget)}</div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
