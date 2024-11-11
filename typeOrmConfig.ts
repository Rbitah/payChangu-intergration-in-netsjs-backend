import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Cart } from "src/cart/entities/cart.entity";
import { Payment } from "src/payments/entities/payment.entity";
import { User } from "src/user/entities/user.entity";
import { Webhooks } from "src/webhook/entities/webhook.entity";


export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test',
    entities: [ User,Cart,Webhooks,Payment],
    synchronize: false,
    logging:true
  };
  