import React from 'react';
import Link from 'next/link';
import { TokenDataProps } from '../Interface';

const TokenContent: React.FC<{ data: TokenDataProps }> = ({ data }) => {
  const tokenDetailPath = `/token/${encodeURIComponent(data.tokenName)}`;

  return (
    <tr className='border-b border-gray text-sm '>
      <td className='py-3  min-w-[100px] flex justify-center'>{data.number}</td>
      <td>
        <Link href={tokenDetailPath}>
          <div className='flex items-center min-w-[250px]'>
            <span className='font-semibold'> {data.tokenName} </span>
            <span className='text-xs'>{data.unit}</span>
          </div>
        </Link>
      </td>
      <td className=' min-w[300px]'>{data.price} ETH</td>
      <td className={`${data.change.includes('+') ? 'text-green-500 w-32' : 'text-red-500 w-32'}`}>
        {data.change}
      </td>
      <td className=' min-w-[200px]'>{data.volume}</td>
      <td className=' min-w-[200px]'>{data.holders}</td>
    </tr>
  );
}

export default TokenContent;
