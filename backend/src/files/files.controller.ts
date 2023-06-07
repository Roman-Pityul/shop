import { Controller, Post, UseInterceptors, UploadedFile, Res, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/files')
@ApiTags('files')
export class FilesController {
  constructor(private filesService: FilesService) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(
    @Res() res, 
    @UploadedFile() file: Express.Multer.File, 
    @Query('folder') folder?: string) {
    this.filesService.saveFile(res, file, folder)
  }
}
