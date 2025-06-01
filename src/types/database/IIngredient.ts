import { Types } from 'mongoose';
import { StockageType } from '../enum/enumStockageType';

export interface IIngredient {
    _id: Types.ObjectId;
    name: string;
    icon : Types.ObjectId;
    stockage : StockageType;
}
