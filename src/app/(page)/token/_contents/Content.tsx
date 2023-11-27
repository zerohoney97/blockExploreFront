import React from 'react';
import Link from 'next/link';
import { TokenDataProps } from '../Interface';

const TokenContent: React.FC<{ data: TokenDataProps }> = ({ data }) => {
  const tokenDetailPath = `/token/${encodeURIComponent(data.tokenName)}`;

  return (
    <tr className='border-b border-gray text-sm dark:text-white'>
      <td className='py-3 px-4 '>{data.number}</td>
      <td>
        <Link href={tokenDetailPath}>
          <div className='flex items-center '>
            <img className='w-6 mr-2' src={data.tokenImage} alt="" />
            <span className='font-semibold'> {data.tokenName} </span>
            <span className='text-xs'>{data.unit}</span>
          </div>
        </Link>
      </td>
      <td className=' '>{data.ethPrice} ETH</td>
      <td className={`${data.change.includes('+') ? 'text-green-500 w-32' : 'text-red-500 w-32'}`}>
        {data.change}
      </td>
      <td className=''>${data.volume}</td>
      <td className=''>{data.holders}</td>
    </tr>
  );
}

export default TokenContent;
