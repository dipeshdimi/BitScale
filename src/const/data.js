const tableData = [
  {
    input: "Nov 12, 2024 at 14:08 PM",
    action: "Bitscale Evaluation - Account relevant",
    enrich: "Bitscale Evaluation - Account relevant",
  },
  {
    input: "Oct 12, 2023 at 14:08 PM",
    action: "⚠️ cell data size exceeds limit",
    enrich: "BMW Evaluation - Relevancy check",
  },
  {
    input: "Feb 12, 2024 at 23:08 PM",
    action: "🔗 https://www.linkedin.com",
    enrich: "Google Evaluation - Lilevancy check",
  },
  {
    input: "Oct 12, 2024 at 06:44 AM",
    action: "⏳ Loading data, Please wait",
    enrich: "Apple Evaluation - Olvancy check",
  },
  {
    input: "Jan 13, 2024 at 17:08 PM",
    action: "⏳ Loading data, Please wait",
    enrich: "Figma Evaluation - Evancy check",
  },
];

const colData = [
  {
    key: 'input',
    title: 'Input Column',
    icon: '/input_column.svg'
  },
  {
    key: 'action',
    title: 'Action Column',
    icon: '/action_column.svg'
  },
  {
    key: 'enrich',
    title: 'Enrich Company',
    icon: '/enrich_company.svg'
  },
];

export { tableData, colData };