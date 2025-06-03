import { Types, Document } from 'mongoose';
import { IReceipt } from '../subInterface/IReceipt';

export interface ICocktails extends Document {
    name: string;
    icon : Types.ObjectId;
    receipt : [IReceipt];
    price : string;
}
