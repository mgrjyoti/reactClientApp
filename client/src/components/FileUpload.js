import React, { useState } from 'react';
import fileService from '../services/fileService';

const FileUpload = ({ token, refreshFiles }) => {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        await fileService.uploadFile(file, token);
        refreshFiles();
    };

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FileUpload;