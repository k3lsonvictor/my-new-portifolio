import {  useRouter } from 'next/navigation';

export const Header = () => {
  // const path = usePathname();
  const router = useRouter();

  return <div className="absolute top-0 w-full h-auto flex justify-between bg-transparente font-jersey text-[#C2C2C2] text-[16px] px-[100px] 2xl:px-[300px] pt-[30px] z-[99999]">
    <button className="cursor-pointer" onClick={() => { router.push('/home') }}>
      KELSON VICTOR
    </button>
    <div className="flex w-auto gap-20">
      <button onClick={() => { router.push('/about') }}>
        ABOUT
      </button>
      <button onClick={() => { router.push('/projects') }}>
        PROJECTS
      </button>
      <button onClick={() => { router.push('/contact') }}>
        CONTACT
      </button>
    </div>
  </div>;
};