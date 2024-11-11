import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from 'src/cart/entities/cart.entity';
import { HttpModule } from '@nestjs/axios';
import { Payment } from './entities/payment.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[TypeOrmModule.forFeature([Cart,Payment]),HttpModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  
  })],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
