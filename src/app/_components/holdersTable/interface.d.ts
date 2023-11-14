
  export interface IholdersList {
    rank : string
    address: string;
    quantity: string;
    percentage: string;
    value: string;

  }
  
  export interface HoldersListProps {
    holdersList: IholdersList[];
  }
  
  export interface HoldersWrapProps {
    holdersList: IholdersList[] | null;
    toggleHandler: () => void;
  }
  
  export interface HoldersItemProps {
    HoldersItem: IholdersList;
    toggleHandler: () => void;
  }
  