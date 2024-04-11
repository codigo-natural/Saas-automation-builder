import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

export function Category({ selected }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#78c6a3] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#78c6a3]',
          { 'dark:!fill-[#78c6a3] fill-[#78c6a3] ': selected }
        )}
      />
      <rect
        x="3"
        y="13"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#78c6a3] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#78c6a3]',
          { 'dark:!fill-[#78c6a3] fill-[#78c6a3] ': selected }
        )}
      />
      <rect
        x="13"
        y="3"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#78c6a3] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#78c6a3]',
          { 'dark:!fill-[#78c6a3] fill-[#78c6a3] ': selected }
        )}
      />
      <rect
        x="13"
        y="13"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#354f52] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#354f52] ',
          { 'dark:!fill-[#354f52] fill-[#354f52] ': selected }
        )}
      />
    </svg>
  )
}
