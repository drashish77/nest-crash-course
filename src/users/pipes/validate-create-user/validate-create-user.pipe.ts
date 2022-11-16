import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('inside ValidateCreateUserPipe')
    console.log({ value, metadata });
    const parseAgeToInt = parseInt(value.age.toString())
    if (isNaN(parseAgeToInt)) {
      console.log(`${value.age} is not a number`)
      throw new HttpException('Invalid data type number', HttpStatus.BAD_REQUEST)
    }
    return { ...value, age: parseAgeToInt };
  }
}
