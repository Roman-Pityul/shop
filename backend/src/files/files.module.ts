import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { path } from 'app-root-path';
import { MongooseModule } from '@nestjs/mongoose';
import { Files, FilesSchema } from './schema/files.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Files.name, schema: FilesSchema}]),
    ServeStaticModule.forRoot({
      rootPath: `${path}/uploads`,
      serveRoot: '/uploads'
    })
  ],
  providers: [FilesService],
  controllers: [FilesController]
})
export class FilesModule {}
