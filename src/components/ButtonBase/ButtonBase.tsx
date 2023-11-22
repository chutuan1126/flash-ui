import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
}

export default function ButtonBase({ children, title }: Props) {
  return (
    <button className='px-6 py-2 text-base text-cyan-400 bg-red-400'>{children || title}</button>
  )
}