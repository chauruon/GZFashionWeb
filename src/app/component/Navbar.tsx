import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faAmbulance,
  faAnchor,
  faUser
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <nav className=' md:first-letter:container flex justify-between items-center flex-row bg-[#f8e71c]'>
      <div className='flex justify-between items-center bg-orange-600'>
        <div className='bg-white rounded-full h-full w-full' >
          <Link href={'/profile'} className='h-80 w-80'>
            <FontAwesomeIcon icon={faUser} style={{ width:50,height:50, color: "blue" }} />
          </Link>
        </div>
        <input width={30} placeholder='Search.....' />
      </div>
      <ul className='flex gap-4 '>
        <Link href={'/'}>asdj</Link>
        <Link href={'/pas'}>asdjfh1</Link>
        <Link href={'/home'}>asdjfh2</Link>
      </ul>
    </nav>
  )
}

export default Navbar