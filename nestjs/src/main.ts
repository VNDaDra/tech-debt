import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BenchmarkInterceptor } from './interceptors/benchmark.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new BenchmarkInterceptor());

  const config = new DocumentBuilder()
  .setTitle('Tech Debt')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
