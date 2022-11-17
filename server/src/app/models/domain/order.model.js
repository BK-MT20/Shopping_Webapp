const mongoose = require('mongoose')

const Order = mongoose.model(
    'Order',
    new mongoose.Schema({
        customerId: { type: String, required: true },
        status: { type: String, default: 'pending' },
        confirmByAdminId: { type: String, default: '' },
        declineReason: { type: String },
        totalAmount: { type: Number, required: true },
        products: [
            {
                id: mongoose.Schema.Types.ObjectId,
                quantity: { type: Number, required: true }
            }
        ],
    }, { timestamps: true })
        .method('toClient', function() {
            var obj = this.toObject();
            //Rename fields
            obj.id = obj._id;
            delete obj._id;

            obj.products = obj.products.map(p => {
                p.id = p._id;
                delete p._id;
                return p
            })
        
            return obj;
        })
)

mongoose.Schema

module.exports = Order