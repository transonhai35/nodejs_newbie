module.exports = {

    mutipleMongooseToObject : (mongooseArrays => mongooseArrays.map(mongooseArrray => mongooseArrray.toObject())),

    mongooseToObject : (mongoose => mongoose ? mongoose.toObject() : mongoose)
}