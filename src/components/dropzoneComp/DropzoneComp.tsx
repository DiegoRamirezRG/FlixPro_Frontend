import { useMemo } from 'react'
import './DropzoneStyle.scss'
import { useDropzone } from 'react-dropzone';
import { baseDropzoneStyle, dropzoneAcceptStyle, dropzoneFocusedStyle, dropzoneRejectStyle } from './DropzoneCSS.Props';
import { IoCloudUpload } from 'react-icons/io5';
import { TbDragDrop } from 'react-icons/tb';
import { MdNearbyError } from 'react-icons/md';

interface DropzoneProps{
    onDrop: any;
    label: string;
}

export const DropzoneComp = ({ onDrop, label }: DropzoneProps) => {

    const {getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, isDragActive} = useDropzone({
        accept: { 'image/*': [] },
        onDrop
    });

    const propsStyle = useMemo(()=> ({
        ...baseDropzoneStyle,
        ...(isFocused ? dropzoneFocusedStyle : {}),
        ...(isDragAccept ? dropzoneAcceptStyle : {}),
        ...(isDragReject ? dropzoneRejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    return (
        <section className='dropzone_container'>
            <label>{label}</label>
            <div {...getRootProps()} style={{...propsStyle}}>
                <input {...getInputProps()} />
                {
                    isDragActive 
                    ?   isDragReject
                        ?   <div className="dropzone_render">
                                <MdNearbyError size={50}/>
                                <p>Archivo no valido</p>
                            </div>
                        :   <div className="dropzone_render">
                                <TbDragDrop  size={50}/>
                                <p>Drop It Like It's Hot</p>
                            </div>
                    :   <div className="dropzone_render">
                            <IoCloudUpload size={50}/>
                            <button className='btn btn-secondary'>Seleccionar Archivo</button>
                            <p>or arrastra y suelta un archivo.</p>
                        </div>
                }
            </div>
        </section>
    )
}
