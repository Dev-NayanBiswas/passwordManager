import React from "react";

function Table({ data, handleCopy, onDelete, onEdit }) {
    const { name, email, password,id } = data;
    return (
        <>
            <tr className='border-b-[1px] border-gray-300 min-w-full'>
                <td className='py-3 border-[1px] border-white'>
                    {name}
                    <div
                        onClick={() => handleCopy(name)}
                        className='inline-flex justify-center items-center relative -bottom-1 cursor-pointer'>
                        <abbr title="Click to Copy">
                            <lord-icon
                                src="https://media.lordicon.com/icons/system/solid/126-verified.json"
                                trigger='hover'
                                colors='primary:#fff'
                                style={{ height: "20px" }}></lord-icon>
                        </abbr>
                    </div>
                </td>
                <td className='py-3 border-[1px] border-white'>
                    {email}
                    <div
                        onClick={() => handleCopy(email)}
                        className='inline-flex justify-center items-center relative -bottom-1 cursor-pointer'>
                        <abbr title="Click to Copy">
                            <lord-icon
                                src='https://media.lordicon.com/icons/system/solid/190-mail-envelope-open.json'
                                trigger='hover'
                                colors='primary:#fff'
                                style={{ height: "20px" }}></lord-icon>
                        </abbr>
                    </div>
                </td>
                <td className='py-3 border-[1px] border-white'>
                    {password}
                    <span
                        onClick={() => handleCopy(password)}
                        className='inline-flex justify-center items-center relative -bottom-1 cursor-pointer'>
                        <abbr title="Click to Copy">
                            <lord-icon
                                src='https://media.lordicon.com/icons/system/solid/152-sticky-note.json'
                                trigger='hover'
                                colors='primary:#fff'
                                style={{ height: "20px" }}></lord-icon>
                        </abbr>
                    </span>
                </td>
                <td className='py-3 border-[1px] border-white space-x-5'>
                    <span
                        onClick={()=>onEdit(id)}
                        className='inline-flex justify-center items-center relative -bottom-1 cursor-pointer'>
                        <abbr title="Click to Edit">
                            <lord-icon
                                src='https://media.lordicon.com/icons/system/solid/114-edit-pencil-rename.json'
                                trigger='hover'
                                colors='primary:#fff'
                                style={{ height: "20px" }}></lord-icon>
                        </abbr>
                    </span>
                    <span
                        onClick={()=>onDelete(id)}
                        className='inline-flex justify-center items-center relative -bottom-1 cursor-pointer'>
                        <abbr title="Click to Delete">
                            <lord-icon
                                src="https://media.lordicon.com/icons/system/solid/39-trash.json"
                                trigger='hover'
                                colors='primary:#fff'
                                style={{ height: "20px" }}></lord-icon>
                        </abbr>
                    </span>
                </td>
            </tr>
        </>
    );
}

export default Table;
