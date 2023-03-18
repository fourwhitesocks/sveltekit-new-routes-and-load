import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {


    const response = await fetch('https://api.smugmug.com/api/v2/image/ksjGKKg-0!sizedetails?APIkey=T2f5mgbQnwD2WKpDmHM39Qp9W7PRqjQ2', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify({
            query,
            variables

        })
    });




    const { data: responseData }: { data: Query } = await response.json();

    return { ...responseData };
}


//import type { RequestHandler } from "@sveltejs/kit";

export const get = async ({ fetch }) => {
    const response = await fetch("https://api.smugmug.com/api/v2/image/ksjGKKg-0!sizedetails?APIkey=T2f5mgbQnwD2WKpDmHM39Qp9W7PRqjQ2");

    const ImageSizeDetails = await response.json();

    console.log(ImageSizeDetails);

    return {
        ImageSizeDetails: ImageSizeDetails
    }
}





/* export const load = async ({ fetch }) => {
    const response = await fetch("https://api.smugmug.com/api/v2/image/ksjGKKg-0!sizedetails?APIkey=T2f5mgbQnwD2WKpDmHM39Qp9W7PRqjQ2");
    const ImageSizeDetails = await response.json();
    //const details = ImageSizeDetails;

    console.log(ImageSizeDetails);

    return {
        ImageSizeDetails: []
    }

}; */












