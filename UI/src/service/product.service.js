import axios from "axios";

const API_URL = "http://localhost:8080";
    
class ProductService{
    saveProduct(product){
        return axios.post(API_URL+"/save-product",product);
    }

    getAllProducts(){
        return axios.get(API_URL+"/products");
    }

    getProductById(id){
        return axios.get(API_URL+"/product/"+id);
    }

    deleteProduct(id){
        return axios.delete(API_URL+"/product/"+id);
    }

    editProduct(product){
        return axios.put(API_URL+"/editProduct"+product.id,product);
    }


}

export default new ProductService();