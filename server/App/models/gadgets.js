var GadgetSchema = new Schema({
	yoo: { type: String, required: true },
	hoo: { type: Number, required: true },
    YooHooID: { type: Schema.Types.ObjectId, required: true, ref: 'YooHooID' },
})
