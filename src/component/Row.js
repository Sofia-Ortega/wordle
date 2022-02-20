import react from 'react';
import Box from "./Box";

const flexRow = {
  display: "flex",
}
export default function Row({word}) {
  return (
    <div style={flexRow}>
      <Box w={word[0]} success={"g"}/>
      <Box w={word[1]} success={"n"} />
      <Box w={word[2]} success={"y"}/>
      <Box w={word[3]} />
      <Box w={word[4]} />
    </div>
)
}
