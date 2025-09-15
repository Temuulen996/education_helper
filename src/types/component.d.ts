interface BButtonProps {
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
}
interface BLayoutProps {
  children: React.ReactNode;
}
interface BAdminLayoutProps {
  children: React.ReactNode;
}
interface BTextProps {
  en: string;
  mn: string;
  className?: string;
}
interface CardSliderProps {
  label: string;
}
interface ProductListProps {
  label: React.ReactNode;
  listData: ProductType[];
}
interface ShopPageFilterProps {
  handleCancel: Function;
}
interface BTableProps {
  dataSource: any[];
  columns: any[];
}

interface ProductDetailImageProps {
  product: ProductType;
}
interface BNavbarProps {
  showSideBar: () => void;
  closeSideBar: () => void;
  menuItems: { key: string; label: string }[];
}
interface PersonalInformationStepProps {
  handleClickPrev: () => void;
  handleClickNext: () => void;
}
