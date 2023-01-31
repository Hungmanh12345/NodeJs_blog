import methodOverride from 'method-override';
import mongoose from 'mongoose'
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema


const Course = new Schema({
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, required: true },
    level: {type: String},
  },{
    timestamps: true, 
  });

Course.plugin(mongooseDelete, { 
  deletedAt: true,
  overrideMethods: 'all',
})

export default mongoose.model('Course', Course);