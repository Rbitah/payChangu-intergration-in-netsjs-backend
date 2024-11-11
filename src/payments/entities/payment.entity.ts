import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  tx_ref: string; // Unique transaction reference

  @Column()
  status: string; // Payment status

  @Column()
  amount: number; // Amount of payment

  @Column()
  currency: string; // Currency used in payment

  @Column()
  charges: number; // Charges incurred during payment

  @Column()
  customer_email: string; // Customer's email

  @Column({ nullable: true })
  customer_name: string; // Customer's full name

  @Column({ nullable: true })
  product_title: string; // Product title

  @Column({ nullable: true })
  product_description: string; // Product description

  @Column({ nullable: true })
  payment_method: string; // Payment method/channel (Card, Mobile)

  @Column({ nullable: true })
  card_details: string; // Card details (last 4 digits, card brand)

  @Column({ type: 'timestamp', nullable: true })
  completed_at: Date; // Payment completion timestamp
}
