import { dirStat, deleteFile } from '$lib/fsutils';

export async function get({ params }) {
    const { sub } = params;
    return {
        status: 200,
        body: dirStat(sub)
    }
}

export async function del({ params }) {
    const { sub } = params;
    const response = await deleteFile(sub)
    let status = 200;
    if (response.true) {
        status = 500
    }
    return {
        status: status,
        body: {
            response
        }
    }

}