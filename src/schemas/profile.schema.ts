import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Card } from './card.schema';

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  firstName: number;

  @Prop({ required: true })
  lastName: string[];

  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }] })
  card: Card[];
}

export const CatSchema = SchemaFactory.createForClass(Profile);