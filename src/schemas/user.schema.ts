import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Profile } from './profile.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }] })
  profile: Profile[];
}

export const UserSchema = SchemaFactory.createForClass(User);