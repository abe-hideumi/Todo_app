import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	
	// CORS設定を追加
	app.enableCors({
		origin: 'http://localhost:5173',
		credentials: true,
	});
	
	await app.listen(3000);
	console.log(`Application is running on: http://localhost:3000/graphql`);
}
bootstrap();