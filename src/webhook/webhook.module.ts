import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebhookService } from './webhook.service';
import { WebhookController } from './webhook.controller';
import { Webhooks } from './entities/webhook.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Webhooks])],
  controllers: [WebhookController],
  providers: [WebhookService],
})
export class WebhookModule {}
