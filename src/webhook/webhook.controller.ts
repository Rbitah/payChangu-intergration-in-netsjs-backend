import { Controller, Post, Body, HttpCode } from '@nestjs/common';

interface PaymentAmountSplit {
  fee_paid_by_customer: number;
  fee_paid_by_merchant: number;
  total_amount_paid_by_customer: number;
  amount_received_by_merchant: number;
}

interface WebhookPayload {
  event_type: string;
  first_name: string | null;
  last_name: string | null;
  email: string;
  currency: string;
  amount: number;
  charge: number;
  amount_split: PaymentAmountSplit;
  total_amount_paid: number;
  mode: string;
  type: string;
  status: string;
  reference: string;
  tx_ref: string;
  customization: {
    title: string | null;
    description: string | null;
    logo: string | null;
  };
  meta: string;
  created_at: string;
  updated_at: string;
}

@Controller('webhook')
export class WebhookController {
  @Post('payment')
  @HttpCode(200) // Respond with a 200 status code to indicate the webhook was received
  handlePaymentWebhook(@Body() webhookPayload: WebhookPayload) {
    // Log the webhook event (for debugging)
    console.log('Received webhook event:', webhookPayload);

    // Extract important details
    const {
      event_type,
      email,
      amount,
      currency,
      total_amount_paid,
      status,
      reference,
      tx_ref,
      created_at,
    } = webhookPayload;

    // Process the webhook event, e.g., updating payment records, notifying users, etc.
    if (event_type === 'checkout.payment' && status === 'success') {
      console.log(`Payment of ${amount} ${currency} was successful for ${email}.`);
      console.log(`Total amount paid: ${total_amount_paid}. Reference: ${reference}, TxRef: ${tx_ref}`);
      
      // TODO: Perform further actions such as saving to the database, triggering emails, etc.
    }

    return { message: 'Webhook received and processed' };
  }
}
