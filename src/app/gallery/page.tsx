import UploadButton from './upload_button';
import cloudinary from "cloudinary"
import CloudinaryImage from "../../components/cloudinaryImage"
import ImageGrid from '@/components/image-grid';
import GalleryGrid from './gallerygrid';

export type SearchResult = {

    public_id:string;
    tags:string[]
}


export default async function GalleryPage() {
    const results = await cloudinary.v2.search
         .expression("resource_type:image")
         .sort_by("created_at","desc")
         .with_field("tags")
         .max_results(30)
         .execute() as {resources:SearchResult[]}
           

       
    return (
        <section>
            <div className='flex flex-col gap-8'>
            <div className='flex justify-between'>
            <h1 className='text-4xl font-bold'>Gallery</h1>
           <UploadButton 
           />
           </div>
           <GalleryGrid 
           images={results.resources}
           />
             
            </div>
        </section>
    );
}

 