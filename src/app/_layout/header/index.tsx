"use client";
/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import ham from "../../../../public/burger.png";
import React from "react";
import Image from "next/image";
import useMobile from "@app/_hooks/useMobile";
import PcDropDownMenu from "./content/PcDropDownMenu";
import MobileHeader from "./content/MobileHeader";
import PcHeader from "./content/PcHeader";

const Header = () => {
  const isMobile = useMobile();
  // const [isRendered, setIsRendered] = useState<boolean>(false);
  // useEffect(() => {
  //   setIsRendered(true);
  // }, []);
  return <>{isMobile ? <MobileHeader /> : <PcHeader />}</>;
};

export default Header;
