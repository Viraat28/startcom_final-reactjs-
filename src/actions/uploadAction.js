import * as UploadApi from '../API/UploadRequest.js'

export const uploadImage=(data)=>async(dispatch)=>{
    try {
        await UploadApi.uploadImage(data)
    } catch (error) {
        console.log(error)
    }
}