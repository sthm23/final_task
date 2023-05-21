import { Module } from '@nestjs/common';
import { DBService } from './service/service.service';
import { CountryController } from './controller/country.controller';
import { CountryService } from './service/country.service';
import { HttpModule } from '@nestjs/axios';
import { FlyController } from './controller/fly.controller';
import { FlyService } from './service/flyService.service';
import { AirportService } from './service/airport.service';
import { AirportController } from './controller/airport.controller';
import { UserInfoController } from './controller/user-info.controller';
import { UserInfoService } from './service/user-info/user-info.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5
    })
  ],
  providers: [DBService, CountryService, FlyService, AirportService, UserInfoService],
  controllers: [CountryController, FlyController, AirportController, UserInfoController],
  exports: [DBService, CountryService, FlyService, AirportService, UserInfoService]
})
export class DbModule {}
