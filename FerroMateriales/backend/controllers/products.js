const Producto = require("../models/products");

exports.getProducts = (req, res) => {
    Producto.find().then((productoResult) => {
        res.status(200).json(productoResult);
    });
};

exports.addProduct = (req, res) => {
    const productoAdd = new Producto({
        producto: req.body.producto,
        unidades: req.body.unidades,
        precioUnitario: req.body.precioUnitario,
        valorTotal: req.body.valorTotal,
        fecha: req.body.fecha,
        estado: req.body.estado,
    });
    productoAdd.save().then((createdProduct) => {
        console.log(createdProduct);
        res.status(200).json("Creado satisfactoriamente");
    });
};

exports.updateProduct = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        Object.assign(producto, req.body);
        res.send({ data: producto });
        producto.save();
    } catch {
        res.status(500).send({ error: "No se encuentra el producto" });
    }
};

exports.deleteProduct = (req, res) => {
    Producto.findByIdAndRemove(req.params.id).then(Producto => {
        if (!Producto) {
            return res.status(200).send({
                message: "No se pudo encontrar Producto con ID " + req.params.id
            });
        }
        res.status(200).send({ message: "Producto eliminado con éxito" });
    }).catch(err => {
        return res.status(500).send({
            message: "No se pudo eliminar el Producto con ID " + req.params.id
        });
    });
};