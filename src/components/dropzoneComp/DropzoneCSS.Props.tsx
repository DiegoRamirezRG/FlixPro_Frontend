import { CSSProperties } from "react";

export const baseDropzoneStyle: CSSProperties = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#EBEDF6',
    borderStyle: 'dashed',
    backgroundColor: 'white',
    color: '#9295A3',
    outline: 'none',
    transition: '0.2s all ease-in-out',
    width: '100%',
    boxSizing: 'border-box',
    fontSize: 18,
    cursor: 'pointer',
    userSelect: 'none',
    height: '100%',
};

export const dropzoneFocusedStyle: CSSProperties = {
    borderColor: '#00C2FF'
};  

export const dropzoneAcceptStyle: CSSProperties = {
    borderColor: '#137B64',
    color: '#137B64',
};

export const dropzoneRejectStyle: CSSProperties = {
    borderColor: '#ff1744',
    color: '#ff1744',
};