import React, { useState, useEffect } from 'react';
import FileUpload from '../components/FileUpload';
import FileList from '../components/FileList';
import fileService from '../services/fileService';

const HomePage = ({ token }) => {
    const [files, setFiles] = useState([]);

    const fetchFiles = async () => {
        const files = await fileService.getFiles(token);
        setFiles(files);
    };

    useEffect(() => {
        fetchFiles();
    }, [token]);

    return (
        <div>
            <h1>File Manager</h1>
            <FileUpload token={token} refreshFiles={fetchFiles} />
            <FileList files={files} />
        </div>
    );
};

export default HomePage;