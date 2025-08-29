import React,{useState} from 'react';
import productService from '../service/product.service';

const AddProduct = () => {
  
    const [product,setProduct]=useState({
        name:"",
        description:"",
        price:"",
        quantity:"",
        status:""
    });

    const handleChange=(e)=>{
        const value=e.target.value;
        setProduct({...product,[e.target.name]:value});
    };

    const [msg, setMsg] = useState(""); 

    const ProductRegister=(e)=>{
        e.preventDefault();

        productService.saveProduct(product).then((response)=>{
            console.log("Product data added successfully");
            setMsg("Product data added successfully");
            setProduct({
                name:"",
                description:"",
                price:"",
                quantity:"",
                status:""
            });
        }).catch((error)=>{
            console.log(product);
        });
    };


  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header fs-3 text-center">
              Add Product
            </div>
            {
                msg && 
                
                <p className='fs-4 text-center text-success'>{msg}</p>
            }
            <div className="card-body">
              <form onSubmit={(e)=>ProductRegister(e)}>
                <div className="mb-3">
                  <label htmlFor="name">Enter Product Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    onChange={(e)=>handleChange(e)}
                    value={product.name}/>
                </div> 
                <div className="mb-3">
                  <label htmlFor="productPrice">Enter Product Price</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    className="form-control"
                    onChange={(e)=>handleChange(e)}
                    value={product.price}/>
                </div> 
                <div className="mb-3">
                  <label htmlFor="description">Enter Description</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    className="form-control"
                    onChange={(e)=>handleChange(e)}
                    value={product.description}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="quantity">Enter Quantity</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control"
                    onChange={(e)=>handleChange(e)}
                    value={product.quantity}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="status">Enter Product Status</label>
                  <input
                    type="text"
                    id="status"
                    name="status"
                    className="form-control"
                    onChange={(e)=>handleChange(e)}
                  value={product.status}/>
                </div> 

                <button type="submit" className="btn btn-primary col-md-12">
                  Submit
                </button> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
