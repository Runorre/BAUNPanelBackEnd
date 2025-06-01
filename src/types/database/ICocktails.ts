import { Types } from 'mongoose';
import { IReceipt } from '../subInterface/IReceipt';

export interface ICocktails {
    _id: Types.ObjectId;
    name: string;
    icon : Types.ObjectId;
    receipt : [IReceipt];
    price : string;
}
