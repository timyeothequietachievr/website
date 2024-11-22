type Currency = 'USD' | 'CAD' | 'GBP' | 'EUR' | 'SGD' | 'PLN' | 'AUD'

interface SplitPayment {
  split: string
}

interface FullPayment {
  full: string
}

interface Payment<PaymentType> {
  currency: Currency
  price: number
  paymentLinks: PaymentType
}

interface RecurringPayment<PaymentType> extends Payment<PaymentType> {
  frequency: Frequency
}

interface Offer {
  name: string
  features: Array<string>
  badge?: string
}

interface CourseOffer extends Offer {
  /*
   * A course has a single price which can be paid either in full or in 4 installments.
   */
  paymentOptions: Record<Currency, Payment<SplitPayment & FullPayment>>
}

interface BookdigitalOffer extends Offer {
  /*
   * A course has a single price which can be paid either in full or in 4 installments.
   */
  paymentOptions: Record<Currency, Payment<SplitPayment & FullPayment>>
}

interface BookphysicalOffer extends Offer {
  /*
   * A course has a single price which can be paid either in full or in 4 installments.
   */
  paymentOptions: Record<Currency, Payment<SplitPayment & FullPayment>>
}

type Frequency = 'monthly' | 'yearly'

interface CoachingOffer extends Offer {
  /*
   * Coaching has a monthly and yearly price. A customer picks one of them and pays in full.
   */
  paymentOptions: Record<
    Frequency,
    Record<Currency, RecurringPayment<FullPayment>>
  >
}

interface Habits30days30Offer extends Offer {
  /*
   * A course has a single price which can be paid either in full or in 4 installments.
   */
  paymentOptions: Record<Currency, Payment<SplitPayment & FullPayment>>
}

interface CallToAction {
  label: string
  link: string
}
