import { Module, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // you can pass entire controller or you can pass a specific path, or you can pass multiple paths with optional parameters
    // consumer.apply(ExampleMiddleware).forRoutes(UsersController)
    consumer.apply(ExampleMiddleware).forRoutes(
      {
        path: 'users',
        method: RequestMethod.GET
      },
      {
        path: 'users/create',
        method: RequestMethod.GET
      },
      {
        path: 'users/:id',
        method: RequestMethod.GET
      }
    )
  }
}
