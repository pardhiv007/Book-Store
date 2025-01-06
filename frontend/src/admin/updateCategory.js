import React,{useState,useEffect} from 'react'
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import { Link,useParams } from 'react-router-dom';
import productImg from '../images/addProduct.png';
import { createCategory, getCategory ,updateCategory} from './helper/adminapicall';

const UpdateCategory=() =>{
    const params = useParams();

    const [values,setValues]=useState({
        name:"",
        success:false,
        error:false
    })
    // const [name,setName]=useState("")
    // const[error,setError]=useState(false)
    // const [success,setSuccess]=useState(false)
    const{name,success,error}=values
    const {user,token}=isAuthenticated()

    const preload = (categoryId) => {
        getCategory(categoryId).then(data => {
          //console.log(data);
          if (data.error) {
            setValues({ ...values, error: data.error });
          } else {
            //preloadCategories();
            setValues({
              ...values,
              name: data.name,
            });
          }
        });
      };
      
    //   const preloadCategories = () => {
    //     getCategories().then(data => {
    //       if (data.error) {
    //         setValues({ ...values, error: data.error });
    //       } else {
    //         setValues({
    //           categories: data,
    //           formData: new FormData()
    //         });
    //       }
    //     });
    //   };
      
      useEffect(() => {
        preload(params.categoryId);
      }, []);
      


    const successMessage = () => {
        if (success) {
          return <h4 className="text-success">Category updated successfully</h4>;
        }
      };
    
    const warningMessage = () => {
        if (error) {
          return <h4 className="text-success">Failed to update category</h4>;
        }
    };
    const goBack = () => (
        <div className="mt-5">
          <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
            Admin Home
          </Link>
        </div>
    );

    const handleChange = event => {
        setValues({...values,name:event.target.value});
      };
    
      const onSubmit = event => {
        event.preventDefault();
        setValues({...values,error:"",success:false});
    
        //backend request fired
        console.log(values)
        updateCategory(params.categoryId,user._id, token, values).then(data => {
          if (data.error) {
            setValues({ ...values, error: data.error });
          } else {
            setValues({
                ...values,
                name:"",
                error:"",
                success:true

            })
          }
        });
      };

    const myCategoryForm=()=>(
    <form>
      <div className="form-group">
        <p className="lead">Enter the category</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={name}
          autoFocus
          required
          placeholder="For Ex. Summer"
        />
        <button onClick={onSubmit} className="btn btn-outline-info">
          Update Category
        </button>
      </div>
    </form>
    )

  return (
    <Base title='Update a category here'
     description='update a new category for new books'
     className='container bg-info p-4'
     imageSrc= {productImg}
    imageAlt="Product Image"
    imageWidth={2500}
    imageHeight={300}
    >
        <div className='row bg-white rounded'>
            <div className='col-md-8 offset-md-2'>
                {successMessage()}
                {warningMessage()}
                {myCategoryForm()}
                {goBack()}
            </div>
        </div>
    </Base>
  );
}

export default UpdateCategory;
