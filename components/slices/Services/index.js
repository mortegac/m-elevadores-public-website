import { Default, DefaultNoVerMas, NoIconsNoButtons, NoIcons, ImageText } from "./variants";


export const Services = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ["default"]: Default,
    ["defaultNoVerMas"]: DefaultNoVerMas,
    ["noIconsNoButtons"] : NoIconsNoButtons,
    ["noIcons"] : NoIcons,
    ["imageText"] : ImageText,
    
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};