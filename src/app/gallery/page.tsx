
"use client"
import React from 'react';
import { CldUploadButton } from 'next-cloudinary';
import { Button } from '@/components/ui/button';

type UploadResult ={
    info:{
    public_id:string
    }
    event:"success"
  }
  
function Gallery() {
    return (
        <section>
            <div className='flex justify-between'>
            <h1 className='text-4xl font-bold'>Gallery</h1>
            <Button asChild>
                <div className='flex gap-2'>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6">
             <path strokeLinecap="round" 
             strokeLinejoin="round" 
             d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" 
             />
            </svg>

            <CldUploadButton
    className="text-center"
    onUpload={(result: UploadResult )=>{
    //   return setImageId(result.info.public_id);
    }}
    
    uploadPreset="sjc6sysh" />
    </div>
    </Button>
            </div>
        </section>
    );
}

export default Gallery;