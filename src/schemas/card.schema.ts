import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Profile } from './profile.schema';

export type CardDocument = Card & Document;

@Schema()
export class Card {
  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  textColor: string;

  @Prop()
  logoPath: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }] })
  card: Profile;
}

export const CatSchema = SchemaFactory.createForClass(Card);