import Image from 'next/image';
import Link from 'next/link';
import whatsAppImg from '../public/images/whatsapp.png';
import skipthegame from '../public/images/logo.png';

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-sm">
        <div className="flex justify-center">
          <Image src={whatsAppImg} width={100} height={100} />
        </div>
        <h1 className="text-xl font-semibold">
          Login With Skipthegames and enjoy with WhatApp video chat your dating
          partner.
        </h1>
        <Link
          href="/login"
          className="bg-blue-400 py-2 px-5 rounded-md block mt-5"
        >
          <div className="flex justify-center">
            <Image
              src={skipthegame}
              alt="skipthegame logo"
              width={200}
              height={50}
            />
          </div>
          <p className="text-center text-white font-semibold text-xl">
            login with skipthegames
          </p>
        </Link>
      </div>
    </div>
  );
}
