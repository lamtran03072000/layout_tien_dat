import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { aboutVnService } from '../service/aboutVnService';
import { clsx } from 'clsx';
export default function TextEditer({ data, keySection, handleUpdateContent }) {
  const [hidden, setHidden] = useState(false);
  const handleEditContent = async () => {
    const dataContent = {
      idSection: keySection,
      contentSection: data,
    };
    const response = await aboutVnService.updateContent(dataContent);
    console.log('response: ', response);
  };
  return (
    <div className="relative">
      <button
        onClick={() => {
          handleEditContent();
        }}
        className={clsx(
          'bg-blue-600 text-white rounded px-1 absolute top-1/2 -right-10',
          hidden ? '' : 'hidden',
        )}
      >
        Lưu
      </button>
      <CKEditor
        editor={ClassicEditor}
        config={
          {
            // toolbar: ['bold', 'italic', '|'],
            // toolbar: ['', '', '|'],
          }
        }
        key={keySection}
        data={data}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          // console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          handleUpdateContent(keySection, data);
        }}
        onBlur={(event, editor) => {
          // setHidden(false);
        }}
        onFocus={(event, editor) => {
          // console.log('Focus.', editor);

          setHidden(true);
        }}
      />
    </div>
  );
}
