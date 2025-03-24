"use client";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "@/icons";
import Link from "next/link";
import React, { useState } from "react";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full overflow-y-auto no-scrollbar">
      <div className="w-full max-w-md sm:pt-10 mx-auto mb-5">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon />
          Back to dashboard
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="text-center mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Tizimga Kirish
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Tizimga kirish uchun login va parolingizni kiriting!
            </p>
          </div>
          <div>
          <button className="block w-full inline-flex items-center justify-center gap-2 py-3 text-base font-normal text-white transition-colors rounded-lg px-7 hover:brightness-110 dark:text-black" style={{ backgroundColor: "#FFB200" }}>

          <svg
    width="20px"
    height="20px"
    viewBox="-1.32 0 47.135 47.135"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: "rotateY(183deg)" }}
  >
    <path
      id="_19"
      data-name={19}
      d="M116.833,623.959l2.159-2.158-3.314-3.314-2.158,2.159-3.466-3.466a7.895,7.895,0,1,0-8.126-12.478,6.319,6.319,0,1,0-8.77,9A7.894,7.894,0,1,0,106,621.565l3.3,3.3-1.826,1.825L110.788,630l1.826-1.826,8.754,8.754-4.807,4.806,1.65,1.65a2.457,2.457,0,1,1,3.382,3.382l1.979,1.979,4.807-4.807,2.347,2.348,4.219-4.219Zm-8.65-18.3a3.852,3.852,0,1,1-3.852,3.852A3.851,3.851,0,0,1,108.183,605.661Zm-2.277,11.415-.071.071c-.012-.035-.026-.069-.038-.1Zm-8.848-11.427a3.083,3.083,0,1,1-3.082,3.083A3.083,3.083,0,0,1,97.058,605.649ZM98.346,623.5a3.852,3.852,0,1,1,3.852-3.852A3.851,3.851,0,0,1,98.346,623.5Z"
      transform="translate(-90.447 -601.614)"
      fill="#FFFFFF"
    />
  </svg>




                Elektron raqamli imzo bilan kirish
              </button>
       
            <div className="relative py-3 sm:py-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
                  Yoki
                </span>
              </div>
            </div>
            <form>
              <div className="space-y-5">
             
                {/* <!-- Email --> */}
                <div>
                  <Label>
                    Login<span className="text-error-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Loginingizni Kiriting"
                  />
                </div>
                {/* <!-- Password --> */}
                <div>
                  <Label>
                    Parol<span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder="Parolingizni kiriting"
                      type={showPassword ? "text" : "password"}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                      )}
                    </span>
                  </div>
                </div>
               
                {/* <!-- Button --> */}
                <div>
                  <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">
                    Tizimga Kirish
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
