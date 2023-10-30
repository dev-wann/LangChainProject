import Link from 'next/link';

export default function Home() {
  const btnClass =
    'w-full bg-transparent hover:bg-black text-black font-semibold hover:text-white py-1 px-4 border border-black hover:border-transparent rounded';
  return (
    <main className='flex flex-col items-center'>
      <div className='flex flex-col items-center p-14 w-full max-w-3xl gap-4'>
        <Link href='/llm' className='w-1/2'>
          <button className={btnClass}>Go to LLM</button>
        </Link>
        <Link href='/chat' className='w-1/2'>
          <button className={btnClass}>Go to Chat</button>
        </Link>
      </div>
    </main>
  );
}
