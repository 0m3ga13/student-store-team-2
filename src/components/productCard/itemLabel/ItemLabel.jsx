import React from "react";
import { useTranslations } from "next-intl";

const ItemLabel = ({ textContent }) => {
    const t = useTranslations("Index");

    let style = "";
    if (textContent === t("For Sale")) {
        style = `bg-secondaryBlue`;
    } else if (textContent === t("For Borrow")) {
        style = `bg-secondaryYellow`;
    } else {
        style = `bg-secondaryGreen`;
    }

    return (
        <div
            className={`flex justify-center text-center items-center font-jost font-bold rounded-full ${style} text-white text-sm w-[105px] h-[26px]`}
        >
            {t(textContent)}
        </div>
    );
};

export default ItemLabel;
