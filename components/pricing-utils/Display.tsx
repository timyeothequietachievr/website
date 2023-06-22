import { PricingContextConsumer } from './Context'

export function PricingDisplay() {
  return (
    <PricingContextConsumer>
      {({ state }) => (
        <>
          <strong>{state.price}</strong> {state.currency.toUpperCase()}/{state.unit}
        </>
      )}
    </PricingContextConsumer>
  )
}
