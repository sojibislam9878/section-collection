
import { getBoxCSS, getTypoCSS, isValidCSS } from '../../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id}) => {
	const { style, MinimalPriceCardData, colorToggle, styleTwo, featuresColumn, iconToggle } = attributes;
	


  const generateIconFillCSS = () => {
    return MinimalPriceCardData.map((card, cardIndex) =>
      card.features
        .map(
          (feature, featureIndex) =>
            `.pricing-card-${cardIndex} .icon-${featureIndex} svg path {
                  fill: ${
                    colorToggle ? style?.iconGobalColor : feature.iconColor
                  };
                }`
        )
        .join("\n")
    ).join("\n");
  };

	
	// single Icon Color
	const generateIconFillCSSTwo = () => {
		return MinimalPriceCardData?.map((card, cardIndex) =>
			card.features.map((feature, featureIndex) =>
				`.pricing-card-${cardIndex} .icon-${featureIndex} svg {
					  fill: ${iconToggle ? styleTwo?.tabileRowStyle?.featuresSectionStyle?.iconGobalColor : feature.iconColor};
					}`).join('\n')
		).join('\n');
	};
   const tableShadowValue = styleTwo?.tabileRowStyle?.tableShadow?.map(s => `${s.hOffset} ${s.vOffset} ${s.blur} ${s.spreed} ${s.color}`).join(', ');
	const buttonShadowValue = styleTwo?.tabileRowStyle?.actionStyle?.getStartedShadow?.map(s => `${s.hOffset} ${s.vOffset} ${s.blur} ${s.spreed} ${s.color}`).join(', ');
	const featuredShadowValue = styleTwo?.tabileRowStyle?.featuredStyle?.featuredShadow?.map(s => `${s.hOffset} ${s.vOffset} ${s.blur} ${s.spreed} ${s.color}`).join(', ');
	const featuredButtonShadowValue = styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedShadow?.map(s => `${s.hOffset} ${s.vOffset} ${s.blur} ${s.spreed} ${s.color}`).join(', ');





  const { priceCardStyle, columns } = style;
	const {
		priceCardBackgroundColor,
		cardPadding,
		cardRadius,
		borderWidth,
		borderColor,
		shadow,
		hightlightStyle,
		CardTitleTypo,
		cardTitleColor,
		cardMargin,
		CardAmountTypo,
		cardAmountColor,
		CardPeriodTypo,
		cardPeriodColor,
		cardPeriodMargin,
		CardDesTypo,
		cardDesColor,
		cardDesMargin,
		cardButtonTypo,
		cardButtonPadding,
		cardButtonRadius,
		cardButtonColor,
		cardButtonHightlightColor,
		cardButtonHightlightBackgroundColor,
		cardButtonHightlightBgHoverColor,
		cardButtonBGColor,
		cardButtonBGHoverColor,
		propularShadow,
		propularBorderColor,
		propularWidth,
		priceFeatures,
	} = priceCardStyle;

  const {
    featuresPadding,
    featuresTypo,
    featuresMargin,
    iconWidth,
    iconMargin,
  } = priceFeatures;
  const { bgColor, color, padding, hightLightRadius, hightLightTypo } =
    hightlightStyle;

  const boxShadowValue = shadow
    ?.map((s) => `${s.hOffset} ${s.vOffset} ${s.blur} ${s.spreed} ${s.color}`)
    .join(", ");
  const popularShadowValue = propularShadow
    ?.map((s) => `${s.hOffset} ${s.vOffset} ${s.blur} ${s.spreed} ${s.color}`)
    .join(", ");

  const mainSl = `#${id}`;
  const bBlocksPricingTableSection = `${mainSl} .bBlocksPricingTableSection`;
	const pricingContainerOne = `${bBlocksPricingTableSection} .pricing-container-one`;
  const pricingWrapper = `${pricingContainerOne} .pricing-wrapper`;

  const pricingHeader = `${pricingWrapper} .pricing-header`;
  const pricingH1 = `${pricingHeader} .pricing-h1`;
  const pricingP = `${pricingHeader} .pricing-p`;

  const pricingGrid = `${pricingWrapper} .pricing-grid`;
  const pricingCard = `${pricingGrid} .pricing-card`;
  const popularTag = `${pricingCard} .popular-tag`;
  const cardHeader = `${pricingCard} .card-header`;
  const cardH3 = `${cardHeader} .card-h3`;
  const price = `${cardHeader} .price`;
  const amount = `${price} .amount`;
  const period = `${price} .period`;
  const description = `${cardHeader} .description`;
  const btn = `${cardHeader} .btn`;
  const btnPrimary = `${cardHeader} .btn-primary`;
  const btnOutline = `${cardHeader} .btn-outline`;

  const cardFeatures = `${pricingCard} .card-features`;
  const cardUi = `${cardFeatures} .card-ui`;
  const cardLi = `${cardUi} .card-li`;
  const icon = `${cardLi} .icon`;

  // !two

  const bBlocksPricingTableSectionTwo = `${mainSl} .bBlocksPricingTableSection `;
  const blockSl = `${bBlocksPricingTableSectionTwo} .bBlocksHorizontalPricingTable`;
  const mainContainer=`${blockSl} .main-container`;

  const pricingContainerTwo=`${mainContainer} .pricing-container`;

  const pricingCardTwo=`${pricingContainerTwo} .pricing-card`;

  const cardSection=`${pricingCardTwo} .card-section`;
  const cardH2=`${pricingCardTwo} .card-h2`;

  const priceTwo=`${pricingCardTwo} .price`;

  const amountTwo=`${priceTwo} .amount`;

  const periodTwo=`${priceTwo} .period`;

  const descriptionTwo=`${cardSection} .description`;

  const featuresSection=`${pricingCardTwo} .features-section`;
  const featureList=`${featuresSection} .feature-list`;
  const feature=`${featureList} .feature`;
  const checkmark=`${feature} .checkmark`;
  const feaTtem=`${feature} .fea-item`;
  const actionSection=`${pricingCardTwo} .action-section`;
  const linka=`${actionSection} .link-a`;
  const getStarted=`${linka} .get-started`;

  const featured=`${pricingContainerTwo} .featured`;
  const featuredCardSection=`${featured} .card-section`;
  const featuredCardH2=`${featuredCardSection} .card-h2`;
  const featuredPrice=`${featuredCardSection} .price`;

  const featuredAmount=`${featuredPrice} .amount`;
  const featuredPeriod=`${featuredPrice} .period`;
  const featuredDescription=`${featuredCardSection} .description`;

  const featuredSection=`${featured} .features-section`;
  const featuredList=`${featuredSection} .feature-list`;
  const featuredFeature=`${featuredList} .feature`;
  const featuredCheckmark=`${featuredFeature} .checkmark`;
  const featuredFeaItem=`${featuredFeature} .fea-item`;

  const featuredActionSection=`${featured} .action-section`;
  const featuredlinka=`${featured} .link-a`;
  const featuredGetStarted=`${featuredlinka} .get-started`;

  const footerContent=`${mainContainer} .footer-content`;
  const footerSection=`${mainContainer} .footer-section`;
  const footerText=`${footerSection} .footer-text`;
  const footerh3=`${footerText} .footer-h3`;
  const footerp=`${footerText} .footer-p`;
  const footerIcon=`${footerSection} .footer-icon`;
  const footerIconText=`${footerIcon} .footer-icon-text`;
  const footerIcons=`${footerIcon} .icon`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		${getTypoCSS("", style?.headerStyle?.titleStyle?.typo)?.googleFontLink}
		${getTypoCSS("", style?.headerStyle?.desStyle?.desTypo)?.googleFontLink}
		${getTypoCSS("", hightLightTypo)?.googleFontLink}
		${getTypoCSS("", CardTitleTypo)?.googleFontLink}
		${getTypoCSS("", CardAmountTypo)?.googleFontLink}
		${getTypoCSS("", CardPeriodTypo)?.googleFontLink}
		${getTypoCSS("", CardDesTypo)?.googleFontLink}
		${getTypoCSS("", cardButtonTypo)?.googleFontLink}
		${getTypoCSS("", featuresTypo)?.googleFontLink}

			${getTypoCSS('', styleTwo?.tabileRowStyle?.titleStyle?.titleTypo)?.googleFontLink}
			${getTypoCSS('', styleTwo?.tabileRowStyle?.priceStyle?.amountTypo)?.googleFontLink}
			${getTypoCSS('', styleTwo?.tabileRowStyle?.priceStyle?.periodTypo)?.googleFontLink}
			${getTypoCSS('', styleTwo?.tabileRowStyle?.priceStyle?.descriptionTypo)?.googleFontLink}
			${getTypoCSS('', styleTwo?.tabileRowStyle?.featuresSectionStyle?.featureTypo)?.googleFontLink}
			${getTypoCSS('', styleTwo?.tabileRowStyle?.actionStyle?.getStartedTypo)?.googleFontLink}
			${getTypoCSS('', styleTwo?.tabileRowStyle?.featuredStyle?.featuredTitleTypo)?.googleFontLink}
			${getTypoCSS('', styleTwo?.tabileRowStyle?.featuredStyle?.featuredAmountTypo)?.googleFontLink}
			${getTypoCSS('', styleTwo?.tabileRowStyle?.featuredStyle?.featuredPeriodTypo)?.googleFontLink}
			${getTypoCSS('', styleTwo?.tabileRowStyle?.featuredStyle?.featuredDescriptionTypo)?.googleFontLink}
			${getTypoCSS('', styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featureTypo)?.googleFontLink}
			${getTypoCSS('', styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedTypo)?.googleFontLink}
			${getTypoCSS('', styleTwo?.tabileRowStyle?.footerStyle?.footerTitleTypo)?.googleFontLink}
			${getTypoCSS('', styleTwo?.tabileRowStyle?.footerStyle?.footerDesTypo)?.googleFontLink}
			${getTypoCSS('', styleTwo?.tabileRowStyle?.footerStyle?.footerIconTextTypo)?.googleFontLink}




		${getTypoCSS(pricingH1, style?.headerStyle?.titleStyle?.typo)?.styles}
		${getTypoCSS(pricingP, style?.headerStyle?.desStyle?.desTypo)?.styles}
		${getTypoCSS(popularTag, hightLightTypo)?.styles}
		${getTypoCSS(cardH3, CardTitleTypo)?.styles}
		${getTypoCSS(amount, CardAmountTypo)?.styles}
		${getTypoCSS(period, CardPeriodTypo)?.styles}
		${getTypoCSS(description, CardDesTypo)?.styles}
		${getTypoCSS(btn, cardButtonTypo)?.styles}
		${getTypoCSS(cardUi, featuresTypo)?.styles}


			${getTypoCSS(cardH2, styleTwo?.tabileRowStyle?.titleStyle?.titleTypo)?.styles}
			${getTypoCSS(amountTwo, styleTwo?.tabileRowStyle?.priceStyle?.amountTypo)?.styles}
			${getTypoCSS(periodTwo, styleTwo?.tabileRowStyle?.priceStyle?.periodTypo)?.styles}
			${getTypoCSS(descriptionTwo, styleTwo?.tabileRowStyle?.priceStyle?.descriptionTypo)?.styles}
			${getTypoCSS(feaTtem, styleTwo?.tabileRowStyle?.featuresSectionStyle?.featureTypo)?.styles}
			${getTypoCSS(getStarted, styleTwo?.tabileRowStyle?.actionStyle?.getStartedTypo)?.styles}
			${getTypoCSS(featuredCardH2, styleTwo?.tabileRowStyle?.featuredStyle?.featuredTitleTypo)?.styles}
			${getTypoCSS(featuredAmount, styleTwo?.tabileRowStyle?.featuredStyle?.featuredAmountTypo)?.styles}
			${getTypoCSS(featuredPeriod, styleTwo?.tabileRowStyle?.featuredStyle?.featuredPeriodTypo)?.styles}
			${getTypoCSS(featuredDescription, styleTwo?.tabileRowStyle?.featuredStyle?.featuredDescriptionTypo)?.styles}
			${getTypoCSS(featuredFeaItem, styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featureTypo)?.styles}
			${getTypoCSS(featuredGetStarted, styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedTypo)?.styles}
			${getTypoCSS(footerh3, styleTwo?.tabileRowStyle?.footerStyle?.footerTitleTypo)?.styles}
			${getTypoCSS(footerp, styleTwo?.tabileRowStyle?.footerStyle?.footerDesTypo)?.styles}
			${getTypoCSS(footerIconText, styleTwo?.tabileRowStyle?.footerStyle?.footerIconTextTypo)?.styles}


		${pricingH1}{
		  color:${style?.headerStyle?.titleStyle?.color};
		}
		${pricingP}{
		  color:${style?.headerStyle?.desStyle?.desColor};
		}
		${pricingGrid}{
		  grid-template-columns: repeat(${columns.desktop}, 1fr);
		  gap:${style?.columnGap};
		  max-width:${style?.priceCardStyle?.priceWidth};
		}
		${pricingCard}{
		  background: ${
        priceCardBackgroundColor?.includes("gradient")
          ? priceCardBackgroundColor
          : `${priceCardBackgroundColor}`
      };
		  ${isValidCSS("border-radius", getBoxCSS(cardRadius))}
		  border : ${borderWidth} solid ${borderColor};
		  box-shadow: ${boxShadowValue};
		}
		${pricingCard}.popular{
		  border : ${propularWidth} solid ${propularBorderColor};
		  box-shadow: ${popularShadowValue};
		}
		${popularTag}{
		  background: ${bgColor?.includes("gradient") ? bgColor : `${bgColor}`};
		  color:${color};
		  ${isValidCSS("border-radius", getBoxCSS(hightLightRadius))}
		  ${isValidCSS("padding", getBoxCSS(padding?.desktop))}
		}
		${cardHeader}{
		   ${isValidCSS("padding", getBoxCSS(cardPadding?.desktop))}
		}
		${cardH3}{
		   ${isValidCSS("margin", getBoxCSS(cardMargin?.desktop))}
		   color:${cardTitleColor};
		}
		${amount}{
		  color:${cardAmountColor};
		}
		${period}{
		  color:${cardPeriodColor};
		  ${isValidCSS("margin", getBoxCSS(cardPeriodMargin?.desktop))}
		}
		${description}{
		  color:${cardDesColor};
		  ${isValidCSS("margin", getBoxCSS(cardDesMargin?.desktop))}
		}
		${btn}{
		  ${isValidCSS("border-radius", getBoxCSS(cardButtonRadius))}
		  ${isValidCSS("padding", getBoxCSS(cardButtonPadding?.desktop))}
		}
		${btnOutline}{
			color:${cardButtonColor};
			background: ${
        cardButtonBGColor?.includes("gradient")
          ? cardButtonBGColor
          : `${cardButtonBGColor}`
      };
		}
		${btnOutline}:hover{
			background: ${
        cardButtonBGHoverColor?.includes("gradient")
          ? cardButtonBGHoverColor
          : `${cardButtonBGHoverColor}`
      };
		}
		${btnPrimary}{
			color:${cardButtonHightlightColor};
			background: ${
        cardButtonHightlightBackgroundColor?.includes("gradient")
          ? cardButtonHightlightBackgroundColor
          : `${cardButtonHightlightBackgroundColor}`
      };
		}
		${btnPrimary}:hover{
			background: ${
        cardButtonHightlightBgHoverColor?.includes("gradient")
          ? cardButtonHightlightBgHoverColor
          : `${cardButtonHightlightBgHoverColor}`
      };
		}
		${cardFeatures}{
		  ${isValidCSS("padding", getBoxCSS(featuresPadding?.desktop))}
		}
		${cardUi}{
		 color:${priceCardStyle?.priceFeatures?.featureColor};
		}
		${cardLi}{
		  ${isValidCSS("margin", getBoxCSS(featuresMargin?.desktop))}
		}
		${icon}{
		width:${iconWidth};
		  height:${iconWidth};
		  ${isValidCSS("margin", getBoxCSS(iconMargin?.desktop))}
		}
   	    ${generateIconFillCSS()}


		@media only screen and (min-width: 641px) and (max-width: 1024px) {
            ${popularTag} {
	          ${isValidCSS("padding", getBoxCSS(padding?.tablet))}
            }
			${cardHeader}{
		      ${isValidCSS("padding", getBoxCSS(cardPadding?.tablet))}
		    }
			${cardH3}{
		      ${isValidCSS("margin", getBoxCSS(cardMargin?.tablet))}
		    }
			${period}{
		      ${isValidCSS("margin", getBoxCSS(cardPeriodMargin?.tablet))}
		    }
			${description}{
		      ${isValidCSS("margin", getBoxCSS(cardDesMargin?.tablet))}
		    }
			${btn}{
		      ${isValidCSS("padding", getBoxCSS(cardButtonPadding?.tablet))}
		    }
			${btn}{
		      ${isValidCSS("padding", getBoxCSS(cardButtonPadding?.tablet))}
		    }
			${cardFeatures}{
		      ${isValidCSS("padding", getBoxCSS(featuresPadding?.tablet))}
		    }
			${cardLi}{
		      ${isValidCSS("margin", getBoxCSS(featuresMargin?.tablet))}
		    }
			${icon}{
		      ${isValidCSS("margin", getBoxCSS(iconMargin?.tablet))}
		    }
			${pricingGrid}{
			  grid-template-columns: repeat(${columns?.tablet}, 1fr);
			}
		}

		@media only screen and (max-width: 641px) {
			${popularTag} {
	          ${isValidCSS("padding", getBoxCSS(padding?.mobile))}
            }
			${cardHeader} {
	          ${isValidCSS("padding", getBoxCSS(cardPadding?.mobile))}
            }
			${cardH3}{
		      ${isValidCSS("margin", getBoxCSS(cardMargin?.mobile))}
		    }
			${period}{
		      ${isValidCSS("margin", getBoxCSS(cardPeriodMargin?.mobile))}
		    }
			${description}{
		      ${isValidCSS("margin", getBoxCSS(cardDesMargin?.mobile))}
		    }
			${btn}{
		      ${isValidCSS("Padding", getBoxCSS(cardButtonPadding?.mobile))}
		    }
			${cardFeatures}{
		      ${isValidCSS("Padding", getBoxCSS(featuresPadding?.mobile))}
		    }
			${cardLi}{
		      ${isValidCSS("margin", getBoxCSS(featuresMargin?.mobile))}
		    }
			${icon}{
		      ${isValidCSS("margin", getBoxCSS(iconMargin?.mobile))}
		    }
		    ${pricingGrid}{
			  grid-template-columns: repeat(${columns?.mobile}, 1fr);
			}
	    }

        ${mainContainer} {
		   max-width:${styleTwo?.rowWidth};
		 }
		${pricingContainerTwo}{
			gap:${styleTwo?.tabileRowStyle?.rowGap};
		}
		${pricingCardTwo}{
		  background: ${styleTwo?.tabileRowStyle?.backgroundColor?.includes('gradient') ? styleTwo?.tabileRowStyle?.backgroundColor : `${styleTwo?.tabileRowStyle?.backgroundColor}`};
		  ${isValidCSS("border-radius", getBoxCSS(styleTwo?.tabileRowStyle?.tableRadius))}
		  box-shadow: ${tableShadowValue};
		  border: ${styleTwo?.tabileRowStyle?.tableBorder?.width} ${styleTwo?.tabileRowStyle?.tableBorder?.style} ${styleTwo?.tabileRowStyle?.tableBorder?.color};
		}
		${cardSection}{
		  ${isValidCSS("padding", getBoxCSS(styleTwo?.tabileRowStyle?.tablePadding?.desktop))}
		}
		${cardH2}{
		  color:${styleTwo?.tabileRowStyle?.titleStyle?.titleColor};
		  ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.titleStyle?.titleMargin?.desktop))}
		}
		${priceTwo}{
		  ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.priceStyle?.priceMarging?.desktop))}
		}
		${amountTwo}{
		  color:${styleTwo?.tabileRowStyle?.priceStyle?.amountColor};
		}
		${amountTwo} svg{
		  height:${styleTwo?.tabileRowStyle?.priceIconWidth};
		  fill:${styleTwo?.tabileRowStyle?.priceIconColor};
		}
		${periodTwo}{
		  color:${styleTwo?.tabileRowStyle?.priceStyle?.periodColor};
		  ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.priceStyle?.periodMargin?.desktop))}
		}
		${descriptionTwo}{
		  color:${styleTwo?.tabileRowStyle?.priceStyle?.descriptionColor};
		}
		${featuresSection}{
		  background: ${styleTwo?.tabileRowStyle?.featuresSectionStyle?.featuresBackgroundColor?.includes('gradient') ? styleTwo?.tabileRowStyle?.featuresSectionStyle?.featuresBackgroundColor : `${styleTwo?.tabileRowStyle?.featuresSectionStyle?.featuresBackgroundColor}`};
		  ${isValidCSS("padding", getBoxCSS(styleTwo?.tabileRowStyle?.featuresSectionStyle?.featuresPadding?.desktop))}
		
		}
		${featureList}{
		  gap:${styleTwo?.tabileRowStyle?.featuresSectionStyle?.featurelistGap};
		  grid-template-columns: repeat(${featuresColumn?.desktop}, 1fr);
		}
        ${feaTtem}{
		 color:${styleTwo?.tabileRowStyle?.featuresSectionStyle?.featureColor};
		}
		${checkmark} svg{
		  height:${styleTwo?.tabileRowStyle?.featuresSectionStyle?.checkmarkWidth};
		  width:${styleTwo?.tabileRowStyle?.featuresSectionStyle?.checkmarkWidth};
		}
        ${generateIconFillCSSTwo()}
		${actionSection}{
		  background: ${styleTwo?.tabileRowStyle?.featuresSectionStyle?.featuresBackgroundColor?.includes('gradient') ? styleTwo?.tabileRowStyle?.featuresSectionStyle?.featuresBackgroundColor : `${styleTwo?.tabileRowStyle?.featuresSectionStyle?.featuresBackgroundColor}`};
		}
		${getStarted}{
		  color:${styleTwo?.tabileRowStyle?.actionStyle?.getStartedColor};
		  box-shadow:${buttonShadowValue};
		  background: ${styleTwo?.tabileRowStyle?.actionStyle?.getStartedBgColor?.includes('gradient') ? styleTwo?.tabileRowStyle?.actionStyle?.getStartedBgColor : `${styleTwo?.tabileRowStyle?.actionStyle?.getStartedBgColor}`};
		  ${isValidCSS("border-radius", getBoxCSS(styleTwo?.tabileRowStyle?.actionStyle?.getStartedRadius))}
		  ${isValidCSS("padding", getBoxCSS(styleTwo?.tabileRowStyle?.actionStyle?.getStartedPadding?.desktop))}
		}
		${linka}:hover .get-started{
		   background-color: ${styleTwo?.tabileRowStyle?.actionStyle?.getStartedBgHover}!important;
		   color:${styleTwo?.tabileRowStyle?.actionStyle?.getStartedBgHoverTextColor};
		}
        ${featured}{
		  background: ${styleTwo?.tabileRowStyle?.featuredStyle?.featuredBgColor?.includes('gradient') ? style?.tabileRowStyle?.featuredStyle?.featuredBgColor : `${styleTwo?.tabileRowStyle?.featuredStyle?.featuredBgColor}`};
		  ${isValidCSS("border-radius", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.featuredRadius))}
		  border: ${styleTwo?.tabileRowStyle?.featuredStyle?.featuredBorder?.width} ${styleTwo?.tabileRowStyle?.featuredStyle?.featuredBorder?.style} ${styleTwo?.tabileRowStyle?.featuredStyle?.featuredBorder?.color};
		  box-shadow:${featuredShadowValue};
		}
		${featuredCardSection}{
		 ${isValidCSS("padding", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.featuredPadding?.desktop))}
		}
		${featuredCardH2}{
		 color:${styleTwo?.tabileRowStyle?.featuredStyle?.featuredTitleColor};
		 ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.featuredTitleMargin?.desktop))}
		}
		${featuredPrice}{
           ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.featuredPriceMarging?.desktop))}
		}
        ${featuredAmount}{
		   color:${styleTwo?.tabileRowStyle?.featuredStyle?.featuredAmountColor};
		}
		${featuredAmount} svg{
		  height:${styleTwo?.tabileRowStyle?.featuredStyle?.featuredPriceIconWidth};
		  fill:${styleTwo?.tabileRowStyle?.featuredStyle?.featuredPriceIconColor};
		}
		${featuredPeriod}{
		  color:${style?.tabileRowStyle?.featuredStyle?.featuredPeriodColor};
		  ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.featuredPeriodMargin?.desktop))}
		}
		${featuredDescription}{
		  color:${styleTwo?.tabileRowStyle?.featuredStyle?.featuredDescriptionColor};
		}
		${featuredSection}{
		 ${isValidCSS("padding", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresPadding?.desktop))}
		  background: ${styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresBackgroundColor?.includes('gradient') ? styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresBackgroundColor : `${styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresBackgroundColor}`};
		}
		${featuredList}{
		  gap:${styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featurelistGap};
		  grid-template-columns: repeat(${featuresColumn?.desktop}, 1fr);
		}
		${featuredCheckmark} svg{
		  height:${styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.checkmarkWidth};
		  width:${styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.checkmarkWidth};
		}
		${featuredFeaItem}{
		 color: ${styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featureColor};
		}
		${featuredActionSection}{
		  background: ${styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresBackgroundColor?.includes('gradient') ? styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresBackgroundColor : `${styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresBackgroundColor}`};
		}
		${featuredGetStarted}{
		 color:${styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedColor};
		 box-shadow:${featuredButtonShadowValue};
		 background: ${styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedBgColor?.includes('gradient') ? styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedBgColor : `${styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedBgColor}`};
		 ${isValidCSS("border-radius", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedRadius))}
		 ${isValidCSS("padding", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedPadding?.desktop))}
		}
		${featuredlinka}:hover .get-started{
		  background-color: ${styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedBgHoverBg}!important;
		  color:${styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedTextHoverColor};
		}
		${footerContent}{
		
		}
        ${footerh3}{
	     color:${styleTwo?.tabileRowStyle?.footerStyle?.footerTitleColor};
        }
		${footerp}{
		  color:${styleTwo?.tabileRowStyle?.footerStyle?.footerDesColor};
		  ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.footerStyle?.footerDesMargin?.desktop))}
		}
	    ${footerIconText}{
		  color:${styleTwo?.tabileRowStyle?.footerStyle?.footerIconTextColor};
	    }
	    ${footerIconText}:hover{
		  color:${styleTwo?.tabileRowStyle?.footerStyle?.footerIconTextHoverColor};
	    }
        ${footerIcons} svg{
		  height:${styleTwo?.tabileRowStyle?.footerStyle?.footerIconWidth};
		  width:${styleTwo?.tabileRowStyle?.footerStyle?.footerIconWidth};
		  fill:${styleTwo?.tabileRowStyle?.footerStyle?.footerIconColor};
		}





	    @media only screen and (min-width: 641px) and (max-width: 1024px) {
		  ${cardSection}{
             ${isValidCSS("padding", getBoxCSS(styleTwo?.tabileRowStyle?.tablePadding?.tablet))}
		  }
		  ${cardH2}{
		    ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.titleStyle?.titleMargin?.tablet))}
		  }
		  ${priceTwo}{
		    ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.priceStyle?.priceMarging?.tablet))}
		  }
		  ${periodTwo}{
		   ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.priceStyle?.periodMargin?.tablet))}
		  }
		  ${featuresSection}{
		   ${isValidCSS("padding", getBoxCSS(styleTwo?.tabileRowStyle?.featuresSectionStyle?.featuresPadding?.tablet))}
		  }
		  ${getStarted}{
		   ${isValidCSS("padding", getBoxCSS(styleTwo?.tabileRowStyle?.actionStyle?.getStartedPadding?.tablet))}
		  }
		  ${featuredCardH2}{
		   ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.featuredTitleMargin?.tablet))}
		  }
		  ${featuredPrice}{
           ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.featuredPriceMarging?.tablet))}
		  }
		  ${featuredPeriod}{
		   ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.featuredPeriodMargin?.tablet))}
		  }
		  ${featuredSection}{
		    ${isValidCSS("padding", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresPadding?.tablet))}
		  }

		 ${featuredGetStarted}{
		 	${isValidCSS("padding", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedPadding?.tablet))}
		 }
		 ${footerp}{
		  ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.footerStyle?.footerDesMargin?.tablet))}
		 }
		 ${featureList}{
		  grid-template-columns: repeat(${featuresColumn?.tablet}, 1fr);
		 }
		 ${featuredList}{
		   grid-template-columns: repeat(${featuresColumn?.tablet}, 1fr);
		 }
		}

	    @media only screen and (max-width: 641px) {
		  ${cardSection}{
		    ${isValidCSS("padding", getBoxCSS(styleTwo?.tabileRowStyle?.tablePadding?.mobile))}
		  }
		  ${cardH2}{
		    ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.titleStyle?.titleMargin?.mobile))}
		  }
		  ${priceTwo}{
		   ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.priceStyle?.priceMarging?.mobile))}
		  }
		  ${periodTwo}{
		   ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.priceStyle?.periodMargin?.mobile))}
		  }
		  ${featuresSection}{
		   ${isValidCSS("padding", getBoxCSS(styleTwo?.tabileRowStyle?.featuresSectionStyle?.featuresPadding?.mobile))}
		  }
		  ${getStarted}{
		   ${isValidCSS("padding", getBoxCSS(styleTwo?.tabileRowStyle?.actionStyle?.getStartedPadding?.mobile))}
		 }
		 ${featuredCardH2}{
		   ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.featuredTitleMargin?.mobile))}
	     }
		 ${featuredPrice}{
           ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.featuredPriceMarging?.mobile))}
		  }
		  ${featuredPeriod}{
		   ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.featuredPeriodMargin?.mobile))}
		  }
		  ${featuredSection}{
		    ${isValidCSS("padding", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresPadding?.mobile))}
		  }
		 ${featuredGetStarted}{
		 	${isValidCSS("padding", getBoxCSS(styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedPadding?.mobile))}
		 }
		 ${footerp}{
		  ${isValidCSS("margin", getBoxCSS(styleTwo?.tabileRowStyle?.footerStyle?.footerDesMargin?.mobile))}
		 }
		 ${featureList}{
		  grid-template-columns: repeat(${featuresColumn?.mobile}, 1fr);
		}
		 ${featuredList}{
		   grid-template-columns: repeat(${featuresColumn?.mobile}, 1fr);
		 }
		}




	`,
      }}
    />
  );
}
export default Style;
