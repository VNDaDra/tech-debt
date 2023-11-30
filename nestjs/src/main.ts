import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BenchmarkInterceptor } from './interceptors/benchmark.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new BenchmarkInterceptor());
  await app.listen(3000);
}
bootstrap();
