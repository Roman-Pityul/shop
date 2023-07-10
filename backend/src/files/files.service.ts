import { InjectModel } from '@nestjs/mongoose';
import { Files, FilesDocument } from './schema/files.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { FilesDto } from './dto/files.dto';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
import {v4 as uuid} from 'uuid'


@Injectable()
export class FilesService {
  constructor(@InjectModel(Files.name) private filesModel: Model<FilesDocument> ) {}

  async saveFile(res, file: Express.Multer.File, folder: string = 'default'): Promise<FilesDto> {
    const fileName = `${uuid()}-${file.originalname}`
    const uploadFolder = `${path}/uploads/${folder}`
    await ensureDir(uploadFolder)
    try{
      await writeFile(`${uploadFolder}/${fileName}`, file.buffer)
      const resp = await this.filesModel.create({
      fileName: `${fileName}`,
      fileLink: `uploads/${folder}/${fileName}`
      })
      return res.status(200).json({res: resp, message: 'Файл успешно загружен.'})
    }catch (e) {
      return res.status(500).json({error: e, message: "Что-то пошло не так...."})
    }
  }
}
