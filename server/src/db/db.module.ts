import { Module } from '@nestjs/common';
import { DBService } from './service/service.service';
import { CountryController } from './controller/country.controller';
import { CountryService } from './service/country.service';
import { HttpModule } from '@nestjs/axios';
import { FlyController } from './controller/fly.controller';
import { FlyService } from './service/flyService.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5
    })
  ],
  providers: [DBService, CountryService, FlyService],
  controllers: [CountryController, FlyController],
  exports: [DBService, CountryService, FlyService]
})
export class DbModule {}
