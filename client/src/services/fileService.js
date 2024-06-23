import axios from 'axios';

const API_URL = '/api/files';

const uploadFile = async (file, token) => {
    const formData = new FormData();
    formData.append('file', file);

    await axios.post(API_URL, formData, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
};

const getFiles = async (token) => {
    const response = await axios.get(API_URL, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
};

export default {
    uploadFile,
    getFiles
};