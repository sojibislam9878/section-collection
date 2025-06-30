import { __ } from "@wordpress/i18n";
import { PanelBody, PanelRow, __experimentalSpacer as Spacer, __experimentalUnitControl as UnitControl, __experimentalBorderControl as BorderControl, } from "@wordpress/components";
import { BoxControl, ColorControl, Device, Label, ShadowControl, SolidBackground, Typography } from "../../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import { featuredPriceingMargin, featuredTitleMargin, paddingReset, resetButtonRadius, resetCardButtonPadding, resetCardButtonRadius, resetcardDesMargin, resetCardMargin, resetcardMargin, resetCardPadding, resetCardPaddingTwo, resetCardPeriodMargin, resetFeatureddButtonRadius, resetFeaturedGetStartedPadding, resetFeaturedPadding, resetFeaturedPaddingTwo, resetFeaturedPriceMargin, resetFeaturedRadius, resetFeaturesMargin, resetFeaturesPadding, resetFeaturesPaddingTwo, resetfooterDesMargin, resetgetStartedPadding, resetHightRadius, resetIconMargin, resetPriceMargin, resetRadius, } from "../../../../utils/options";
import { emUnit, perUnit, pxUnit } from "../../../../../../../bpl-tools/utils/options";


const Style = ({ attributes, setAttributes, device }) => {
  const { style, styleTwo, themeStyle } = attributes;

  const { headerStyle, priceCardStyle } = style;

  const { titleStyle, desStyle } = headerStyle;
  const { typo, color } = titleStyle;
  const { desTypo, desColor } = desStyle;

  const { hightlightStyle } = priceCardStyle;


  return (
    <>
      {themeStyle?.theme === "style-1" ?
        (
          <>
            <PanelBody
              className="bPlPanelBody"
              title={__("Header styles", "section-collection")}
              initialOpen={false}>
              <Typography
                label={__("Typography :", "section-collection")}
                value={typo}
                defaults={{
                  fontSize: { desktop: 48, tablet: 45, mobile: 40 },
                }}
                onChange={(typog) => {
                  const updatedStyle = updateData(
                    style,
                    typog,
                    "headerStyle",
                    "titleStyle",
                    "typo"
                  );
                  setAttributes({ style: updatedStyle });
                }}
              />
              <Spacer />

              <ColorControl
                label={__("Title Color :", "section-collection")}
                defaultColor="#111827"
                value={color}
                onChange={(newcolor) => {
                  const updatedStyle = updateData(
                    style,
                    newcolor,
                    "headerStyle",
                    "titleStyle",
                    "color"
                  );
                  setAttributes({ style: updatedStyle });
                }}
              />
              <Typography
                label={__("Typography :", "section-collection")}
                value={desTypo}
                defaults={{
                  fontSize: { desktop: 20, tablet: 19, mobile: 18 },
                }}
                onChange={(typog) => {
                  const updatedStyle = updateData(
                    style,
                    typog,
                    "headerStyle",
                    "desStyle",
                    "desTypo"
                  );
                  setAttributes({ style: updatedStyle });
                }}
              />
              <Spacer />

              <ColorControl
                label={__("Des Color :", "section-collection")}
                defaultColor="#8a8f95"
                value={desColor}
                onChange={(newcolor) => {
                  const updatedStyle = updateData(
                    style,
                    newcolor,
                    "headerStyle",
                    "desStyle",
                    "desColor"
                  );
                  setAttributes({ style: updatedStyle });
                }}
              />
            </PanelBody>
            <PanelBody
              className="bPlPanelBody"
              title={__("Pricing Column Style", "section-collection")}
              initialOpen={false}>
              

              {/* Propular Card */}
              <UnitControl
                label={__(" Propular Border Width :", "b-pricing-table")}
                value={priceCardStyle?.propularWidth}
                onChange={(width) => { setAttributes({ style: updateData(style, width, 'priceCardStyle', 'propularWidth') }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Propular Border Color :", "b-pricing-table")} defaultColor="#111827"
                value={priceCardStyle?.propularBorderColor}
                onChange={(color) => { setAttributes({ style: updateData(style, color, 'priceCardStyle', 'propularBorderColor') }); }}
              />
              <Spacer />
              <ShadowControl
                label={__("Propular Shadow :", "b-pricing-table")}
                value={priceCardStyle?.propularShadow}
                onChange={(newShadow) => { setAttributes({ style: updateData(style, newShadow, 'priceCardStyle', 'propularShadow') }); }}
              />
              <Spacer />

              <SolidBackground
                label={__("Propular Button BG Color :", "b-pricing-table")}
                value={hightlightStyle?.bgColor}
                onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "priceCardStyle", "hightlightStyle", "bgColor") }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Propular Button Text Color :", "b-pricing-table")} defaultColor="white"
                value={hightlightStyle?.color}
                onChange={(color) => { setAttributes({ style: updateData(style, color, 'priceCardStyle', 'hightlightStyle', 'color') }); }}
              />
              <Spacer />
              <Typography
                label={__("Propular Button text Typography :", "b-pricing-table")}
                value={hightlightStyle?.hightLightTypo}
                defaults={{
                  fontSize: { desktop: 12, tablet: 12, mobile: 12 },
                }}
                onChange={(typog) => { setAttributes({ style: updateData(style, typog, "priceCardStyle", "hightlightStyle", "hightLightTypo") }); }}
              />
              <Spacer />
              <BoxControl label={__("Propular Button Radius :", "b-pricing-table")}
                values={hightlightStyle?.hightLightRadius} resetValues={resetHightRadius}
                onChange={(value) => { setAttributes({ style: updateData(style, value, "priceCardStyle", "hightlightStyle", "hightLightRadius") }); }}
              />
              <Spacer />

              <PanelRow>
                <Label className="">{__("Propular Button Padding :", "b-pricing-table")}</Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={hightlightStyle?.padding[device]}
                resetValues={paddingReset}
                onChange={(padd) => { setAttributes({ style: updateData(style, padd, "priceCardStyle", "hightlightStyle", "padding", device) }); }}
              />
              <Spacer />



              <SolidBackground
                label={__("Background Color :")}
                value={priceCardStyle?.priceCardBackgroundColor}
                onChange={(bgcolor) => {
                  setAttributes({
                    style: updateData(
                      style,
                      bgcolor,
                      "priceCardStyle",
                      "priceCardBackgroundColor"
                    ),
                  });
                }}
              />
              <Spacer />
              <BoxControl
                values={priceCardStyle?.cardPadding[device]}
                resetValues={resetCardPadding}
                onChange={(padd) => {
                  setAttributes({
                    style: updateData(
                      style,
                      padd,
                      "priceCardStyle",
                      "cardPadding",
                      device
                    ),
                  });
                }}
              />
              <Spacer />
              <BoxControl
                label={__("Radius :")}
                values={priceCardStyle?.cardRadius}
                resetValues={resetRadius}
                onChange={(value) => {
                  setAttributes({
                    style: updateData(style, value, "priceCardStyle", "cardRadius"),
                  });
                }}
              />
              <Spacer />
              <UnitControl
                label={__("Border Width :", "section-collection")}
                value={priceCardStyle?.borderWidth}
                onChange={(width) => {
                  setAttributes({
                    style: updateData(style, width, "priceCardStyle", "borderWidth"),
                  });
                }}
              />
              <Spacer />
              <ColorControl
                label={__("Border Color :", "section-collection")}
                defaultColor="#e5e7eb"
                value={priceCardStyle?.borderColor}
                onChange={(color) => {
                  setAttributes({
                    style: updateData(style, color, "priceCardStyle", "borderColor"),
                  });
                }}
              />
              <Spacer />
              <ShadowControl
                label={__("Shadow :", "section-collection")}
                defaults={[{ hOffset: '0px', vOffset: '1px', blur: '3px', spreed: '-9px', color: 'rgba(0, 0, 0, 0.1)', isInset: false }]}
                value={priceCardStyle?.shadow}
                onChange={(newShadow) => {
                  setAttributes({
                    style: updateData(style, newShadow, "priceCardStyle", "shadow"),
                  });
                }}
              />
              <Spacer />
              <ColorControl
                label={__("Title Color :", "section-collection")}
                defaultColor="#111827"
                value={priceCardStyle?.cardTitleColor}
                onChange={(newColor) => {
                  setAttributes({
                    style: updateData(
                      style,
                      newColor,
                      "priceCardStyle",
                      "cardTitleColor"
                    ),
                  });
                }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">{__("Card Header Padding :", "section-collection")}</Label>
                <Device />
              </PanelRow>
              <Typography
                label={__("Title Typography :", "section-collection")}
                value={priceCardStyle?.CardTitleTypo}
                defaults={{
                  fontSize: { desktop: 25, tablet: 25, mobile: 25 },
                }}
                onChange={(typog) => {
                  setAttributes({
                    style: updateData(
                      style,
                      typog,
                      "priceCardStyle",
                      "CardTitleTypo"
                    ),
                  });
                }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">
                  {__("Title Margin :", "section-collection")}
                </Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={priceCardStyle?.cardMargin[device]}
                resetValues={resetcardMargin}
                onChange={(margin) => {
                  setAttributes({
                    style: updateData(
                      style,
                      margin,
                      "priceCardStyle",
                      "cardMargin",
                      device
                    ),
                  });
                }}
              />
              <Spacer />
              <Typography
                label={__("Amount Typography :", "section-collection")}
                value={priceCardStyle?.CardAmountTypo}
                defaults={{
                  fontSize: { desktop: 36, tablet: 36, mobile: 36 },
                }}
                onChange={(typog) => {
                  setAttributes({
                    style: updateData(
                      style,
                      typog,
                      "priceCardStyle",
                      "CardAmountTypo"
                    ),
                  });
                }}
              />
              <Spacer />
              <ColorControl
                label={__("Amount Color :", "section-collection")}
                defaultColor="#111827"
                value={priceCardStyle?.cardAmountColor}
                onChange={(newColor) => {
                  setAttributes({
                    style: updateData(
                      style,
                      newColor,
                      "priceCardStyle",
                      "cardAmountColor"
                    ),
                  });
                }}
              />
              <Spacer />
              <Typography
                label={__("Period Typography :", "section-collection")}
                value={priceCardStyle?.CardPeriodTypo}
                defaults={{
                  fontSize: { desktop: 22, tablet: 22, mobile: 22 },
                }}
                onChange={(typog) => {
                  setAttributes({
                    style: updateData(
                      style,
                      typog,
                      "priceCardStyle",
                      "CardPeriodTypo"
                    ),
                  });
                }}
              />
              <Spacer />
              <ColorControl
                label={__("Period Color :", "section-collection")}
                defaultColor="#6b7280"
                value={priceCardStyle?.cardPeriodColor}
                onChange={(newColor) => {
                  setAttributes({
                    style: updateData(
                      style,
                      newColor,
                      "priceCardStyle",
                      "cardPeriodColor"
                    ),
                  });
                }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">
                  {__("Period Margin :", "section-collection")}
                </Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={priceCardStyle?.cardPeriodMargin[device]}
                resetValues={resetCardPeriodMargin}
                onChange={(margin) => {
                  setAttributes({
                    style: updateData(
                      style,
                      margin,
                      "priceCardStyle",
                      "cardPeriodMargin",
                      device
                    ),
                  });
                }}
              />
              <Spacer />
              <Typography
                label={__("Description Typography :", "section-collection")}
                value={priceCardStyle?.CardDesTypo}
                defaults={{
                  fontSize: { desktop: 18, tablet: 18, mobile: 18 },
                }}
                onChange={(typog) => {
                  setAttributes({
                    style: updateData(style, typog, "priceCardStyle", "CardDesTypo"),
                  });
                }}
              />
              <Spacer />
              <ColorControl
                label={__("Description Color :", "section-collection")}
                defaultColor="#4b5563"
                value={priceCardStyle?.cardDesColor}
                onChange={(newColor) => {
                  setAttributes({
                    style: updateData(
                      style,
                      newColor,
                      "priceCardStyle",
                      "cardDesColor"
                    ),
                  });
                }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">
                  {__("Description Margin :", "section-collection")}
                </Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={priceCardStyle?.cardDesMargin[device]}
                resetValues={resetcardDesMargin}
                onChange={(margin) => {
                  setAttributes({
                    style: updateData(
                      style,
                      margin,
                      "priceCardStyle",
                      "cardDesMargin",
                      device
                    ),
                  });
                }}
              />
            </PanelBody>

            {/* button */}
            <PanelBody
              className="bPlPanelBody"
              title={__("Button ", "section-collection")}
              initialOpen={false}>
              <Spacer />
              <Typography
                label={__("Text Typography :", "section-collection")}
                value={priceCardStyle?.cardButtonTypo}
                defaults={{
                  fontSize: { desktop: 22, tablet: 22, mobile: 22 },
                }}
                onChange={(typog) => {
                  setAttributes({
                    style: updateData(
                      style,
                      typog,
                      "priceCardStyle",
                      "cardButtonTypo"
                    ),
                  });
                }}
              />
              <Spacer />
              <ColorControl
                label={__("Text Default Color :", "section-collection")}
                defaultColor="#111827"
                value={priceCardStyle?.cardButtonColor}
                onChange={(newColor) => {
                  setAttributes({
                    style: updateData(
                      style,
                      newColor,
                      "priceCardStyle",
                      "cardButtonColor"
                    ),
                  });
                }}
              />
              <Spacer />
              <SolidBackground
                label={__("Default BG Color :", "section-collection")}
                value={priceCardStyle?.cardButtonBGColor}
                onChange={(newBgcolor) => {
                  setAttributes({
                    style: updateData(
                      style,
                      newBgcolor,
                      "priceCardStyle",
                      "cardButtonBGColor"
                    ),
                  });
                }}
              />
              <Spacer />
              <SolidBackground
                label={__("Default Hover BG Color :", "section-collection")}
                value={priceCardStyle?.cardButtonBGHoverColor}
                onChange={(newBgcolor) => {
                  setAttributes({
                    style: updateData(
                      style,
                      newBgcolor,
                      "priceCardStyle",
                      "cardButtonBGHoverColor"
                    ),
                  });
                }}
              />
              <Spacer />
              <ColorControl
                label={__("Text Hightlight Color :", "section-collection")}
                defaultColor="white"
                value={priceCardStyle?.cardButtonHightlightColor}
                onChange={(newColor) => {
                  setAttributes({
                    style: updateData(
                      style,
                      newColor,
                      "priceCardStyle",
                      "cardButtonHightlightColor"
                    ),
                  });
                }}
              />
              <Spacer />
              <SolidBackground
                label={__("Hightlight BG Color :", "section-collection")}
                value={priceCardStyle?.cardButtonHightlightBackgroundColor}
                onChange={(newBgcolor) => {
                  setAttributes({
                    style: updateData(
                      style,
                      newBgcolor,
                      "priceCardStyle",
                      "cardButtonHightlightBackgroundColor"
                    ),
                  });
                }}
              />
              <Spacer />
              <SolidBackground
                label={__("Hightlight BG Hover Color  :", "section-collection")}
                value={priceCardStyle?.cardButtonHightlightBgHoverColor}
                onChange={(newBgcolor) => {
                  setAttributes({
                    style: updateData(
                      style,
                      newBgcolor,
                      "priceCardStyle",
                      "cardButtonHightlightBgHoverColor"
                    ),
                  });
                }}
              />
              <Spacer />
              <BoxControl
                label={__("Radius :", "section-collection")}
                values={priceCardStyle?.cardButtonRadius}
                resetValues={resetCardButtonRadius}
                onChange={(value) => {
                  setAttributes({
                    style: updateData(
                      style,
                      value,
                      "priceCardStyle",
                      "cardButtonRadius"
                    ),
                  });
                }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">{__("Padding :", "section-collection")}</Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={priceCardStyle?.cardButtonPadding[device]}
                resetValues={resetCardButtonPadding}
                onChange={(margin) => {
                  setAttributes({
                    style: updateData(
                      style,
                      margin,
                      "priceCardStyle",
                      "cardButtonPadding",
                      device
                    ),
                  });
                }}
              />
            </PanelBody>

            <Spacer />
            {/* Features */}
            <PanelBody
              className="bPlPanelBody"
              title={__("Features ", "section-collection")}
              initialOpen={false}>
              
              <ColorControl
                label={__("Text  Color :", "section-collection")}
                defaultColor="#111111"
                value={priceCardStyle?.priceFeatures?.featureColor}
                onChange={(newColor) => {
                  setAttributes({
                    style: updateData(
                      style,
                      newColor,
                      "priceCardStyle",
                      "priceFeatures",
                      "featureColor"
                    ),
                  });
                }}
              />
              <Spacer />
              <Typography
                label={__("Text Typography :", "section-collection")}
                value={priceCardStyle?.priceFeatures?.featuresTypo}
                defaults={{
                  fontSize: { desktop: 19, tablet: 19, mobile: 19 },
                }}
                onChange={(typog) => {
                  setAttributes({
                    style: updateData(
                      style,
                      typog,
                      "priceCardStyle",
                      "priceFeatures",
                      "featuresTypo"
                    ),
                  });
                }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">{__("Padding :", "section-collection")}</Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={priceCardStyle?.priceFeatures?.featuresPadding?.[device]}
                resetValues={resetFeaturesPadding}
                onChange={(padding) => {
                  setAttributes({
                    style: updateData(
                      style,
                      padding,
                      "priceCardStyle",
                      "priceFeatures",
                      "featuresPadding",
                      device
                    ),
                  });
                }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">{__("Margin :", "section-collection")}</Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={priceCardStyle?.priceFeatures?.featuresMargin?.[device]}
                resetValues={resetFeaturesMargin}
                onChange={(margin) => {
                  setAttributes({
                    style: updateData(
                      style,
                      margin,
                      "priceCardStyle",
                      "priceFeatures",
                      "featuresMargin",
                      device
                    ),
                  });
                }}
              />
              <Spacer />
              <UnitControl
                label={__("Icon Width :", "section-collection")}
                value={priceCardStyle?.priceFeatures?.iconWidth}
                onChange={(width) => {
                  setAttributes({
                    style: updateData(
                      style,
                      width,
                      "priceCardStyle",
                      "priceFeatures",
                      "iconWidth"
                    ),
                  });
                }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">
                  {__("Icon Margin :", "section-collection")}
                </Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={priceCardStyle?.priceFeatures?.iconMargin[device]}
                resetValues={resetIconMargin}
                onChange={(margin) => {
                  setAttributes({
                    style: updateData(
                      style,
                      margin,
                      "priceCardStyle",
                      "priceFeatures",
                      "iconMargin",
                      device
                    ),
                  });
                }}
              />
            </PanelBody>
          </>
        ) :
        (
          <>
            {/* //!Table Row Style */}
            <PanelBody
              className="bPlPanelBody"
              title={__("Pricing Row Styles", "section-collection")}
              initialOpen={false}
            >
              <Spacer />
              <UnitControl label={__('Row Gap:', 'section-collection')} labelPosition='left'
                value={styleTwo?.tabileRowStyle?.rowGap}
                units={[pxUnit(), perUnit(), emUnit()]}
                onChange={(newRowgap) => { setAttributes({ styleTwo: updateData(styleTwo, newRowgap, "tabileRowStyle", "rowGap") }); }}
              />
              <Spacer />
              <SolidBackground
                label={__("Background Color :")}
                value={styleTwo?.tabileRowStyle?.backgroundColor}
                onChange={(bgcolor) => { setAttributes({ styleTwo: updateData(styleTwo, bgcolor, "tabileRowStyle", "backgroundColor") }); }}
              />
              <Spacer />
              <BoxControl label={__("Radius :")}
                values={styleTwo?.tabileRowStyle?.tableRadius} resetValues={resetRadius}
                onChange={(value) => { setAttributes({ styleTwo: updateData(styleTwo, value, "tabileRowStyle", "tableRadius") }); }}
              />
              <Spacer />
              <ShadowControl
                label={__("Shadow :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.tableShadow}
                defaults={[{ hOffset: '0px', vOffset: '0px', blur: '0px', spreed: '0px', color: 'rgba(0, 0, 0, 0.05)', isInset: false, }]}
                onChange={(newShadow) => { setAttributes({ styleTwo: updateData(styleTwo, newShadow, 'tabileRowStyle', 'tableShadow') }); }}
              />
              <Spacer />
              <BorderControl
                label={__("Border Color :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.tableBorder}
                onChange={(color) => { setAttributes({ styleTwo: updateData(styleTwo, color, 'tabileRowStyle', 'tableBorder') }); }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">{__(" Padding :", "section-collection")}</Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={styleTwo?.tabileRowStyle?.tablePadding[device]}
                resetValues={resetCardPaddingTwo}
                onChange={(padd) => { setAttributes({ styleTwo: updateData(styleTwo, padd, "tabileRowStyle", "tablePadding", device) }); }}
              />
              <Spacer />
              <Typography
                label={__("Title Typography :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.titleStyle?.titleTypo}
                defaults={{ fontSize: { desktop: 24, tablet: 24, mobile: 24 } }}
                onChange={(typog) => { setAttributes({ styleTwo: updateData(styleTwo, typog, "tabileRowStyle", "titleStyle", "titleTypo") }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Title Color :", "section-collection")} defaultColor="#000000"
                value={styleTwo?.tabileRowStyle?.titleStyle?.titleColor}
                onChange={(newColor) => { setAttributes({ styleTwo: updateData(styleTwo, newColor, 'tabileRowStyle', 'titleStyle', 'titleColor') }); }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">{__("Title Margin :", "section-collection")}</Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={styleTwo?.tabileRowStyle?.titleStyle?.titleMargin[device]}
                resetValues={resetCardMargin}
                onChange={(marin) => { setAttributes({ styleTwo: updateData(styleTwo, marin, "tabileRowStyle", "titleStyle", "titleMargin", device) }); }}
              />
              <Spacer />
              {/* start */}
              <UnitControl label={__('Currency Size:', 'section-collection')} labelPosition='left'
                value={styleTwo?.tabileRowStyle?.priceIconWidth}
                units={[pxUnit(), perUnit(), emUnit()]}
                onChange={(iconWidth) => { setAttributes({ styleTwo: updateData(styleTwo, iconWidth, "tabileRowStyle", "priceIconWidth") }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Currency Color", "section-collection")}
                defaultColor="#000000"
                value={styleTwo?.tabileRowStyle?.priceIconColor}
                onChange={(color) => setAttributes({ styleTwo: updateData(styleTwo, color, 'tabileRowStyle', 'priceIconColor') })}
              />
              <Spacer />
              <Typography
                label={__("Price Typography :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.priceStyle?.amountTypo}
                defaults={{ fontSize: { desktop: 38, tablet: 38, mobile: 38 } }}
                onChange={(typog) => { setAttributes({ styleTwo: updateData(styleTwo, typog, "tabileRowStyle", "priceStyle", "amountTypo") }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Price Color :", "section-collection")} defaultColor="#000000"
                value={styleTwo?.tabileRowStyle?.priceStyle?.amountColor}
                onChange={(newColor) => { setAttributes({ styleTwo: updateData(styleTwo, newColor, 'tabileRowStyle', 'priceStyle', 'amountColor') }); }}
              />
              <Spacer />
              <Typography
                label={__("Period Typography :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.priceStyle?.periodTypo}
                defaults={{ fontSize: { desktop: 22, tablet: 22, mobile: 22 } }}
                onChange={(typog) => { setAttributes({ styleTwo: updateData(styleTwo, typog, "tabileRowStyle", "priceStyle", "periodTypo") }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Period Color :", "section-collection")} defaultColor="#6b7280"
                value={styleTwo?.tabileRowStyle?.priceStyle?.periodColor}
                onChange={(newColor) => { setAttributes({ styleTwo: updateData(styleTwo, newColor, 'tabileRowStyle', 'priceStyle', 'periodColor') }); }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">{__("Price Margin :", "section-collection")}</Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={styleTwo?.tabileRowStyle?.priceStyle?.priceMarging[device]}
                resetValues={resetPriceMargin}
                onChange={(marin) => { setAttributes({ styleTwo: updateData(styleTwo, marin, "tabileRowStyle", "priceStyle", "priceMarging", device) }); }}
              />
              <Spacer />
              <Typography
                label={__("Description Typography :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.priceStyle?.descriptionTypo}
                defaults={{ fontSize: { desktop: 20, tablet: 20, mobile: 20 } }}
                onChange={(typog) => { setAttributes({ styleTwo: updateData(styleTwo, typog, "tabileRowStyle", "priceStyle", "descriptionTypo") }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Description Color :", "section-collection")} defaultColor="#6b7280"
                value={styleTwo?.tabileRowStyle?.priceStyle?.descriptionColor}
                onChange={(newColor) => { setAttributes({ styleTwo: updateData(styleTwo, newColor, 'tabileRowStyle', 'priceStyle', 'descriptionColor') }); }}
              />
              <Spacer />
              <Typography
                label={__("Feature Typography :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.featuresSectionStyle?.featureTypo}
                defaults={{ fontSize: { desktop: 20, tablet: 20, mobile: 20 } }}
                onChange={(typog) => { setAttributes({ styleTwo: updateData(styleTwo, typog, "tabileRowStyle", "featuresSectionStyle", "featureTypo") }); }}
              />
              <Spacer />
              <SolidBackground
                label={__("Feature BG Color :", "section-collection")} defaultColor="#d3cece12"
                value={styleTwo?.tabileRowStyle?.featuresSectionStyle?.featuresBackgroundColor}
                onChange={(newColor) => { setAttributes({ styleTwo: updateData(styleTwo, newColor, 'tabileRowStyle', 'featuresSectionStyle', 'featuresBackgroundColor') }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Feature Color :", "section-collection")} defaultColor="#111111"
                value={styleTwo?.tabileRowStyle?.featuresSectionStyle?.featureColor}
                onChange={(newColor) => { setAttributes({ styleTwo: updateData(styleTwo, newColor, 'tabileRowStyle', 'featuresSectionStyle', 'featureColor') }); }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">{__("Feature Padding :", "section-collection")}</Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={styleTwo?.tabileRowStyle?.featuresSectionStyle?.featuresPadding[device]}
                resetValues={resetFeaturesPaddingTwo}
                onChange={(padd) => { setAttributes({ styleTwo: updateData(styleTwo, padd, "tabileRowStyle", "featuresSectionStyle", "featuresPadding", device) }); }}
              />
              <Spacer />
              <UnitControl label={__('Feature Gap:', 'section-collection')} labelPosition='left'
                value={styleTwo?.tabileRowStyle?.featuresSectionStyle?.featurelistGap}
                units={[pxUnit(), perUnit(), emUnit()]}
                onChange={(newRowgap) => { setAttributes({ styleTwo: updateData(styleTwo, newRowgap, "tabileRowStyle", "featuresSectionStyle", "featurelistGap") }); }}
              />
              <Spacer />
              <UnitControl
                label={__("Feature Icon Size :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.featuresSectionStyle?.checkmarkWidth}
                onChange={(width) => { setAttributes({ styleTwo: updateData(styleTwo, width, 'tabileRowStyle', "featuresSectionStyle", 'checkmarkWidth') }); }}
              />
              <Spacer />
              <Typography
                label={__("Button Typography :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.actionStyle?.getStartedTypo}
                defaults={{ fontSize: { desktop: 16, tablet: 16, mobile: 16 } }}
                onChange={(typog) => { setAttributes({ styleTwo: updateData(styleTwo, typog, "tabileRowStyle", "actionStyle", "getStartedTypo") }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Button Text Color :", "section-collection")} defaultColor="white"
                value={styleTwo?.tabileRowStyle?.actionStyle?.getStartedColor}
                onChange={(newColor) => { setAttributes({ styleTwo: updateData(styleTwo, newColor, 'tabileRowStyle', 'actionStyle', 'getStartedColor') }); }}
              />
              <Spacer />
              <ShadowControl
                label={__("Button Shadow :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.actionStyle?.getStartedShadow}
                defaults={[{ hOffset: '0px', vOffset: '1px', blur: '2px', spreed: '0px', color: 'rgba(0, 0, 0, 0.05)', isInset: false, }]}
                onChange={(newShadow) => { setAttributes({ styleTwo: updateData(styleTwo, newShadow, 'tabileRowStyle', 'actionStyle', 'getStartedShadow') }); }}
              />
              <Spacer />
              <SolidBackground
                label={__("Button Bg Color :")}
                value={styleTwo?.tabileRowStyle?.actionStyle?.getStartedBgColor}
                onChange={(bgcolor) => { setAttributes({ styleTwo: updateData(styleTwo, bgcolor, "tabileRowStyle", "actionStyle", "getStartedBgColor") }); }}
              />
              <Spacer />
              <ColorControl defaultColor="#1053e2"
                label={__("Button Bg Hover Color  :")}
                value={styleTwo?.tabileRowStyle?.actionStyle?.getStartedBgHover}
                onChange={(bgcolor) => { setAttributes({ styleTwo: updateData(styleTwo, bgcolor, "tabileRowStyle", "actionStyle", "getStartedBgHover") }); }}
              />
              <Spacer />
              <ColorControl defaultColor="#ffffff"
                label={__("Button Hover Text Color  :")}
                value={styleTwo?.tabileRowStyle?.actionStyle?.getStartedBgHoverTextColor}
                onChange={(bgcolor) => { setAttributes({ styleTwo: updateData(styleTwo, bgcolor, "tabileRowStyle", "actionStyle", "getStartedBgHoverTextColor") }); }}
              />
              <Spacer />
              <BoxControl label={__("Button Radius :")}
                values={styleTwo?.tabileRowStyle?.actionStyle?.getStartedRadius} resetValues={resetButtonRadius}
                onChange={(value) => { setAttributes({ styleTwo: updateData(styleTwo, value, "tabileRowStyle", "actionStyle", "getStartedRadius") }); }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">{__("Button Padding :", "section-collection")}</Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={styleTwo?.tabileRowStyle?.actionStyle?.getStartedPadding[device]}
                resetValues={resetgetStartedPadding}
                onChange={(padd) => { setAttributes({ styleTwo: updateData(styleTwo, padd, "tabileRowStyle", "actionStyle", "getStartedPadding", device) }); }}
              />
              <Spacer />
            </PanelBody>

            {/* //!Popular Table Row Style */}
            <PanelBody className="bPlPanelBody" title={__("Popular Pricing Row Styles", "section-collection")} initialOpen={true}>
              <SolidBackground
                label={__("Background Color :")}
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredBgColor}
                onChange={(bgColor) => { setAttributes({ styleTwo: updateData(styleTwo, bgColor, "tabileRowStyle", "featuredStyle", "featuredBgColor") }); }}
              />
              <Spacer />

              <BoxControl label={__("Radius :")}
                values={styleTwo?.tabileRowStyle?.featuredStyle?.featuredRadius} resetValues={resetFeaturedRadius}
                onChange={(value) => { setAttributes({ styleTwo: updateData(styleTwo, value, "tabileRowStyle", "featuredStyle", "featuredRadius") }); }}
              />
              <Spacer />
              <BorderControl
                label={__("Border Color :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredBorder}
                onChange={(color) => { setAttributes({ styleTwo: updateData(styleTwo, color, 'tabileRowStyle', 'featuredStyle', 'featuredBorder') }); }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">{__("Padding :", "section-collection")}</Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={styleTwo?.tabileRowStyle?.featuredStyle?.featuredPadding[device]}
                resetValues={resetFeaturedPaddingTwo}
                onChange={(padd) => { setAttributes({ styleTwo: updateData(styleTwo, padd, "tabileRowStyle", "featuredStyle", "featuredPadding", device) }); }}
              />
              <Spacer />
              <ShadowControl
                label={__("Shadow :", "section-collection")}
                defaults={[{ hOffset: '0px', vOffset: '0px', blur: '0px', spreed: '0px', color: 'rgba(0, 0, 0, 0.05)', isInset: false }]}
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredShadow}
                onChange={(newShadow) => { setAttributes({ styleTwo: updateData(styleTwo, newShadow, 'tabileRowStyle', 'featuredStyle', 'featuredShadow') }); }}
              />
              <Spacer />
              <Typography
                label={__("Title Typography :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredTitleTypo}
                defaults={{ fontSize: { desktop: 24, tablet: 24, mobile: 24 } }}
                onChange={(typog) => { setAttributes({ styleTwo: updateData(styleTwo, typog, "tabileRowStyle", "featuredStyle", "featuredTitleTypo") }); }}
              />
              <ColorControl
                label={__("Title Color :", "section-collection")} defaultColor="#FFFFFF"
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredTitleColor}
                onChange={(color) => { setAttributes({ styleTwo: updateData(styleTwo, color, 'tabileRowStyle', 'featuredStyle', 'featuredTitleColor') }); }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">{__("Title Margin :", "section-collection")}</Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={styleTwo?.tabileRowStyle?.featuredStyle?.featuredTitleMargin[device]}
                resetValues={featuredTitleMargin}
                onChange={(mar) => { setAttributes({ styleTwo: updateData(styleTwo, mar, "tabileRowStyle", "featuredStyle", "featuredTitleMargin", device) }); }}
              />
              <Spacer />

              <PanelRow>
                <Label className="">{__("Price Margin :", "section-collection")}</Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={styleTwo?.tabileRowStyle?.featuredStyle?.featuredPriceMarging[device]}
                resetValues={featuredPriceingMargin}
                onChange={(mar) => { setAttributes({ styleTwo: updateData(styleTwo, mar, "tabileRowStyle", "featuredStyle", "featuredPriceMarging", device) }); }}
              />
              <Spacer />
              {/* start most */}
              <UnitControl label={__('Currency Size:', 'section-collection')} labelPosition='left'
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredPriceIconWidth}
                units={[pxUnit(), perUnit(), emUnit()]}
                onChange={(iconWidth) => { setAttributes({ styleTwo: updateData(styleTwo, iconWidth, "tabileRowStyle", "featuredStyle", "featuredPriceIconWidth") }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Currency Color", "section-collection")}
                defaultColor="#FFFFFF"
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredPriceIconColor}
                onChange={(color) => setAttributes({ styleTwo: updateData(styleTwo, color, 'tabileRowStyle', 'featuredStyle', 'featuredPriceIconColor') })}
              />
              <Spacer />
              <Typography
                label={__("Price Typography :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredAmountTypo}
                defaults={{ fontSize: { desktop: 38, tablet: 38, mobile: 38 } }}
                onChange={(typog) => { setAttributes({ styleTwo: updateData(styleTwo, typog, "tabileRowStyle", "featuredStyle", "featuredAmountTypo") }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Price Color :", "section-collection")} defaultColor="white"
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredAmountColor}
                onChange={(newColor) => { setAttributes({ styleTwo: updateData(styleTwo, newColor, 'tabileRowStyle', 'featuredStyle', 'featuredAmountColor') }); }}
              />
              <Spacer />
              <Typography
                label={__("Period Typography :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredPeriodTypo}
                defaults={{ fontSize: { desktop: 22, tablet: 22, mobile: 22 } }}
                onChange={(typog) => { setAttributes({ styleTwo: updateData(styleTwo, typog, "tabileRowStyle", "featuredStyle", "featuredPeriodTypo") }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Period Color :", "section-collection")} defaultColor="#edeff1"
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredPeriodColor}
                onChange={(newColor) => { setAttributes({ styleTwo: updateData(styleTwo, newColor, 'tabileRowStyle', 'featuredStyle', 'featuredPeriodColor') }); }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">{__("Period Margin :", "section-collection")}</Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={styleTwo?.tabileRowStyle?.featuredStyle?.featuredPeriodMargin[device]}
                resetValues={resetFeaturedPriceMargin}
                onChange={(marin) => { setAttributes({ styleTwo: updateData(styleTwo, marin, "tabileRowStyle", "featuredStyle", "featuredPeriodMargin", device) }); }}
              />
              <Spacer />
              <Typography
                label={__("Description Typography :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredDescriptionTypo}
                defaults={{ fontSize: { desktop: 20, tablet: 20, mobile: 20 } }}
                onChange={(typog) => { setAttributes({ styleTwo: updateData(styleTwo, typog, "tabileRowStyle", "featuredStyle", "featuredDescriptionTypo") }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Description Color :", "section-collection")} defaultColor="#eff0f1"
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredDescriptionColor}
                onChange={(newColor) => { setAttributes({ styleTwo: updateData(styleTwo, newColor, 'tabileRowStyle', 'featuredStyle', 'featuredDescriptionColor') }); }}
              />
              <Spacer />
              <Typography
                label={__("Feature Typography :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featureTypo}
                defaults={{ fontSize: { desktop: 20, tablet: 20, mobile: 20 } }}
                onChange={(typog) => { setAttributes({ styleTwo: updateData(styleTwo, typog, "tabileRowStyle", "featuredStyle", "featuredFeatureSectionStyle", "featureTypo") }); }}
              />
              <Spacer />

              <SolidBackground
                label={__("Feature BG Color :", "section-collection")} defaultColor="rgba(4, 81, 247, 0.658)"
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresBackgroundColor}
                onChange={(newColor) => { setAttributes({ styleTwo: updateData(styleTwo, newColor, 'tabileRowStyle', 'featuredStyle', 'featuredFeatureSectionStyle', 'featuresBackgroundColor') }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Feature Color :", "section-collection")} defaultColor="white"
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featureColor}
                onChange={(newColor) => { setAttributes({ styleTwo: updateData(styleTwo, newColor, 'tabileRowStyle', 'featuredStyle', 'featuredFeatureSectionStyle', 'featureColor') }); }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">{__("Feature Padding :", "section-collection")}</Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresPadding[device]}
                resetValues={resetFeaturedPadding}
                onChange={(padd) => { setAttributes({ styleTwo: updateData(styleTwo, padd, "tabileRowStyle", "featuredStyle", "featuredFeatureSectionStyle", "featuresPadding", device) }); }}
              />
              <Spacer />
              <UnitControl label={__('Feature Gap:', 'section-collection')} labelPosition='left'
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featurelistGap}
                units={[pxUnit(), perUnit(), emUnit()]}
                onChange={(newRowgap) => { setAttributes({ styleTwo: updateData(styleTwo, newRowgap, "tabileRowStyle", "featuredStyle", "featuredFeatureSectionStyle", "featurelistGap") }); }}
              />
              <Spacer />
              <UnitControl
                label={__("Feature Icon Size :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.checkmarkWidth}
                onChange={(width) => { setAttributes({ styleTwo: updateData(styleTwo, width, 'tabileRowStyle', 'featuredStyle', 'featuredFeatureSectionStyle', 'checkmarkWidth') }); }}
              />
              <Spacer />

              <Typography
                label={__("Button Typography :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedTypo}
                defaults={{ fontSize: { desktop: 16, tablet: 16, mobile: 16 } }}
                onChange={(typog) => { setAttributes({ styleTwo: updateData(styleTwo, typog, "tabileRowStyle", "featuredStyle", "actionStyle", "getStartedTypo") }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Button Text Color :", "section-collection")} defaultColor="#2563eb"
                value={styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedColor}
                onChange={(newColor) => { setAttributes({ styleTwo: updateData(styleTwo, newColor, 'tabileRowStyle', 'featuredStyle', 'actionStyle', 'getStartedColor') }); }}
              />
              <Spacer />
              <ShadowControl
                label={__("Button Shadow :", "section-collection")}
                defaults={[{ hOffset: '0px', vOffset: '1px', blur: '2px', spreed: '0px', color: 'rgba(0, 0, 0, 0.05)', isInset: false }]}
                value={styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedShadow}
                onChange={(newShadow) => { setAttributes({ styleTwo: updateData(styleTwo, newShadow, 'tabileRowStyle', 'featuredStyle', 'actionStyle', 'getStartedShadow') }); }}
              />
              <Spacer />
              <SolidBackground
                label={__("Button Bg Color :")}
                value={styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedBgColor}
                onChange={(bgcolor) => { setAttributes({ styleTwo: updateData(styleTwo, bgcolor, "tabileRowStyle", "featuredStyle", "actionStyle", "getStartedBgColor") }); }}
              />
              <Spacer />
              <ColorControl defaultColor="#F3F3F3"
                label={__("Button Bg Hover Color  :")}
                value={styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedBgHoverBg}
                onChange={(bgcolor) => { setAttributes({ styleTwo: updateData(styleTwo, bgcolor, "tabileRowStyle", "featuredStyle", "actionStyle", "getStartedBgHoverBg") }); }}
              />
              <Spacer />
              <ColorControl defaultColor="#2563eb"
                label={__("Button Hover Text Color  :")}
                value={styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedTextHoverColor}
                onChange={(bgcolor) => { setAttributes({ styleTwo: updateData(styleTwo, bgcolor, "tabileRowStyle", "featuredStyle", "actionStyle", "getStartedTextHoverColor") }); }}
              />
              <Spacer />
              <BoxControl label={__("Button Radius :")}
                values={styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedRadius} resetValues={resetFeatureddButtonRadius}
                onChange={(value) => { setAttributes({ styleTwo: updateData(styleTwo, value, "tabileRowStyle", "featuredStyle", "actionStyle", "getStartedRadius") }); }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">{__("Button Padding :", "section-collection")}</Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={styleTwo?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedPadding[device]}
                resetValues={resetFeaturedGetStartedPadding}
                onChange={(padd) => { setAttributes({ styleTwo: updateData(styleTwo, padd, "tabileRowStyle", "featuredStyle", "actionStyle", "getStartedPadding", device) }); }}
              />
              <Spacer />
            </PanelBody>

            {/* //!footer */}
            <PanelBody className="bPlPanelBody" title={__("Footer Style", "section-collection")} initialOpen={false}>
              <Typography
                label={__("Title Typography :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.footerStyle?.footerTitleTypo}
                defaults={{ fontSize: { desktop: 18, tablet: 18, mobile: 18 } }}
                onChange={(typog) => { setAttributes({ styleTwo: updateData(styleTwo, typog, "tabileRowStyle", "footerStyle", "footerTitleTypo") }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Title Color :", "section-collection")} defaultColor="rgb(17, 24, 39)"
                value={styleTwo?.tabileRowStyle?.footerStyle?.footerTitleColor}
                onChange={(color) => { setAttributes({ styleTwo: updateData(styleTwo, color, 'tabileRowStyle', 'footerStyle', 'footerTitleColor') }); }}
              />
              <Spacer />
              <Typography
                label={__("Description Typography :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.footerStyle?.footerDesTypo}
                defaults={{ fontSize: { desktop: 15, tablet: 15, mobile: 15 } }}
                onChange={(typog) => { setAttributes({ styleTwo: updateData(styleTwo, typog, "tabileRowStyle", "footerStyle", "footerDesTypo") }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Description Color :", "section-collection")} defaultColor="rgb(75 85 99)"
                value={styleTwo?.tabileRowStyle?.footerStyle?.footerDesColor}
                onChange={(color) => { setAttributes({ styleTwo: updateData(styleTwo, color, 'tabileRowStyle', 'footerStyle', 'footerDesColor') }); }}
              />
              <Spacer />
              <PanelRow>
                <Label className="">{__("Description Margin :", "section-collection")}</Label>
                <Device />
              </PanelRow>
              <BoxControl
                values={styleTwo?.tabileRowStyle?.footerStyle?.footerDesMargin[device]}
                resetValues={resetfooterDesMargin}
                onChange={(padd) => { setAttributes({ styleTwo: updateData(styleTwo, padd, "tabileRowStyle", "footerStyle", "footerDesMargin", device) }); }}
              />
              <Spacer />

              <Typography
                label={__("Button Text Typography :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.footerStyle?.footerIconTextTypo}
                defaults={{ fontSize: { desktop: 18, tablet: 18, mobile: 18 } }}
                onChange={(typog) => { setAttributes({ styleTwo: updateData(styleTwo, typog, "tabileRowStyle", "footerStyle", "footerIconTextTypo") }); }}
              />
              <Spacer />
              <ColorControl
                label={__("Button Text Color :", "section-collection")} defaultColor="rgb(37 99 235)"
                value={styleTwo?.tabileRowStyle?.footerStyle?.footerIconTextColor}
                onChange={(color) => { setAttributes({ styleTwo: updateData(styleTwo, color, 'tabileRowStyle', 'footerStyle', 'footerIconTextColor') }); }}
              />
              <Spacer />
              <ColorControl defaultColor="#ec0404f6"
                label={__("Button Text Hover Color  :")}
                value={styleTwo?.tabileRowStyle?.footerStyle?.footerIconTextHoverColor}
                onChange={(bgcolor) => { setAttributes({ styleTwo: updateData(styleTwo, bgcolor, "tabileRowStyle", "footerStyle", "footerIconTextHoverColor") }); }}
              />
              <Spacer />
              <ColorControl defaultColor="rgb(37 99 235)"
                label={__("Icon Color  :")}
                value={styleTwo?.tabileRowStyle?.footerStyle?.footerIconColor}
                onChange={(bgcolor) => { setAttributes({ styleTwo: updateData(styleTwo, bgcolor, "tabileRowStyle", "footerStyle", "footerIconColor") }); }}
              />
              <Spacer />
              {/* hoyni */}
              {/* <ColorControl defaultColor="#ec0404f6"
                label={__("Icon Hover Color  :")}
                value={styleTwo?.tabileRowStyle?.footerStyle?.footerIconHoverColor}
                onChange={(bgcolor) => { setAttributes({ styleTwo: updateData(styleTwo, bgcolor, "tabileRowStyle", "footerStyle", "footerIconHoverColor") }); }}
              />
              <Spacer /> */}
              <UnitControl
                label={__("Icon Width :", "section-collection")}
                value={styleTwo?.tabileRowStyle?.footerStyle?.footerIconWidth}
                onChange={(width) => { setAttributes({ styleTwo: updateData(styleTwo, width, 'tabileRowStyle', 'footerStyle', 'footerIconWidth') }); }}
              />
              <Spacer />

            </PanelBody>
          </>
        )
      }

    </>
  );
};

export default Style;
