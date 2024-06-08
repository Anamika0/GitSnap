import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='bg-gradient-to-r from-slate-500 to-green-100'>
      		<div className='flex flex-col items-center bg-auth-layout justify-center min-h-screen'>
			<div className='p-8 bg-white rounded-lg shadow-md w-1/4'>
				<Link href={"/"} className='flex justify-center mb-4'>
					<Image src={"/logo.png"} width={40} height={40} alt='logo' />
				</Link>
        {children}
    </div>
    </div>
    </div>
  )
}

export default AuthLayout