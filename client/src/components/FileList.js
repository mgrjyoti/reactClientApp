import React from 'react';

const FileList = ({ files }) => {
    return (
        <ul>
            {files.map(file => (
                <li key={file._id}><a href={file.url}>{file.filename}</a></li>
            ))}
        </ul>
    );
};

export default FileList