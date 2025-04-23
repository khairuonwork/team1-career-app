'use client'
import React, { useEffect, useRef, useState } from "react"

interface Props {
    trigger : React.ReactNode;
    children : React.ReactNode;
    otherStyles? : string;
}

export const DropDown = ({ trigger, children, otherStyles='w-40' } : Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            dropdownRef.current &&
            event.target instanceof Node && 
            !dropdownRef.current.contains(event.target)
          ) {
            setIsOpen(false);
          }
        };
      
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
      


    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={()=>setIsOpen(!isOpen)}>
                {trigger}
            </button>
            {isOpen && <div className={`absolute z-10 bg-white shadow-md w-4 rounded-md overflow-hidden ${otherStyles}`}>
                {children}
            </div>}
        </div>
    )
}