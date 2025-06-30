import { produce } from "immer";

  export const themeSwitch = (layout, attributes = {}) => produce(attributes, (draft) => {
    switch (layout) {

    // #style 1
      case 'style-1':
        draft["themeStyle"]["theme"] = "style-1";
        draft["MinimalPriceHeaderData"] = {
        title: "Pricing Plans for Every Need",
        dec: "Choose the perfect plan for your business. All plans include a 30-day money-back guarantee."
        }
        draft["MinimalPriceCardData"] = [
        {
          name: "Free",
          highlighted: false,
          highlightText: "POPULAR",
          currency: "$",
          price: "0",
          description: "For individuals just getting started",
          buttonText: "Get Started",
          period: "/month",
          buttonLink: "https://bplugins.com/",
          buttonNewTab: false,
          features: [
            {
              title: "1 user",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
            {
              title: "5GB storage",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
            {
              title: "Community support",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
          ],
        },
        {
          name: "Starter",
          highlightText: "POPULAR",
          highlighted: false,
          id: true,
          currency: "$",
          price: "12",
          period: "/month",
          description: "For individuals just getting started",
          buttonText: "Get Started",
          buttonLink: "https://bplugins.com/products/",
          buttonNewTab: false,
          features: [
            {
              title: "Up to 5 users",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
            {
              title: "20GB storage",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
            {
              title: "Email support",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
            {
              title: "Basic analytics",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
          ],
        },
        {
          highlightText: "POPULAR",
          highlighted: true,
          name: "Professional",
          id: true,
          currency: "$",
          price: "29",
          period: "/month",
          description: "For growing teams and businesses",
          buttonText: "Get Started",
          buttonLink: "https://bplugins.com/services/",
          buttonNewTab: false,
          features: [
            {
              title: "Up to 20 users",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
            {
              title: "100GB storage",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
            {
              title: "Priority support",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
            {
              title: "Custom integrations",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
          ],
        },
        {
          name: "Enterprise",
          highlightText: "POPULAR",
          highlighted: false,
          currency: "$",
          price: "99",
          period: "/month",
          description: "For large organizations and teams",
          buttonText: "Contact Sales",
          buttonLink: "https://bplugins.com/pricing/",
          buttonNewTab: false,
          features: [
            {
              title: "Unlimited users",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
            {
              title: "1TB storage",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
            {
              title: "24/7 phone support",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
            {
              title: "Advanced analytics",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
            {
              title: "Custom integrations",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
            {
              title: "Dedicated account manager",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#53df55",
            },
          ],
        },
        ];
        
        draft["style"]["iconGobalColor"] = "#53df55";
        draft["style"]["columns"]["desktop"] = 4;
        draft["style"]["columns"]["tablet"] = 2;
        draft["style"]["columns"]["mobile"] = 1;
        draft["style"]["columnGap"] = "24px";


        draft["style"]["headerStyle"]["titleStyle"]["color"] = "#111827";
        draft["style"]["headerStyle"]["titleStyle"]["typo"]["fontFamily"] = "Manrope";
        draft["style"]["headerStyle"]["titleStyle"]["typo"]["fontCategory"] = "sans-serif";
        draft["style"]["headerStyle"]["titleStyle"]["typo"]["fontWeight"] = 800;
        draft["style"]["headerStyle"]["titleStyle"]["typo"]["fontSize"]["desktop"] = 48;
        draft["style"]["headerStyle"]["titleStyle"]["typo"]["fontSize"]["tablet"] = 45;
        draft["style"]["headerStyle"]["titleStyle"]["typo"]["fontSize"]["mobile"] = 40;
        draft["style"]["headerStyle"]["titleStyle"]["typo"]["fontStyle"] = "normal";
        draft["style"]["headerStyle"]["titleStyle"]["typo"]["textTransform"] = "none";
        draft["style"]["headerStyle"]["titleStyle"]["typo"]["textDecoration"] = "auto";
        draft["style"]["headerStyle"]["titleStyle"]["typo"]["lineHeight"] = "54px";
        draft["style"]["headerStyle"]["titleStyle"]["typo"]["letterSpace"] = "0px";

        draft["style"]["headerStyle"]["desStyle"]["desColor"] = "#8a8f95";
        draft["style"]["headerStyle"]["desStyle"]["desTypo"]["fontFamily"] = "Manrope";
        draft["style"]["headerStyle"]["desStyle"]["desTypo"]["fontCategory"] = "sans-serif";
        draft["style"]["headerStyle"]["desStyle"]["desTypo"]["fontWeight"] = 400;
        draft["style"]["headerStyle"]["desStyle"]["desTypo"]["fontSize"]["desktop"] = 20;
        draft["style"]["headerStyle"]["desStyle"]["desTypo"]["fontSize"]["tablet"] = 19;
        draft["style"]["headerStyle"]["desStyle"]["desTypo"]["fontSize"]["mobile"] = 18;
        draft["style"]["headerStyle"]["desStyle"]["desTypo"]["fontStyle"] = "normal";
        draft["style"]["headerStyle"]["desStyle"]["desTypo"]["textTransform"] = "none";
        draft["style"]["headerStyle"]["desStyle"]["desTypo"]["textDecoration"] = "auto";
        draft["style"]["headerStyle"]["desStyle"]["desTypo"]["lineHeight"] = "25px";
        draft["style"]["headerStyle"]["desStyle"]["desTypo"]["letterSpace"] = "0px";

        draft["style"]["priceCardStyle"]["priceCardBackgroundColor"] = "rgba(255, 255, 255, 1)";
        draft["style"]["priceCardStyle"]["cardRadius"] = { top: '8px', right: '8px', bottom: '8px', left: '8px' };

        draft["style"]["priceCardStyle"]["cardPadding"]["desktop"] = { top: '20px', right: '24px', bottom: '20px', left: '24px' };
        draft["style"]["priceCardStyle"]["cardPadding"]["tablet"] = { top: '20px', right: '24px', bottom: '20px', left: '24px' };
        draft["style"]["priceCardStyle"]["cardPadding"]["mobile"] = { top: '20px', right: '24px', bottom: '20px', left: '24px' };

        draft["style"]["priceCardStyle"]["borderColor"] = "#e5e7eb";
        draft["style"]["priceCardStyle"]["borderWidth"] = "1px";
        draft["style"]["priceCardStyle"]["shadow"] = [
          {
            hOffset: "0px",
            vOffset: "1px",
            blur: "3px",
            spreed: "-9px",
            color: "rgba(0, 0, 0, 0.1)",
            isInset: false
          }
        ];
        draft["style"]["priceCardStyle"]["propularBorderColor"] = "#111827";
        draft["style"]["priceCardStyle"]["propularWidth"] = "2px";
        draft["style"]["priceCardStyle"]["propularShadow"] = [
          {
            hOffset: "0px",
            vOffset: "4px",
            blur: "6px",
            spreed: "-9px",
            color: "rgba(0, 0, 0, 0.1)",
            isInset: false
          }
        ];
        draft["style"]["priceCardStyle"]["hightlightStyle"]["bgColor"] = "#111827";
        draft["style"]["priceCardStyle"]["hightlightStyle"]["color"] = "white";

        draft["style"]["priceCardStyle"]["hightlightStyle"]["padding"]["desktop"] = { top: '4px', right: '12px', bottom: '4px', left: '12px' };
        draft["style"]["priceCardStyle"]["hightlightStyle"]["padding"]["tablet"] = { top: '4px', right: '12px', bottom: '4px', left: '12px' };
        draft["style"]["priceCardStyle"]["hightlightStyle"]["padding"]["mobile"] = { top: '4px', right: '12px', bottom: '4px', left: '12px' };

        draft["style"]["priceCardStyle"]["hightlightStyle"]["hightLightRadius"] = { top: '4px', right: '4px', bottom: '4px', left: '4px' };

    
        draft["style"]["priceCardStyle"]["hightlightStyle"]["hightLightTypo"]["fontFamily"] = "Manrope";
        draft["style"]["priceCardStyle"]["hightlightStyle"]["hightLightTypo"]["fontCategory"] = "sans-serif";
        draft["style"]["priceCardStyle"]["hightlightStyle"]["hightLightTypo"]["fontWeight"] = 700;
        draft["style"]["priceCardStyle"]["hightlightStyle"]["hightLightTypo"]["fontSize"]["desktop"] = 12;
        draft["style"]["priceCardStyle"]["hightlightStyle"]["hightLightTypo"]["fontSize"]["tablet"] = 12;
        draft["style"]["priceCardStyle"]["hightlightStyle"]["hightLightTypo"]["fontSize"]["mobile"] = 12;
        draft["style"]["priceCardStyle"]["hightlightStyle"]["hightLightTypo"]["fontStyle"] = "normal";
        draft["style"]["priceCardStyle"]["hightlightStyle"]["hightLightTypo"]["textTransform"] = "none";
        draft["style"]["priceCardStyle"]["hightlightStyle"]["hightLightTypo"]["textDecoration"] = "auto";
        draft["style"]["priceCardStyle"]["hightlightStyle"]["hightLightTypo"]["lineHeight"] = "25px";
        draft["style"]["priceCardStyle"]["hightlightStyle"]["hightLightTypo"]["letterSpace"] = "0px";

        draft["style"]["priceCardStyle"]["cardTitleColor"] = "#111827";
        draft["style"]["priceCardStyle"]["CardTitleTypo"]["fontFamily"] = "Manrope";
        draft["style"]["priceCardStyle"]["CardTitleTypo"]["fontCategory"] = "sans-serif";
        draft["style"]["priceCardStyle"]["CardTitleTypo"]["fontWeight"] = 600;
        draft["style"]["priceCardStyle"]["CardTitleTypo"]["fontSize"]["desktop"] = 25;
        draft["style"]["priceCardStyle"]["CardTitleTypo"]["fontSize"]["tablet"] = 25;
        draft["style"]["priceCardStyle"]["CardTitleTypo"]["fontSize"]["mobile"] = 25;
        draft["style"]["priceCardStyle"]["CardTitleTypo"]["fontStyle"] = "normal";
        draft["style"]["priceCardStyle"]["CardTitleTypo"]["textTransform"] = "none";
        draft["style"]["priceCardStyle"]["CardTitleTypo"]["textDecoration"] = "auto";
        draft["style"]["priceCardStyle"]["CardTitleTypo"]["lineHeight"] = "30px";
        draft["style"]["priceCardStyle"]["CardTitleTypo"]["letterSpace"] = "0px";

        draft["style"]["priceCardStyle"]["cardMargin"]["desktop"] = { top: '0px', right: '0px', bottom:'16px', left: '0px' };
        draft["style"]["priceCardStyle"]["cardMargin"]["tablet"] = { top: '0px', right: '0px', bottom: '16px', left: '0px' };
        draft["style"]["priceCardStyle"]["cardMargin"]["mobile"] = { top: '0px', right: '0px', bottom: '16px', left: '0px' };

        draft["style"]["priceCardStyle"]["cardAmountColor"] = "#111827";
        draft["style"]["priceCardStyle"]["CardAmountTypo"]["fontFamily"] = "Manrope";
        draft["style"]["priceCardStyle"]["CardAmountTypo"]["fontCategory"] = "sans-serif";
        draft["style"]["priceCardStyle"]["CardAmountTypo"]["fontWeight"] = 800;
        draft["style"]["priceCardStyle"]["CardAmountTypo"]["fontSize"]["desktop"] = 36;
        draft["style"]["priceCardStyle"]["CardAmountTypo"]["fontSize"]["tablet"] = 36;
        draft["style"]["priceCardStyle"]["CardAmountTypo"]["fontSize"]["mobile"] = 36;
        draft["style"]["priceCardStyle"]["CardAmountTypo"]["fontStyle"] = "normal";
        draft["style"]["priceCardStyle"]["CardAmountTypo"]["textTransform"] = "none";
        draft["style"]["priceCardStyle"]["CardAmountTypo"]["textDecoration"] = "auto";
        draft["style"]["priceCardStyle"]["CardAmountTypo"]["lineHeight"] = "30px";
        draft["style"]["priceCardStyle"]["CardAmountTypo"]["letterSpace"] = "0px";

        draft["style"]["priceCardStyle"]["cardPeriodColor"] = "#6b7280";
        draft["style"]["priceCardStyle"]["CardPeriodTypo"]["fontFamily"] = "Manrope";
        draft["style"]["priceCardStyle"]["CardPeriodTypo"]["fontCategory"] = "sans-serif";
        draft["style"]["priceCardStyle"]["CardPeriodTypo"]["fontWeight"] = 100;
        draft["style"]["priceCardStyle"]["CardPeriodTypo"]["fontSize"]["desktop"] = 22;
        draft["style"]["priceCardStyle"]["CardPeriodTypo"]["fontSize"]["tablet"] = 22;
        draft["style"]["priceCardStyle"]["CardPeriodTypo"]["fontSize"]["mobile"] = 22;
        draft["style"]["priceCardStyle"]["CardPeriodTypo"]["fontStyle"] = "normal";
        draft["style"]["priceCardStyle"]["CardPeriodTypo"]["textTransform"] = "none";
        draft["style"]["priceCardStyle"]["CardPeriodTypo"]["textDecoration"] = "auto";
        draft["style"]["priceCardStyle"]["CardPeriodTypo"]["lineHeight"] = "30px";
        draft["style"]["priceCardStyle"]["CardPeriodTypo"]["letterSpace"] = "0px";

        draft["style"]["priceCardStyle"]["cardPeriodMargin"]["desktop"] = { top: '0px', right: '0px', bottom: '0px', left: '5px' };
        draft["style"]["priceCardStyle"]["cardPeriodMargin"]["tablet"] = { top: '0px', right: '0px', bottom: '0px', left: '5px' };
        draft["style"]["priceCardStyle"]["cardPeriodMargin"]["mobile"] = { top: '0px', right: '0px', bottom: '0px', left: '5px' };
        

        draft["style"]["priceCardStyle"]["cardDesColor"] = "#4b5563";
        draft["style"]["priceCardStyle"]["CardDesTypo"]["fontFamily"] = "Manrope";
        draft["style"]["priceCardStyle"]["CardDesTypo"]["fontCategory"] = "sans-serif";
        draft["style"]["priceCardStyle"]["CardDesTypo"]["fontWeight"] = 100;
        draft["style"]["priceCardStyle"]["CardDesTypo"]["fontSize"]["desktop"] = 18;
        draft["style"]["priceCardStyle"]["CardDesTypo"]["fontSize"]["tablet"] = 18;
        draft["style"]["priceCardStyle"]["CardDesTypo"]["fontSize"]["mobile"] = 18;
        draft["style"]["priceCardStyle"]["CardDesTypo"]["fontStyle"] = "normal";
        draft["style"]["priceCardStyle"]["CardDesTypo"]["textTransform"] = "none";
        draft["style"]["priceCardStyle"]["CardDesTypo"]["textDecoration"] = "auto";
        draft["style"]["priceCardStyle"]["CardDesTypo"]["lineHeight"] = "30px";
        draft["style"]["priceCardStyle"]["CardDesTypo"]["letterSpace"] = "0px";

        draft["style"]["priceCardStyle"]["cardDesMargin"]["desktop"] = { top: '0px', right: '0px', bottom: '16px', left: '0px' };
        draft["style"]["priceCardStyle"]["cardDesMargin"]["tablet"] = { top: '0px', right: '0px', bottom: '16px', left: '0px' };
        draft["style"]["priceCardStyle"]["cardDesMargin"]["mobile"] = { top: '0px', right: '0px', bottom: '16px', left: '0px' };


        draft["style"]["priceCardStyle"]["cardButtonColor"] = "#111827";
        draft["style"]["priceCardStyle"]["cardButtonTypo"]["fontFamily"] = "Manrope";
        draft["style"]["priceCardStyle"]["cardButtonTypo"]["fontCategory"] = "sans-serif";
        draft["style"]["priceCardStyle"]["cardButtonTypo"]["fontWeight"] = 500;
        draft["style"]["priceCardStyle"]["cardButtonTypo"]["fontSize"]["desktop"] = 22;
        draft["style"]["priceCardStyle"]["cardButtonTypo"]["fontSize"]["tablet"] = 22;
        draft["style"]["priceCardStyle"]["cardButtonTypo"]["fontSize"]["mobile"] = 22;
        draft["style"]["priceCardStyle"]["cardButtonTypo"]["fontStyle"] = "normal";
        draft["style"]["priceCardStyle"]["cardButtonTypo"]["textTransform"] = "none";
        draft["style"]["priceCardStyle"]["cardButtonTypo"]["textDecoration"] = "auto";
        draft["style"]["priceCardStyle"]["cardButtonTypo"]["lineHeight"] = "30px";
        draft["style"]["priceCardStyle"]["cardButtonTypo"]["letterSpace"] = "0px";

        draft["style"]["priceCardStyle"]["cardButtonBGColor"] = "transparent";
        draft["style"]["priceCardStyle"]["cardButtonBGHoverColor"] = "#f9fafb";
        draft["style"]["priceCardStyle"]["cardButtonHightlightColor"] = "white";
        draft["style"]["priceCardStyle"]["cardButtonHightlightBackgroundColor"] = "#111827";
        draft["style"]["priceCardStyle"]["cardButtonHightlightBgHoverColor"] = "#1f2937";

        draft["style"]["priceCardStyle"]["cardButtonRadius"] = { top: '6px', right: '6px', bottom: '6px', left: '6px' };

        draft["style"]["priceCardStyle"]["cardButtonPadding"]["desktop"] = { top: '10px', right: '16px', bottom: '10px', left: '16px' };
        draft["style"]["priceCardStyle"]["cardButtonPadding"]["tablet"] = { top: '10px', right: '16px', bottom: '10px', left: '16px' };
        draft["style"]["priceCardStyle"]["cardButtonPadding"]["mobile"] = { top: '10px', right: '16px', bottom: '10px', left: '16px' };


        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresPadding"]["desktop"] = { top: '0px', right: '24px', bottom: '20px', left: '24px' };
        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresPadding"]["tablet"] = { top: '0px', right: '24px', bottom: '20px', left: '24px' };
        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresPadding"]["mobile"] = { top: '0px', right: '24px', bottom: '20px', left: '24px' };

        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresMargin"]["desktop"] = { top: '0px', right: '0px', bottom: '8px', left: '0px' };
        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresMargin"]["tablet"] = { top: '0px', right: '0px', bottom: '8px', left: '0px' };
        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresMargin"]["mobile"] = { top: '0px', right: '0px', bottom: '8px', left: '0px' };

        draft["style"]["priceCardStyle"]["priceFeatures"]["featureColor"] = "#111111";
        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresTypo"]["fontFamily"] = "Manrope";
        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresTypo"]["fontCategory"] = "sans-serif";
        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresTypo"]["fontWeight"] = 100;
        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresTypo"]["fontSize"]["desktop"] = 19;
        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresTypo"]["fontSize"]["tablet"] = 19;
        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresTypo"]["fontSize"]["mobile"] = 19;
        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresTypo"]["fontStyle"] = "normal";
        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresTypo"]["textTransform"] = "none";
        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresTypo"]["textDecoration"] = "auto";
        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresTypo"]["lineHeight"] = "30px";
        draft["style"]["priceCardStyle"]["priceFeatures"]["featuresTypo"]["letterSpace"] = "0px";


        draft["style"]["priceCardStyle"]["priceFeatures"]["iconWidth"] = "20px";
        draft["style"]["priceCardStyle"]["priceFeatures"]["iconMargin"]["desktop"] = { top: '6px', right: '8px', bottom: '0px', left: '0px' };
        draft["style"]["priceCardStyle"]["priceFeatures"]["iconMargin"]["tablet"] = { top: '6px', right: '8px', bottom: '0px', left: '0px' };
        draft["style"]["priceCardStyle"]["priceFeatures"]["iconMargin"]["mobile"] = { top: '6px', right: '8px', bottom: '0px', left: '0px' };
      break;


    // #style 2
      case 'style-2':
        draft["themeStyle"]["theme"] = "style-2";
        draft["MinimalPriceCardData"] = [
        {
          name: "Lite",
          featured: false,
          currencyTwo:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z"/></svg>',
          price: "7",
          period: "/month",
          description: "Essential features for individuals",
          buttonText: "Get Started",
          buttonLink: "https://bplugins.com/",
          buttonNewTab: false,
          features: [
            {
              title: "Single user",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
            {
              title: "Basic analytics",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
            {
              title: "Community support",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
            {
              title: "5 projects",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
            {
              title: "1GB storage",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
          ],
        },
        {
          name: "Pro",
          featured: true,
          currencyTwo:
            '<svg xmlns="http://www.w3.org/2000/svg" fill="#fefbf8" viewBox="0 0 320 512"><path d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z"/></svg>',
          price: "18",
          period: "/month",
          description: "Everything a professional needs",
          buttonText: "Get Started",
          buttonLink: "https://bplugins.com/products/",
          buttonNewTab: false,
          features: [
            {
              title: "Up to 5 users",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
            {
              title: "Advanced analytics",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
            {
              title: "Priority email support",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
            {
              title: "20 projects",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
            {
              title: "10GB storage",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
            {
              title: "API access",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
          ],
        },
        {
          name: "Team",
          featured: false,
          currencyTwo:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z"/></svg>',
          price: "39",
          period: "/month",
          description: "Advanced tools for teams",
          buttonText: "Contact Sales",
          buttonLink: "https://bplugins.com/pricing/",
          buttonNewTab: false,
          features: [
            {
              title: "Unlimited users",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
            {
              title: "Unlimited projects",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
            {
              title: "Advanced analytics",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
            {
              title: "24/7 phone support",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
            {
              title: "SSO integration",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
            {
              title: "50GB storage",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
            {
              title: "API access",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              iconColor: "#10b981",
            },
          ],
        },
        ];
        draft["footerData"] = {
          title: "Need a custom solution?",
          des: "Contact our sales team to create a plan that perfectly fits your requirements.",
          buttonName: "Get in touch",
          buttonLink: "https://bplugins.com/pricing/",
          buttonNewTab: false,
          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path d=\"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z\"/></svg>"
        }
        draft["style"]["iconGobalColor"] = "#10b981"; //style a hobe ata
        draft["styleTwo"]["rowWidth"] = "1450px";
        draft["featuresColumn"] = { desktop: 2, tablet: 2, mobile: 1};
        draft["styleTwo"]["tabileRowStyle"]["rowGap"] = "24px";
        draft["styleTwo"]["tabileRowStyle"]["backgroundColor"] = "rgba(255, 255, 255, 1)";
        draft["styleTwo"]["tabileRowStyle"]["priceIconWidth"] = "30px";
        draft["styleTwo"]["tabileRowStyle"]["priceIconColor"] = "#000000";

        draft["styleTwo"]["tabileRowStyle"]["tableRadius"] = {
          top: "8px",
          right: "8px",
          bottom: "8px",
          left: "8px"
        };
        draft["styleTwo"]["tabileRowStyle"]["tableBorder"] = {
          color: "rgb(247, 242, 240)",
          width: "1px",
          style: "solid"
        };
        draft["styleTwo"]["tabileRowStyle"]["tableShadow"] = [
          {
            hOffset: "0px",
            vOffset: "0px",
            blur: "0px",
            spreed: "0px",
            color: "rgba(0, 0, 0, 0.05)",
            isInset: false
          }
        ];

        draft["styleTwo"]["tabileRowStyle"]["tablePadding"]["desktop"] = { top: '32px', right: '32px', bottom: '32px', left: '32px' };
        draft["styleTwo"]["tabileRowStyle"]["tablePadding"]["tablet"] = { top: '32px', right: '32px', bottom: '32px', left: '32px' };
        draft["styleTwo"]["tabileRowStyle"]["tablePadding"]["mobile"] = { top: '32px', right: '32px', bottom: '32px', left: '32px' };

        draft["styleTwo"]["tabileRowStyle"]["titleStyle"]["titleColor"] = "#000000";
        draft["styleTwo"]["tabileRowStyle"]["titleStyle"]["titleTypo"]["fontFamily"] = "Manrope";
        draft["styleTwo"]["tabileRowStyle"]["titleStyle"]["titleTypo"]["fontCategory"] = "sans-serif";
        draft["styleTwo"]["tabileRowStyle"]["titleStyle"]["titleTypo"]["fontWeight"] = 700;
        draft["styleTwo"]["tabileRowStyle"]["titleStyle"]["titleTypo"]["fontSize"]["desktop"] = 24;
        draft["styleTwo"]["tabileRowStyle"]["titleStyle"]["titleTypo"]["fontSize"]["tablet"] = 24;
        draft["styleTwo"]["tabileRowStyle"]["titleStyle"]["titleTypo"]["fontSize"]["mobile"] = 24;
        draft["styleTwo"]["tabileRowStyle"]["titleStyle"]["titleTypo"]["fontStyle"] = "normal";
        draft["styleTwo"]["tabileRowStyle"]["titleStyle"]["titleTypo"]["textTransform"] = "none";
        draft["styleTwo"]["tabileRowStyle"]["titleStyle"]["titleTypo"]["textDecoration"] = "auto";
        draft["styleTwo"]["tabileRowStyle"]["titleStyle"]["titleTypo"]["lineHeight"] = "25px";
        draft["styleTwo"]["tabileRowStyle"]["titleStyle"]["titleTypo"]["letterSpace"] = "0px";

        draft["styleTwo"]["tabileRowStyle"]["titleStyle"]["titleMargin"]["desktop"] = { top: '0px', right: '0px', bottom: '8px', left: '0px' };
        draft["styleTwo"]["tabileRowStyle"]["titleStyle"]["titleMargin"]["tablet"] = { top: '0px', right: '0px', bottom: '8px', left: '0px' };
        draft["styleTwo"]["tabileRowStyle"]["titleStyle"]["titleMargin"]["mobile"] = { top: '0px', right: '0px', bottom: '8px', left: '0px' };


        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["priceMarging"]["desktop"] = { top: '0px', right: '0px', bottom: '4px', left: '0px' };
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["priceMarging"]["tablet"] = { top: '0px', right: '0px', bottom: '4px', left: '0px' };
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["priceMarging"]["mobile"] = { top: '0px', right: '0px', bottom: '4px', left: '0px' };


        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["amountColor"] = "#000000";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["amountTypo"]["fontFamily"] = "Manrope";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["amountTypo"]["fontCategory"] = "sans-serif";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["amountTypo"]["fontWeight"] = 800;
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["amountTypo"]["fontSize"]["desktop"] = 38;
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["amountTypo"]["fontSize"]["tablet"] = 38;
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["amountTypo"]["fontSize"]["mobile"] = 38;
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["amountTypo"]["fontStyle"] = "normal";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["amountTypo"]["textTransform"] = "none";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["amountTypo"]["textDecoration"] = "auto";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["amountTypo"]["lineHeight"] = "48px";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["amountTypo"]["letterSpace"] = "0px";

        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["periodColor"] = "#6b7280";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["periodTypo"]["fontFamily"] = "Manrope";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["periodTypo"]["fontCategory"] = "sans-serif";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["periodTypo"]["fontWeight"] = 400;
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["periodTypo"]["fontSize"]["desktop"] = 22;
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["periodTypo"]["fontSize"]["tablet"] = 22;
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["periodTypo"]["fontSize"]["mobile"] = 22;
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["periodTypo"]["fontStyle"] = "normal";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["periodTypo"]["textTransform"] = "none";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["periodTypo"]["textDecoration"] = "auto";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["periodTypo"]["lineHeight"] = "25px";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["periodTypo"]["letterSpace"] = "0px";

        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["periodMargin"]["desktop"] = { top: '0px', right: '0px', bottom: '0px', left: '3px' };
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["periodMargin"]["tablet"] = { top: '0px', right: '0px', bottom: '4px', left: '3px' };
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["periodMargin"]["mobile"] = { top: '0px', right: '0px', bottom: '4px', left: '3px' };

        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["descriptionColor"] = "#6b7280";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["descriptionTypo"]["fontFamily"] = "Manrope";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["descriptionTypo"]["fontCategory"] = "sans-serif";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["descriptionTypo"]["fontWeight"] = 300;
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["descriptionTypo"]["fontSize"]["desktop"] = 20;
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["descriptionTypo"]["fontSize"]["tablet"] = 20;
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["descriptionTypo"]["fontSize"]["mobile"] = 20;
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["descriptionTypo"]["fontStyle"] = "normal";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["descriptionTypo"]["textTransform"] = "none";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["descriptionTypo"]["textDecoration"] = "auto";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["descriptionTypo"]["lineHeight"] = "25px";
        draft["styleTwo"]["tabileRowStyle"]["priceStyle"]["descriptionTypo"]["letterSpace"] = "0px";

        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featuresBackgroundColor"] = "#d3cece12";

        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featuresPadding"]["desktop"] = { top: '32px', right: '32px', bottom: '32px', left: '32px' };
        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featuresPadding"]["tablet"] = { top: '32px', right: '32px', bottom: '32px', left: '32px' };
        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featuresPadding"]["mobile"] = { top: '32px', right: '32px', bottom: '32px', left: '32px' };

        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featurelistGap"] = "16px";
        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featureGap"] = "12px";
        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["checkmarkColor"] = "#10b981";
        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["checkmarkWidth"] = "20px";

        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featureColor"] = "#111111";
        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featureTypo"]["fontFamily"] = "Manrope";
        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featureTypo"]["fontCategory"] = "sans-serif";
        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featureTypo"]["fontWeight"] = 300;
        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featureTypo"]["fontSize"]["desktop"] = 20;
        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featureTypo"]["fontSize"]["tablet"] = 20;
        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featureTypo"]["fontSize"]["mobile"] = 20;
        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featureTypo"]["fontStyle"] = "normal";
        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featureTypo"]["textTransform"] = "none";
        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featureTypo"]["textDecoration"] = "auto";
        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featureTypo"]["lineHeight"] = "25px";
        draft["styleTwo"]["tabileRowStyle"]["featuresSectionStyle"]["featureTypo"]["letterSpace"] = "0px";

        // action style thake start hobe kal
        
        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedPadding"]["desktop"] = { top: '13px', right: '16px', bottom: '13px', left: '16px' };
        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedPadding"]["tablet"] = { top: '13px', right: '16px', bottom: '13px', left: '16px' };
        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedPadding"]["mobile"] = { top: '13px', right: '16px', bottom: '13px', left: '16px' };

        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedColor"] = "white";
        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedTypo"]["fontFamily"] = "Manrope";
        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedTypo"]["fontCategory"] = "sans-serif";
        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedTypo"]["fontWeight"] = 600;
        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedTypo"]["fontSize"]["desktop"] = 16;
        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedTypo"]["fontSize"]["tablet"] = 16;
        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedTypo"]["fontSize"]["mobile"] = 16;
        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedTypo"]["fontStyle"] = "normal";
        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedTypo"]["textTransform"] = "none";
        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedTypo"]["textDecoration"] = "auto";
        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedTypo"]["lineHeight"] = "25px";
        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedTypo"]["letterSpace"] = "0px";

        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedRadius"] = { top: '8px', right: '8px', bottom: '8px', left: '8px' };

        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedBgColor"] = "#2563eb";
        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedBgHover"] = "#1053e2";
        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedBgHoverTextColor"] = "#ffffff";

        draft["styleTwo"]["tabileRowStyle"]["actionStyle"]["getStartedShadow"] = [
          {
            hOffset: "0px",
            vOffset: "1px",
            blur: "2px",
            spreed: "0px",
            color: "rgba(0, 0, 0, 0.5)",
            isInset: false
          }
        ];

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredBgColor"] = "#0552f7cf";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPriceIconWidth"] = "30px";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPriceIconColor"] = "#FFFFFF";

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredTitleColor"] = "#FFFFFF";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredTitleTypo"]["fontFamily"] = "Manrope";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredTitleTypo"]["fontCategory"] = "sans-serif";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredTitleTypo"]["fontWeight"] = 700;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredTitleTypo"]["fontSize"]["desktop"] = 24;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredTitleTypo"]["fontSize"]["tablet"] = 24;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredTitleTypo"]["fontSize"]["mobile"] = 24;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredTitleTypo"]["fontStyle"] = "normal";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredTitleTypo"]["textTransform"] = "none";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredTitleTypo"]["textDecoration"] = "auto";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredTitleTypo"]["lineHeight"] = "25px";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredTitleTypo"]["letterSpace"] = "0px";


        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredTitleMargin"]["desktop"] = { top: '0px', right: '0px', bottom: '8px', left: '0px' };
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredTitleMargin"]["tablet"] = { top: '0px', right: '0px', bottom: '8px', left: '0px' };
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredTitleMargin"]["mobile"] = { top: '0px', right: '0px', bottom: '8px', left: '0px' };

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPriceMarging"]["desktop"] = { top: '0px', right: '0px', bottom: '4px', left: '0px' };
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPriceMarging"]["tablet"] = { top: '0px', right: '0px', bottom: '4px', left: '0px' };
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPriceMarging"]["mobile"] = { top: '0px', right: '0px', bottom: '4px', left: '0px' };

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredAmountColor"] = "white";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredAmountTypo"]["fontFamily"] = "Manrope";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredAmountTypo"]["fontCategory"] = "sans-serif";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredAmountTypo"]["fontWeight"] = 800;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredAmountTypo"]["fontSize"]["desktop"] = 38;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredAmountTypo"]["fontSize"]["tablet"] = 38;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredAmountTypo"]["fontSize"]["mobile"] = 38;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredAmountTypo"]["fontStyle"] = "normal";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredAmountTypo"]["textTransform"] = "none";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredAmountTypo"]["textDecoration"] = "auto";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredAmountTypo"]["lineHeight"] = "48px";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredAmountTypo"]["letterSpace"] = "0px";

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPeriodColor"] = "#edeff1";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPeriodTypo"]["fontFamily"] = "Manrope";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPeriodTypo"]["fontCategory"] = "sans-serif";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPeriodTypo"]["fontWeight"] = 400;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPeriodTypo"]["fontSize"]["desktop"] = 22;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPeriodTypo"]["fontSize"]["tablet"] = 22;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPeriodTypo"]["fontSize"]["mobile"] = 22;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPeriodTypo"]["fontStyle"] = "normal";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPeriodTypo"]["textTransform"] = "none";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPeriodTypo"]["textDecoration"] = "auto";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPeriodTypo"]["lineHeight"] = "25px";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPeriodTypo"]["letterSpace"] = "0px";


        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPeriodMargin"]["desktop"] = { top: '0px', right: '0px', bottom: '0px', left: '3px' };
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPeriodMargin"]["tablet"] = { top: '0px', right: '0px', bottom: '0px', left: '3px' };
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPeriodMargin"]["mobile"] = { top: '0px', right: '0px', bottom: '0px', left: '3px' };

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredDescriptionColor"] = "#eff0f1";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredDescriptionTypo"]["fontFamily"] = "Manrope";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredDescriptionTypo"]["fontCategory"] = "sans-serif";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredDescriptionTypo"]["fontWeight"] = 300;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredDescriptionTypo"]["fontSize"]["desktop"] = 20;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredDescriptionTypo"]["fontSize"]["tablet"] = 20;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredDescriptionTypo"]["fontSize"]["mobile"] = 20;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredDescriptionTypo"]["fontStyle"] = "normal";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredDescriptionTypo"]["textTransform"] = "none";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredDescriptionTypo"]["textDecoration"] = "auto";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredDescriptionTypo"]["lineHeight"] = "25px";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredDescriptionTypo"]["letterSpace"] = "0px";


        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPadding"]["desktop"] = { top: '32px', right: '32px', bottom: '32px', left: '32px' };
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPadding"]["tablet"] = { top: '32px', right: '32px', bottom: '32px', left: '32px' };
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredPadding"]["mobile"] = { top: '32px', right: '32px', bottom: '32px', left: '32px' };

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredRadius"] = { top: '8px', right: '8px', bottom: '8px', left: '8px' };

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredShadow"] = [
          {
            hOffset: "0px",
            vOffset: "1px",
            blur: "2px",
            spreed: "0px",
            color: "rgba(0, 0, 0, 0.05)",
            isInset: false
          }
        ];
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredBorder"] = { color: 'rgb(247, 242, 240)', width: '1px', style: 'solid' };

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featuresBackgroundColor"] = "#0552f7cf";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featureColor"] = "white";

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featureTypo"]["fontFamily"] = "Manrope";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featureTypo"]["fontCategory"] = "sans-serif";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featureTypo"]["fontWeight"] = 300;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featureTypo"]["fontSize"]["desktop"] = 20;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featureTypo"]["fontSize"]["tablet"] = 20;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featureTypo"]["fontSize"]["mobile"] = 20;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featureTypo"]["fontStyle"] = "normal";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featureTypo"]["textTransform"] = "none";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featureTypo"]["textDecoration"] = "auto";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featureTypo"]["lineHeight"] = "25px";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featureTypo"]["letterSpace"] = "0px";

    

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featuresPadding"]["desktop"] = { top: '32px', right: '32px', bottom: '32px', left: '32px' };
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featuresPadding"]["tablet"] = { top: '32px', right: '32px', bottom: '32px', left: '32px' };
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featuresPadding"]["mobile"] = { top: '32px', right: '32px', bottom: '32px', left: '32px' };

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["featurelistGap"] = "16px";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["checkmarkColor"] = "#10b981";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["checkmarkGobalColor"] = "#10b981";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["featuredFeatureSectionStyle"]["checkmarkWidth"] = "20px";

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["actionPadding"]["desktop"] = { top: '32px', right: '32px', bottom: '32px', left: '32px' };
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["actionPadding"]["tablet"] = { top: '32px', right: '32px', bottom: '32px', left: '32px' };
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["actionPadding"]["mobile"] = { top: '32px', right: '32px', bottom: '32px', left: '32px' };

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedPadding"]["desktop"] = { top: '13px', right: '16px', bottom: '13px', left: '16px' };
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedPadding"]["tablet"] = { top: '13px', right: '16px', bottom: '13px', left: '16px' };
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedPadding"]["mobile"] = { top: '13px', right: '16px', bottom: '13px', left: '16px' };

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedColor"] = "#2563eb";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedTypo"]["fontFamily"] = "Manrope";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedTypo"]["fontCategory"] = "sans-serif";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedTypo"]["fontWeight"] = 600;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedTypo"]["fontSize"]["desktop"] = 16;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedTypo"]["fontSize"]["tablet"] = 16;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedTypo"]["fontSize"]["mobile"] = 16;
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedTypo"]["fontStyle"] = "normal";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedTypo"]["textTransform"] = "none";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedTypo"]["textDecoration"] = "auto";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedTypo"]["lineHeight"] = "25px";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedTypo"]["letterSpace"] = "0px";

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedRadius"] = { top: '8px', right: '8px', bottom: '8px', left: '8px' };

        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedShadow"] = [
          {
            hOffset: "0px",
            vOffset: "1px",
            blur: "2px",
            spreed: "0px",
            color: "rgba(0, 0, 0, 0.05)",
            isInset: false
          }
        ];
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedBgColor"] = "white";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedBgHoverBg"] = "#F3F3F3";
        draft["styleTwo"]["tabileRowStyle"]["featuredStyle"]["actionStyle"]["getStartedTextHoverColor"] = "#2563eb";

        // footer
        // draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerPadding"] = 
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerPadding"]["desktop"] = { top: '20px', right: '20px', bottom: '20px', left: '20px' };
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerPadding"]["tablet"] = { top: '20px', right: '20px', bottom: '20px', left: '20px' };
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerPadding"]["mobile"] = { top: '20px', right: '20px', bottom: '20px', left: '20px' };

        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerRadius"] = { top: '12px', right: '12px', bottom: '12px', left: '12px' };

        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerMargin"]["desktop"] = { top: '10px', right: '10px', bottom: '10px', left: '10px' };
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerMargin"]["tablet"] = { top: '10px', right: '10px', bottom: '10px', left: '10px' };
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerMargin"]["mobile"] = { top: '10px', right: '10px', bottom: '10px', left: '10px' };


        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerTitleColor"] = "rgb(17, 24, 39)";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerTitleTypo"]["fontFamily"] = "Manrope";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerTitleTypo"]["fontCategory"] = "sans-serif";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerTitleTypo"]["fontWeight"] = 600;
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerTitleTypo"]["fontSize"]["desktop"] = 18;
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerTitleTypo"]["fontSize"]["tablet"] = 18;
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerTitleTypo"]["fontSize"]["mobile"] = 18;
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerTitleTypo"]["fontStyle"] = "normal";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerTitleTypo"]["textTransform"] = "none";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerTitleTypo"]["textDecoration"] = "auto";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerTitleTypo"]["lineHeight"] = "10px";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerTitleTypo"]["letterSpace"] = "0px";

        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerDesColor"] = "rgb(75 85 99)";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerDesTypo"]["fontFamily"] = "Manrope";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerDesTypo"]["fontCategory"] = "sans-serif";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerDesTypo"]["fontWeight"] = 200;
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerDesTypo"]["fontSize"]["desktop"] = 15;
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerDesTypo"]["fontSize"]["tablet"] = 15;
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerDesTypo"]["fontSize"]["mobile"] = 15;
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerDesTypo"]["fontStyle"] = "normal";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerDesTypo"]["textTransform"] = "none";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerDesTypo"]["textDecoration"] = "auto";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerDesTypo"]["lineHeight"] = "20px";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerDesTypo"]["letterSpace"] = "0px";

        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerDesMargin"]["desktop"] = { top: '23px', right: '0px', bottom: '0px', left: '0px' };
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerDesMargin"]["tablet"] = { top: '23px', right: '0px', bottom: '0px', left: '0px' };
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerDesMargin"]["mobile"] = { top: '23px', right: '0px', bottom: '0px', left: '0px' };

        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerIconTextColor"] = "rgb(37 99 235)";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerIconTextHoverColor"] = "#ec0404f6";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerIconColor"] = "rgb(37 99 235)";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerIconWidth"] = "16px";

        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerIconTextTypo"]["fontFamily"] = "Manrope";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerIconTextTypo"]["fontCategory"] = "sans-serif";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerIconTextTypo"]["fontWeight"] = 500;
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerIconTextTypo"]["fontSize"]["desktop"] = 18;
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerIconTextTypo"]["fontSize"]["tablet"] = 18;
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerIconTextTypo"]["fontSize"]["mobile"] = 18;
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerIconTextTypo"]["fontStyle"] = "normal";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerIconTextTypo"]["textTransform"] = "none";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerIconTextTypo"]["textDecoration"] = "auto";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerIconTextTypo"]["lineHeight"] = "0px";
        draft["styleTwo"]["tabileRowStyle"]["footerStyle"]["footerIconTextTypo"]["letterSpace"] = "0px";
      break;
  }

});




export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};