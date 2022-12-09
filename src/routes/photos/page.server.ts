
export const load = async ({ fetch }) => {
    const response = await fetch("https://api.smugmug.com/api/v2/image/ksjGKKg-0!sizedetails?APIkey=T2f5mgbQnwD2WKpDmHM39Qp9W7PRqjQ2");
    const ImageSizeDetails = await response.json();
    //const details = ImageSizeDetails;

    console.log(ImageSizeDetails);

    return {
        ImageSizeDetails: ImageSizeDetails
    }

};



/* export async function load({ data }) {
    const response = await fetch('https://api.smugmug.com/api/v2/image/ksjGKKg-0!sizedetails?APIkey=T2f5mgbQnwD2WKpDmHM39Qp9W7PRqjQ2');

    const ImageSizeDetails = await response.json();
    console.log(ImageSizeDetails)

    return {

        ImageSizeDetails: ImageSizeDetails
        //you can do it like above or just say users instead of users: users like i have it here
    }


} */



