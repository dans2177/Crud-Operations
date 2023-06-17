const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

const schemaData = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
}, {timestamps: true});

const userModel = mongoose.model('user', schemaData);

// get data from database
app.get('/', async (req, res) => {
  const data= await userModel.find({

  });
    res.json({sucess: true, data: data});

})

// create data in database
app.post('/create', async (req, res) => {
  console.log(req.body)
  const data = new userModel(req.body);
  await data.save();

  res.send({sucess: true, message: 'data received', data : data});
})

//update data in database
app.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const data = await userModel.updateOne({ _id: id }, req.body);
  res.send({ sucess: true, message: "data updated", data: data });
});

//delete data in database
app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await userModel.deleteOne({_id: id});
  res.send({sucess: true, message: 'data deleted', data: data});
});

mongoose.connect(
  "mongodb+srv://daniel:daniel123@crud.zzf7one.mongodb.net/crudop",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});
mongoose.connection.on("error", (err) => {
  console.log("error", err);
});


app.listen(PORT, () => {
    console.log('listening on port ' + PORT);});
