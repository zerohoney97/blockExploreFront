'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Error = () => {
    const router = useRouter();
    const [countdown, setCountdown] = useState<number>(3);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCountdown((count) => {
          if (count === 1) {
            clearInterval(timer);
            router.push('/');
          }
          return count - 1;
        });
      }, 1000);
  
      return () => clearInterval(timer);
    }, [router]);
  
    return (
      <div className='p-10 m-10'>
        <p className="text-red-500 text-lg font-semibold">요청하신 내용을 확인할 수 없습니다</p>
        <p>{countdown}초뒤에 메인페이지로 이동합니다</p>
      </div>
    );
}

export default Error