import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

// export class AObject {
//   @Prop({ type: String, required: true })
//   originalLink: string;

//   @Prop({ type: String, required: true, unique: 1 })
//   cutLink: string;

//   @Prop({ type: String, required: true, unique: 1 })
//   a: string;
// }
// export const AObjectSchema = SchemaFactory.createForClass(AObject);

export class LinkObject {
  @Prop({ type: String, required: true })
  originalLink: string;

  @Prop({ type: String, required: true, unique: 1 })
  cutLink: string;

  // @Prop({ type: AObjectSchema, required: true, unique: 1 })
  // a: AObject;
}

export const LinkObjectSchema = SchemaFactory.createForClass(LinkObject);

@Schema({ collection: 'links' })
export class Links {
  @Prop({ type: Types.ObjectId, required: true })
  userId: Types.ObjectId;

  @Prop({ type: Date, required: true, expires: 1 })
  expiredAt: Date;

  @Prop({ type: LinkObjectSchema, required: true })
  link: LinkObject;
}

export const LinksSchema = SchemaFactory.createForClass(Links);

export type LinksLeanDoc = Links & { _id: Types.ObjectId };
export type LinksDoc = Links & Document;
