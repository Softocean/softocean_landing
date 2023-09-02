'use client';
import React from 'react';
import Image from 'next/image';
import ClipIcon from '@/../assets/icons/clip.svg';

function FileInput() {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [preview, setPreview] = React.useState<string | null>(null); //пока что изображение в стейте (нужно будет вытащить в хук форм)

  const onFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    const file = URL.createObjectURL(e.target.files[0]);
    URL.revokeObjectURL(preview ?? 'null');
    setPreview(file);
  };

  React.useEffect(() => {
    //достать из контекста изображение (ну или где мы будем его хранить для формы)
    return () => {
      URL.revokeObjectURL(preview ?? 'null');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col">
      <label className="flex flex-row items-center gap-2 cursor-pointer" htmlFor="files">
        <div>
          <ClipIcon />
        </div>
        <div className="flex flex-col">
          <p className="text-black text-sm font-light">Прикрепить файл</p>
          <span className="text-lightdark font-light text-sm-12">До 5Мб</span>
        </div>
      </label>
      <div className="flex flex-row items-center gap-3 mt-4">
        {preview && <Image src={preview} width={72} height={52} alt="preview" />}
        <div className="flex flex-col">
          <input
            ref={fileInputRef}
            onChange={(e) => {
              onFileSelected(e);
            }}
            className="block file:hidden text-base"
            id="files"
            type="file"
            accept=".png,.jpg,.webp,.avif,.jpeg"
          />
          {preview && (
            <span
              className="text-sm text-lightdark font-light cursor-pointer"
              onClick={() => {
                if (fileInputRef.current) {
                  fileInputRef.current.value = '';
                }
                URL.revokeObjectURL(preview);
                setPreview('');
              }}>
              Удалить
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileInput;
