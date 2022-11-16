import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('example middleware')
    console.log(req.headers.authorization)
    const { authorization } = req.headers
    if (!authorization) throw new HttpException('No Authorization token', HttpStatus.FORBIDDEN)
    if (authorization === 'Bearer abcde') {

      next();
    } else {
      throw new HttpException('Invalid Authorization token', HttpStatus.FORBIDDEN)

    }
  }
}
