import { useContext } from "react";
import { PricingContext } from "./Context";

export function PricingDisplay() {
  const { price, unit, currency } = useContext(PricingContext);

  return <p><strong>Price: {price}</strong> {currency}/{unit}</p>
}
