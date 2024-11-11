import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PaymentsModule } from './payments/payments.module';
import { CartModule } from './cart/cart.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeOrmConfig';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [UserModule, PaymentsModule, CartModule, WebhookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
