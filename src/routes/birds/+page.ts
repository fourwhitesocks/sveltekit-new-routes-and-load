//new pageload thing from Skit docs pageload
import type { PageServerLoad } from './$types';

export const load: PageServerLoad () => {

    //like get post from database
    const post = {

        content: `
            <h1>Hello there</h1>
            <p>This data came from the page</p>
        `,

    }
    return { post }
}

