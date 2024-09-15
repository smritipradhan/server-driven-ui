// Mock Data in UI
export const configData = {
  title: "Dashboard",
  widgets: [
    {
      type: "infoCard",
      title: "Sales",
      value: "$25,000",
      trend: "up",
      description: "Compared to last month",
    },
    {
      type: "chart",
      title: "Visitors",
      chartType: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        values: [200, 400, 300, 500, 400],
      },
    },
    {
      type: "table",
      title: "Latest Orders",
      columns: ["ID", "Product", "Customer", "Total"],
      rows: [
        [1001, "iPhone 12", "John Doe", "$799"],
        [1002, "Samsung S21", "Jane Smith", "$699"],
      ],
    },
  ],
};
