import Link from "next/link";
import { useState } from "react";
import DeleteModal from "./Modal/DeleteModal";
import EditModal from "./Modal/EditModal";

function CategoryCard({category}) {
  // edit id
  const [editId,setEditId] = useState()
  const [deleteId,setDeleteId] = useState()
    return (
      <div>
          <div className="flex items-center gap-4">
             <Link href={`/category/${category?.label}`} className="flex gap-2 my-1 hover:bg-base-200 px-2 py-1">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
            />
          </svg>
        </div>
      </Link>
        <div>{category?.value} ({category?.count})</div> 
       
        {/* edit */}
        <label onClick={()=>setEditId(category?.id)} htmlFor="edit_modal" className="px-3 rounded-full py-1 bg-teal-100 text-teal-600">Edit</label>
        {/* delete */}
        <label onClick={()=>setDeleteId(category?.id)} htmlFor="delete_modal" className="px-3 rounded-full py-1 bg-rose-100 text-rose-600">Delete</label>
        </div>
        {
          editId &&  <EditModal setEditId={setEditId} editId={editId} />
        }
        {
          deleteId && <DeleteModal setDeleteId={setDeleteId} deleteId={deleteId} />
        }
         
      </div>
    );
}

export default CategoryCard;