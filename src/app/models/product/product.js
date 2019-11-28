const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const VariationAttribute = require('./variation_attribute');
const ImageGroup = require('./image_group');
const Variant = require('./variant');

const ProductSchema = new mongoose.Schema(
  {
    page_description: String,
    page_title: String,
    name: String,
    c_isNewtest: Boolean,
    price: Number,
    variation_attributes: [VariationAttribute],
    id: String,
    currency: String,
    master: {
      orderable: Boolean,
      price: Number,
      master_id: String,
    },
    primary_category_id: String,
    image_groups: [ImageGroup],
    c_isNew: Boolean,
    short_description: String,
    orderable: Boolean,
    variants: [Variant],
    type: {
      master: Boolean,
    },
    long_description: String,
    c_isSale: Boolean,
  },
  { collection: 'products' }
);

ProductSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', ProductSchema);
