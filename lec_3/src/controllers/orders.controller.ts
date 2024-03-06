import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from '../service';
import { OrderDto } from '../models';

@Controller({ path: '/orders' })
export class OrdersController {
  constructor(private readonly orderService: OrderService) {}

  @Post('/')
  async createOrder(@Body() body: OrderDto) {
    try {
      const order = await this.orderService.createOrder(body);
      return order;
    } catch (err) {
      throw err;
    }
  }
}
