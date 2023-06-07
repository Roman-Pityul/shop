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

  async saveFile(res, file: Express.Multer.File, folder: string = 'default'): Promise<FilesDto> {
    console.log('folder', folder)
    const uploadFolder = `${path}/uploads/${folder}`
    await ensureDir(uploadFolder)
    try{
      await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer)
      const resp = await this.filesModel.create({
      fileName: `${file.originalname}`,
      fileLink: `uploads/${file.originalname}`
      })
      return res.status(200).json({res: resp, message: 'Файл успешно загружен.'})
    }catch (e) {
      return res.status(500).json({error: e, message: "Что-то пошло не так...."})
    }
  }
}
