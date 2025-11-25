'use client';
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const FileUpload = () => {

    const [preview, setPreview] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const upload = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append('file', file);
        fd.append('upload_preset', 'MERN_6:30')
        fd.append('cloud_name', 'dzjjvydkz')

        axios.post('https://api.cloudinary.com/v1_1/dzjjvydkz/image/upload', fd)
            .then((result) => {
                toast.success('Image uploaded successfully');
                console.log(result.data);
                setPreview(result.data.url);
                setImageUrl(result.data.url);
            }).catch((err) => {
                toast.error('Error while uploading image');
                console.log(err);
            });
    }

    return (
        <div className='flex flex-col items-center py-20 gap-5'>
            <h1 className='text-5xl'>File Upload</h1>

            <label htmlFor="fileUpload" className='text-2xl mt-20'>Upload Image File Here</label>
            <input type="file" id="fileUpload" onChange={upload} className='p-6 bg-amber-300' />

            {
                preview && (
                    <div className='space-y-10'>
                        <img src={preview} alt="" className='rounded-full w-40 h-40 mx-auto' />
                        <p>Image URL : {imageUrl}</p>
                    </div>
                )
            }

        </div>
    )
}

export default FileUpload;