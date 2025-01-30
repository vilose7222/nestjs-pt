import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  // 생성자 : 생성자 인자로 UserService를 받아서 
  // UserController에서 UserService를 사용할 수 있도록 의존성 주입
  constructor(private readonly userService : UserService) {}
  
  @Get('/main')
  async getMainPage() {
    return this.userService.getMainPage();
  }
}
