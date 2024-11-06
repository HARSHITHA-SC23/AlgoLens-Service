import { Module } from '@nestjs/common';
import { LscController } from './lsc.controller';
import { LscService } from './lsc.service';

@Module({
  controllers: [LscController],
  providers: [LscService]
})
export class LscModule {}
