'use client';

type Props = {
  text: string;
  func: () => void;
};

export default function ActionButton({ text, func }: Props) {
  return (
    <button
      onClick={func}
      className='ml-6 sm:ml-3 p-1.5 px-6 rounded-md bg-primary text-text-secondary hover:bg-secondary'
    >
      {text}
    </button>
  );
}
