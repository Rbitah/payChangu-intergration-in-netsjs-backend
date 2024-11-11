import { PartialType } from '@nestjs/mapped-types';
import { PaymentsDto } from './create-payment.dto';

export class UpdatePaymentDto extends PartialType(PaymentsDto) {}
