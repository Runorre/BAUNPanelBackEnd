import { Types, Document } from 'mongoose';
import { StockageType } from '../enum/enumStockageType';

export interface IIngredient extends Document {
    name: string;
    icon : Types.ObjectId;
    stockage : StockageType;
}
