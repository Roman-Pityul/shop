import { Controller, Post, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/files')
@ApiTags('files')
export class FilesController {
  constructor(private filesService: FilesService) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(@Res() res, @UploadedFile() file: Express.Multer.File) {
    this.filesService.saveFile(res, file)
  }
}
