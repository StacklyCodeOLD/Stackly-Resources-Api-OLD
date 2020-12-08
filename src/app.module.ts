import { Module } from '@nestjs/common';
import { Configuration } from './config/config.keys';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { UserController } from './modules/user/user.controller';
import { RoleController } from './modules/rol/rol.controller';

@Module({
  imports: [ConfigModule],
  controllers: [UserController, RoleController],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
