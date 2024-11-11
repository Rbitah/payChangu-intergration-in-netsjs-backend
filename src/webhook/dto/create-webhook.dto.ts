// src/webhook.dto.ts

import { IsEmail, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class WebhookDto {
  @IsString()
  event_type: string;

  @IsOptional()
  @IsString()
  first_name: string | null;

  @IsOptional()
  @IsString()
  last_name: string | null;

  @IsEmail()
  email: string;

  @IsString()
  currency: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  charge: number;

  @IsObject()
  amount_split: {
    fee_paid_by_customer: number;
    fee_paid_by_merchant: number;
    total_amount_paid_by_customer: number;
    amount_received_by_merchant: number;
  };

  @IsNumber()
  total_amount_paid: number;

  @IsString()
  mode: string;

  @IsString()
  type: string;

  @IsString()
  status: string;

  @IsString()
  reference: string;

  @IsString()
  tx_ref: string;

  @IsObject()
  customization: {
    title: string | null;
    description: string | null;
    logo: string | null;
  };

  @IsOptional()
  @IsString()
  meta: string | null;

  @IsString()
  created_at: string;

  @IsString()
  updated_at: string;
}
