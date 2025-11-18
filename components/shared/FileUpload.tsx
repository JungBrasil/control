
import React, { useCallback, useState } from 'react';

interface FileUploadProps {
  onFilesSelected: (files: File[]) => void;
  acceptedFileTypes?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFilesSelected, acceptedFileTypes }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleFiles = useCallback((selectedFiles: FileList | null) => {
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles(prevFiles => {
        const updatedFiles = [...prevFiles, ...newFiles];
        onFilesSelected(updatedFiles);
        return updatedFiles;
      });
    }
  }, [onFilesSelected]);

  // FIX: Changed event type from React.DragEvent<HTMLDivElement> to React.DragEvent<HTMLLabelElement>
  const onDragEnter = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  // FIX: Changed event type from React.DragEvent<HTMLDivElement> to React.DragEvent<HTMLLabelElement>
  const onDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  // FIX: Changed event type from React.DragEvent<HTMLDivElement> to React.DragEvent<HTMLLabelElement>
  const onDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // FIX: Changed event type from React.DragEvent<HTMLDivElement> to React.DragEvent<HTMLLabelElement>
  const onDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const removeFile = (index: number) => {
    setFiles(prevFiles => {
      const updatedFiles = prevFiles.filter((_, i) => i !== index);
      onFilesSelected(updatedFiles);
      return updatedFiles;
    });
  };

  const clearFiles = () => {
    setFiles([]);
    onFilesSelected([]);
  };

  return (
    <div className="w-full">
      <label
        htmlFor="file-upload"
        className={`relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-300
        ${isDragging ? 'border-sky-500 bg-sky-50' : 'border-slate-300 bg-slate-50 hover:bg-slate-100'}`}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
            <svg className="w-10 h-10 mb-4 text-slate-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/></svg>
            <p className="mb-2 text-sm text-slate-500">
                <span className="font-semibold">Clique para enviar</span> ou arraste e solte
            </p>
            <p className="text-xs text-slate-500">PDF, DOCX, PNG, JPG (Qualquer tipo de documento)</p>
        </div>
        <input id="file-upload" type="file" className="hidden" multiple onChange={onFileChange} accept={acceptedFileTypes} />
      </label>

      {files.length > 0 && (
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-slate-700">Documentos Selecionados:</h4>
            <button onClick={clearFiles} className="text-sm text-red-600 hover:text-red-800 font-medium">Limpar Tudo</button>
          </div>
          <ul className="space-y-2 max-h-48 overflow-y-auto pr-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between p-2 bg-white rounded-md shadow-sm border border-slate-200">
                <span className="text-sm text-slate-800 truncate pr-4">{file.name}</span>
                <button onClick={() => removeFile(index)} className="text-slate-400 hover:text-red-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
