'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "../../UIcompps/Button"
import { X } from 'lucide-react'

export default function SortFilterButton() {
  const [isDiv1Visible, setIsDiv1Visible] = useState(false)
  const [isDiv2Visible, setIsDiv2Visible] = useState(false)
  const div1Ref = useRef(null)
  const div2Ref = useRef(null)

  const isAnyDivVisible = isDiv1Visible || isDiv2Visible

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDiv1Visible && div1Ref.current && !div1Ref.current.contains(event.target)) {
        setIsDiv1Visible(false)
      }
      if (isDiv2Visible && div2Ref.current && !div2Ref.current.contains(event.target)) {
        setIsDiv2Visible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDiv1Visible, isDiv2Visible])

  return (
    <div className="relative">
      <div className="flex items-center justify-center px-10 py-2 relative z-10">
        <div 
          onClick={() => setIsDiv1Visible(!isDiv1Visible)}
          variant={isDiv1Visible ? "secondary" : "default"}
          className="w-40"
        >
          <div className="gap-0 flex flex-col items-center justify-start">

            <div className="">
          <h3>Filter</h3>
          <small className="text-xs">Filter items</small>
          </div>
          </div>
        </div>
        <div 
          onClick={() => setIsDiv2Visible(!isDiv2Visible)}
          variant={isDiv2Visible ? "secondary" : "default"}
          className="w-40"
        >
          <div className="gap-0 flex flex-col items-center justify-start">

            <div className="">
          <h3>Filter</h3>
          <small className="text-xs">Filter items</small>
          </div>
          </div>
        </div>
      </div>

      {isAnyDivVisible && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity duration-300 z-20" />
      )}

      {/* Sliding Div 1 */}
      <div 
        ref={div1Ref}
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white text-primary-foreground p-6 rounded-t-xl transition-transform duration-300 ease-in-out z-30 ${
          isDiv1Visible ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ display: isDiv1Visible ? 'block' : 'none' }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Div 1 Content</h2>
          <div
            variant="ghost"
            size="icon"
            onClick={() => setIsDiv1Visible(false)}
            aria-label="Close Div 1"
          >
            <X className="h-4 w-4" />
          </div>
        </div>
        <div className="h-full overflow-y-auto">
          <p>This is the content for Div 1. You can add any elements or components here.</p>
        
        </div>
      </div>

      {/* Sliding Div 2 */}
      <div 
        ref={div2Ref}
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-white text-secondary-foreground p-6 rounded-t-xl transition-transform duration-300 ease-in-out z-30 ${
          isDiv2Visible ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ display: isDiv2Visible ? 'block' : 'none' }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Div 2 Content</h2>
          <div
            variant="ghost"
            size="icon"
            onClick={() => setIsDiv2Visible(false)}
            aria-label="Close Div 2"
          >
            <X className="h-4 w-4" />
          </div>
        </div>
        <div className="max-h-[70vh] overflow-y-auto">
          <p>This is the content for Div 2. You can customize this area as needed.</p>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  )
}

