import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './produto/produto.module';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { ProductStoreController } from './product-store/product-store.controller';
import { ProductStoreService } from './product-store/product-store.service';
import { ProductStoreModule } from './product-store/product-store.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [ProdutoModule, DbModule, ConfigModule.forRoot({
    isGlobal: true,
  }), ProductStoreModule, StoreModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
