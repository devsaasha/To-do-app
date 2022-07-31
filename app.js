/* GEt element*/ 
const product_form =document.getElementById('product_form');
const product_list =document.getElementById('product_list');
const msg =document.querySelector('.msg');

// get all products
const getAllProducts = () =>{
    // get all LS Data
    const data = readLSData('product');
    // validate
    if( !data){
        product_list.innerHTML=`<tr>
        <td colspan="7" class="text-center">No Product found</td>
        </tr>`
    }
    // show all data to list
    if(data){
        // init val
        let list ='';
        // loop for data
    data.map((item, index)=> {
        list+=`
        <tr>
                                    <td>${index+1}</td>
                                    <td><img style="width: 60px; height: 60px; object-fit: cover;" src="${item.photo}" alt=""></td>
                                    <td>${item.name}</td>
                                    <td>${item.price}</td>
                                    <td>${item.quantity}</td>
                                    <td>${item.price * item.quantity}BDT</td>
                                    <td>
                                        <a class="btn btn-info btn-sm"  href=""> <i class="fas fa-eye"></i></a>
                                        <a class="btn btn-warning btn-sm"  href=""> <i class="fas fa-edit"></i></a>
                                        <a class="btn btn-danger btn-sm"  href=""> <i class="fas fa-trash"></i></a>
                                    </td>
                                </tr>`
    }
            ) ;
            product_list.innerHTML=list;

        
    }
}



// submit form
product_form.onsubmit = (e) => {
    e.preventDefault();
    let form_data =new FormData(e.target);
    // {name,price,quantity,photo}
    let productData=Object.fromEntries(form_data.entries());
    let {name,price,quantity,photo}=Object.fromEntries(form_data.entries());

    // // init value
    // const data = [];

    // /form validation/ 
    
    if(!name || !price || !quantity || !photo){
        msg.innerHTML= setAlert('All field are required');
    }else{

        createLSData('product',productData);
        // data.push(
        //     {
        //         name : name,
        //         price : price,
        //         quantity : quantity,
        //         photo : photo
                
        //     }
        // )
        msg.innerHTML= setAlert('Data stable', 'success');
        e.target.reset();
    };
};
