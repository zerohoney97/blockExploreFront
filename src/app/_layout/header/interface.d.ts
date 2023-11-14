import { NextRouter } from "next/router";

export interface IPcDropMenu {
  label: string;
  dropDownMenuArr: Array;
  openMenuName: string;
  openMenuNameHandler: (name: string) => void;
}

export interface IDropMenuProps {
  router: AppRouterInstance;
}

export interface IopenToggle {
  openToggle: boolean;
  key: string;
}
// 서브메뉴 인터페이스
export interface IsubMenu {
  0: Array<string>;
  1: Array<string>;
  2: Array<string>;
  [key: number]: Array<string>;
}

export interface IMobileDropMenuProps {
  isMenuOpen: boolean;
  router: NextRouter;
}
