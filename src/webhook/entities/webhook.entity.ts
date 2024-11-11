// src/webhook.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('webhooks')
export class Webhooks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  event_type: string;

  @Column({ nullable: true })
  first_name: string | null;

  @Column({ nullable: true })
  last_name: string | null;

  @Column()
  email: string;

  @Column()
  currency: string;

  @Column()
  amount: number;

  @Column()
  charge: number;

  @Column('json')
  amount_split: {
    fee_paid_by_customer: number;
    fee_paid_by_merchant: number;
    total_amount_paid_by_customer: number;
    amount_received_by_merchant: number;
  };

  @Column()
  total_amount_paid: number;

  @Column()
  mode: string;

  @Column()
  type: string;

  @Column()
  status: string;

  @Column()
  reference: string;

  @Column()
  tx_ref: string;

  @Column('json')
  customization: {
    title: string | null;
    description: string | null;
    logo: string | null;
  };

  @Column({ nullable: true })
  meta: string | null;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;
}
