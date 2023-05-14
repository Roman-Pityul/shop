import { InjectModel } from '@nestjs/mongoose';
import { Files, FilesDocument } from './schema/files.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { FilesDto } from './dto/files.dto';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';

@Injectable()
export class FilesService {
  constructor(@InjectModel(Files.name) private filesModel: Model<FilesDocument> ) {}

  async saveFile(res, file: Express.Multer.File): Promise<FilesDto> {
    const uploadFolder = `${path}/uploads`
    await ensureDir(uploadFolder)
    await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer)
    const resp = this.filesModel.create({
      fileName: `${file.originalname}`,
      fileLink: `uploads/${file.originalname}`
    })
    return res.status(200).json({
      resp
    })
  }
}
