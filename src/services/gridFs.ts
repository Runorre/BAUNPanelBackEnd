import mongoose from 'mongoose';
import Grid from 'gridfs-stream';

let gfs: Grid.Grid;

export function initGridFS() {
    const database = mongoose.connection;
    gfs = Grid(database.db as any, mongoose.mongo);
    gfs.collection('uploads');
    console.log('[Database] GridFS initialized !');
}

export function getGFS() {
    if (!gfs) throw new Error('[Database] GridFS not initialized !');
    return gfs;
}
