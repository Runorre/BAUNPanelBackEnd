import { Types } from 'mongoose';
import { IIngredient } from '../database/IIngredient';

export interface IReceipt {
    ingredient : Types.ObjectId | IIngredient;
    amount : number;
}