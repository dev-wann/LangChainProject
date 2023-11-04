"use client";

import { useState } from "react";
import useUserStore from "../stores/UserStore";
import Image from "next/image";

export default function ApiKeyComponent() {
  const [visible, setVisible] = useState(false);
  const setKey = useUserStore((state) => state.setKey);
  const visibilityStyle = "opacity-50 hover:opacity-100 cursor-pointer";
  const visible_on = (
    <Image
      src="/visibility_on.svg"
      className={visibilityStyle}
      width={25}
      height={25}
      onClick={() => setVisible(false)}
      alt="visibility on"
    />
  );
  const visible_off = (
    <Image
      src="/visibility_off.svg"
      className={visibilityStyle}
      width={25}
      height={25}
      onClick={() => setVisible(true)}
      alt="visibility off"
    />
  );

  return (
    <div className="flex flex-wrap items-stretch w-full mb-4 border border-grey-light rounded relative focus:border-blue focus:shadow">
      <div className="flex items-center bg-gray-100 none px-3 whitespace-no-wrap text-gray-dark text-sm w-20">
        <span className="font-bold text-center leading-normal">API key</span>
      </div>
      <input
        type={visible ? "text" : "password"}
        className="flex-shrink flex-grow flex-auto leading-normal w-px h-10 px-3"
        placeholder="Type your OpenAI API key here."
        onChange={(e) => setKey(e.target.value)}
      />
      <div className="flex align-middle justify-center px-2">
        {visible ? visible_on : visible_off}
      </div>
    </div>
  );
}
