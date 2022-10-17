import { fetchGasFees } from "@xld-sdk-react/gas-fee-estimator";

async function fetchData() {
  const data = await fetchGasFees();
  console.log({ data });
}

export default function GasFeeTester() {
  fetchData();

  return null;
}
