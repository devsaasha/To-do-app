// dismiss......

const setAlert=(msg,type ='danger') =>{
    return`<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn-close"></button></p>`
};



//  * get all LS data
//  * @paran {*}key
//  * 

const readLSData = (key) =>{
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));
    }else{
        return false;
    }
   
}



/* set value Ls*/ 
const createLSData = (key, value) =>{
     // init value
    let data = [];

    // check key exists or not
    if( localStorage.getItem(key)){
        data = JSON.parse(localStorage.getItem(key));
    }
    // now push data to LS
    data.push(value);
    // set data
    localStorage.setItem(key, JSON.stringify(data));
}