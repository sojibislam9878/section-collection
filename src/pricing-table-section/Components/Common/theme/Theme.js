import HorizontalPricingTable from "./HorizontalPricingTable";
import MinimalPricingTable from "./MinimalPricingTable";



const Theme = (props) => {
    const { attributes } = props;
    const { themeStyle } = attributes;

    return (
        <>
            {
                themeStyle?.theme === "style-1" ? <MinimalPricingTable {...props} /> 
                : themeStyle?.theme === "style-2" ? <HorizontalPricingTable {...props} />  : null
            }
        </>

    );
};

export default Theme;