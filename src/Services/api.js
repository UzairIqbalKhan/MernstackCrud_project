
import axio from 'axios';


const URL =`http://localhost:8000`;

export const addUser=async(data)=>{
    try {
        return await axio.post(`${URL}/add`,data);
    } catch (error) {
        console.log('Error when fatching Api from AddUser',error);
    }
}


export const getUsers=async()=>{
    try {
        return await axio.get(`${URL}/all`);
    } catch (error) {
        console.log('Error when fatching getUsers Api from GetUsers',error);
    }
}


export const getUser= async(id)=>{
    try {
        return await axio.get(`${URL}/${id}`)
    } catch (error) {
        console.log("Error while  getUser  calling Api",error);
    } 
}


export const editUser=async(user,id)=>{
    try {
        return await axio.post(`${URL}/${id}`,user);
    } catch (error) {
        console.log("Errro while using calling Api edit",error)
    }
}
 
 export const deleteUser=async(id)=>{
    try {
         
        return await axio.delete(`${URL}/${id}`);

    } catch (error) {
        console.log("Errro while using calling  Api delete",error);
    }

}  