import mongoose from "mongoose";
const { Schema } = mongoose;

interface DocumentAttrs {
  type: string;
  date: Date;
  documentUrl: string;
}

interface DocumentModel extends mongoose.Model<IDocument> {
  build(attrs: DocumentAttrs): IDocument;
}

interface IDocument extends mongoose.Document {
  type: string;
  date: Date;
  documentUrl: string;
  result: string;
  destinationCountry: string;
  destinationCity: string;
  travelDate: string
}

const DocumentSchema = new Schema<IDocument>(
  {
    type: {
      type: String,
    },
    date: {
      type: Date,
    },
    documentUrl: {
        type: String
    },
    result: {
        type: String
    },
    destinationCountry: {
        type: String
    },
    destinationCity: {
        type: String
    },
    travelDate: {
        type: String
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        (ret.id = ret._id), delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);


DocumentSchema.statics.build = (attrs: DocumentAttrs) => {
  return new Document(attrs);
};


const Document = mongoose.model<IDocument, DocumentModel>("Document", DocumentSchema);

export { Document };
