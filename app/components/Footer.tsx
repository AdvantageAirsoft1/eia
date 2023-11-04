"use client"

import React from 'react';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import Image from 'next/image';
import logo from "@/public/EIALogo_small.png"; // Replace with the actual logo path

const Footer = () => {
  const facebookPageUrl = 'https://www.facebook.com/groups/corpairsoft'; // Replace with your Facebook page URL
  const instagramPageUrl = 'https://www.instagram.com/east_idaho_airsoft_events/'; // Replace with your Instagram page URL

  const redirectToFacebookPage = () => {
    window.open(facebookPageUrl, '_blank');
  };

  const redirectToInstagramPage = () => {
    window.open(instagramPageUrl, '_blank');
  };

  return (
    <footer className="border-t py-8">
      <div className="w-full">
        <div className="flex">
          <div className="w-full">
            <div className="flex flex-col items-center justify-center">
              <Image src={logo} width={400} height={200} alt="EIA Logo" className="mt-2" />
              <ul className="flex justify-center mt-8 gap-3">
                <li>
                  <div
                    className="w-11 h-11 rounded flex items-center justify-center text-lg bg-red-500 text-secondary hover:text-white hover:bg-primary transition-all cursor-pointer"
                    onClick={redirectToFacebookPage}
                  >
                    <AiFillFacebook size={25} />
                  </div>
                </li>
                <li>
                  <div
                    className="w-11 h-11 rounded flex items-center justify-center text-lg bg-red-500 text-secondary hover:text-white hover:bg-primary transition-all cursor-pointer"
                    onClick={redirectToInstagramPage}
                  >
                    <AiFillInstagram size={25} />
                  </div>
                </li>
              </ul>
              <p className="mt-8">
                © 2023 DevTechni Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
