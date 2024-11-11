// src/webhook.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Webhooks } from './entities/webhook.entity';
import { WebhookDto } from './dto/create-webhook.dto';

@Injectable()
export class WebhookService {
  constructor(
    @InjectRepository(Webhooks)
    private readonly webhookRepository: Repository<Webhooks>,
  ) {}

  async saveWebhook(webhookDto: WebhookDto): Promise<Webhooks> {
    const webhook = this.webhookRepository.create(webhookDto);
    return await this.webhookRepository.save(webhook);
  }
}
