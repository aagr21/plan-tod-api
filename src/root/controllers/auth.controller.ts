import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '@root/services';
import { SignInDto } from '@root/models/dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }
}
