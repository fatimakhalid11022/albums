"use client"
import React from 'react';
import { CldUploadButton } from 'next-cloudinary';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type UploadResult ={
    info:{
    public_id:string
    }
    event:"success"
  }
  
function UploadButton() {
    const router = useRouter()
    return (
        
      <Button asChild>
               
            <CldUploadButton
                onUpload={(result: UploadResult )=>{
            //    return setImageId(result.info.public_id);
            setTimeout(()=>{
                console.log("refresh")
                router.refresh()
            },500)
                
                 }}
    
                uploadPreset="sjc6sysh" >
              
                <div className='flex gap-2 items-center'>
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
                        Upload
                        </div>
                        </CldUploadButton>
   
    </Button>
  
       
    );
}

export default UploadButton;
