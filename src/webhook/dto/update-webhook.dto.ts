import { PartialType } from '@nestjs/mapped-types';
import { WebhookDto } from './create-webhook.dto';

export class UpdateWebhookDto extends PartialType(WebhookDto) {}
