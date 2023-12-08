import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BenchmarkInterceptor } from './interceptors/benchmark.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn']
  });
  const configService = new ConfigService();

  app.useGlobalInterceptors(new BenchmarkInterceptor());

  const config = new DocumentBuilder()
  .setTitle('Tech Debt')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = configService.get<number>('PORT');
  console.log(`Listening on ${port}`);
  await app.listen(port);
}
bootstrap();
