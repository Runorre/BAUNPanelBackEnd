import { GridFsStorage } from 'multer-gridfs-storage';
import multer from 'multer';

const mongoURI = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}:27017`;

const storage = new GridFsStorage({
    url: mongoURI,
    file: (_req, file) => ({
        filename: file.originalname,
        bucketName: 'uploads',
    }),
});

export const uploadGrid = multer({ storage: storage as unknown as multer.StorageEngine });