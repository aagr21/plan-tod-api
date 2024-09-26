import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignInDto } from '@root/models/dto';
import { Credential } from '@root/models/entities';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  
  constructor(
    @InjectRepository(Credential)
    private readonly credentialsRepository: Repository<Credential>,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto) {
    const { password } = signInDto;
    const credential = await this.credentialsRepository.findOne({
      where: {
        password,
      },
      relations: {
        institution: true,
      },
    });
    if (!credential) throw new UnauthorizedException();
    const token = this.jwtService.sign(
      {
        data: {
          credential,
        },
      },
      {
        expiresIn: '7d',
      },
    );
    return {
      message: 'Successful Login',
      data: {
        token,
        type: 'JWT',
      },
    };
  }
}
