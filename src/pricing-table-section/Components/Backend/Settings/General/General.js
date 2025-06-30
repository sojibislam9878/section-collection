import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalInputControl as InputControl, __experimentalSpacer as Spacer, __experimentalUnitControl as UnitControl, TextareaControl, PanelRow, RangeControl, SelectControl, TextControl, ToggleControl} from '@wordpress/components';
import { Device, IconLibrary, ItemsPanel, Label } from '../../../../../../../bpl-tools/Components';
import { updateData } from '../../../../../../../bpl-tools/utils/functions';
import { emUnit, perUnit, pxUnit } from '../../../../../../../bpl-tools/utils/options';
import { PricingColumn } from '../PricingColumn/PricingColumn';
import { themeSwitch } from '../../../../utils/functions';
import { themeOptions } from '../../../../utils/options';


const General = ({ attributes, setAttributes, device = "desktop" }) => {
  const { MinimalPriceHeaderData, style, styleTwo, themeStyle, footerData } = attributes;
  return (
    <>
    {/* theme Select Control */}
    <PanelBody className='bPlPanelBody' title={__('Choose Style', 'section-collection')} initialOpen={false}>
        <SelectControl 
        className="help" 
        value={themeStyle?.theme}
        onChange={(val) => setAttributes(themeSwitch(val, attributes, device))}
        options={themeOptions}
          help={(<>
            <span className="span">
              {__("Warning : ")}
            </span>
            <span className="text">{__("If you change and save settings for one style, and then switch to another style and save, the changes made to the first style will be lost.")}</span>
          </>
          )}
        />
    </PanelBody>
    {/* Style -1 */}
      {themeStyle?.theme === "style-1" && (
        <>
          <PanelBody className="bPlPanelBody" title={__("Header Content", "section-collection")} initialOpen={false}>
            <InputControl
              label={__("Title", "section-collection")}
              placeholder="Enter Your Title"
              value={MinimalPriceHeaderData?.title?.replace(/<\/?[^>]+(>|$)/g, "")}
              onChange={(newtext) => { setAttributes({ MinimalPriceHeaderData: { ...MinimalPriceHeaderData, title: newtext } }) }}
            />

            <Spacer />

            <TextareaControl
              label={__("Decription", "section-collection")}
              placeholder="Enter Your Decription"
              value={MinimalPriceHeaderData?.dec?.replace(/<\/?[^>]+(>|$)/g, "")}
              onChange={(newtext) => { setAttributes({ MinimalPriceHeaderData: { ...MinimalPriceHeaderData, dec: newtext } }) }}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Pricing Column", "section-collection")}
            initialOpen={true}
          >

            <ItemsPanel  {...{ attributes, setAttributes }}
              arrKey="MinimalPriceCardData"
              newItem={{
                "highlightText": "POPULAR",
                "name": "New Card",
                "id": false,
                "currency": "$",
                "price": "29",
                "period": "/month",
                "description": "For growing teams and businesses",
                "buttonText": "New Button",
                "buttonLink": "https://bplugins.com/blog/",
                "buttonNewTab": false,
                "highlighted": false,
                "features": [
                  {
                    "title": "1 user",
                    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"#53df55\" d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>"
                  },
                  {
                    "title": "5GB storage",
                    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"#53df55\" d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>"
                  },
                  {
                    "title": "Community support",
                    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"#53df55\" d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>"
                  }
                ]
              }}
              ItemSettings={PricingColumn}
              itemLabel="Column"
              design="sortable"
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Responsive", "section-collection")}
            initialOpen={false}
          >
            <UnitControl label={__('Column Size:', 'section-collection')} labelPosition='left'
              value={style?.priceCardStyle?.priceWidth}
              units={[pxUnit(), perUnit(), emUnit()]}
              onChange={(newColWidth) => {
                const updatedStyle = updateData(style, newColWidth, "priceCardStyle", "priceWidth"); setAttributes({ style: updatedStyle });
              }}
            />
            <Spacer />
            <PanelRow>
              <Label className="">{__('Columns', "section-collection")}</Label>
              <Device />
            </PanelRow>

            <RangeControl
              value={style?.columns[device]}
              onChange={(newCol) => {
                const updatedStyle = updateData(style, newCol, "columns", device);
                setAttributes({ style: updatedStyle });
              }}
              min={1}
              max={4}
            />
            <Spacer />
            <UnitControl label={__('Column Gap:', 'section-collection')} labelPosition='left' value={style?.columnGap}
              units={[pxUnit(), perUnit(), emUnit()]}
              onChange={(newColgap) => {
                const updatedStyle = updateData(style, newColgap, "columnGap",);
                setAttributes({ style: updatedStyle });
              }}
            />
          </PanelBody>
        </>
      )}

      {/* Style -2 */}
      {themeStyle?.theme === "style-2" && (
        <>
          {/* Row Width */}
          <PanelBody className="bPlPanelBody" title={__('Layout Settings', 'section-collection')} initialOpen={false}>
            <UnitControl
              label={__("Width :", "section-collection")}
              value={styleTwo?.rowWidth}
              onChange={(width) => { setAttributes({ styleTwo: updateData(styleTwo, width, 'rowWidth') }) }}
            />
          </PanelBody>
          {/* Horizontal Table Data Row */}
          <PanelBody className="bPlPanelBody" title={__("Pricing Table Rows ", "section-collection")} initialOpen={true}>
            <ItemsPanel  {...{ attributes, setAttributes, device }}
              arrKey="MinimalPriceCardData"
              newItem={
                {
                  "name": "New Team",
                  "featured": false,
                  "currencyTwo": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><path d=\"M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z\"/></svg>",
                  "price": "39",
                  "period": "/month",
                  "description": "Advanced tools for teams",
                  "buttonText": "New Contact Sales",
                  "buttonLink": "https://bplugins.com/pricing/",
                  "buttonNewTab": false,
                  "features": [
                    {
                      "title": "Unlimited users",
                      "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>",
                      "iconColor": "#10b981"
                    },
                    {
                      "title": "Unlimited projects",
                      "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>",
                      "iconColor": "#10b981"
                    },
                    {
                      "title": "Advanced analytics",
                      "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>",
                      "iconColor": "#10b981"
                    },
                    {
                      "title": "24/7 phone support",
                      "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>",
                      "iconColor": "#10b981"
                    },
                    {
                      "title": "SSO integration",
                      "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>",
                      "iconColor": "#10b981"
                    },
                    {
                      "title": "50GB storage",
                      "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>",
                      "iconColor": "#10b981"
                    },
                    {
                      "title": "API access",
                      "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>",
                      "iconColor": "#10b981"
                    }
                  ]
                }
              }
              ItemSettings={PricingColumn}
              itemLabel="Row"
              design="sortable"
            />
          </PanelBody>
          {/* footer */}
          <PanelBody className="bPlPanelBody" title={__('Footer', 'section-collection')} initialOpen={false}>
            <InputControl
              label={__("Title :", "section-collection")}
              placeholder="Enter Your Title"
              value={footerData?.title?.replace(/<\/?[^>]+(>|$)/g, "")}
              onChange={(newtext) => { setAttributes({ footerData: { ...footerData, title: newtext } }) }}
            />
            <Spacer />
            <TextareaControl
              label={__("Decription :", "section-collection")}
              placeholder="Enter Your Decription"
              value={footerData?.des?.replace(/<\/?[^>]+(>|$)/g, "")}
              onChange={(newtext) => { setAttributes({ footerData: { ...footerData, des: newtext } }) }}
            />
            <Spacer />
            <InputControl
              label={__("Button Text :", "section-collection")}
              placeholder="Enter Your Button Name"
              value={footerData?.buttonName?.replace(/<\/?[^>]+(>|$)/g, "")}
              onChange={(newtext) => { setAttributes({ footerData: { ...footerData, buttonName: newtext } }) }}
            />
            <Spacer />
            <IconLibrary
              label={__("Icon :", "section-collection")}
              value={footerData?.icon}
              onChange={val => setAttributes({ footerData: updateData(footerData, val, 'icon') })}
            />
            <Spacer />
            <TextControl
              label={__("Button URL :", "section-collection")}
              value={footerData?.buttonLink || '#'}
              onChange={url => setAttributes({ footerData: updateData(footerData, url, 'buttonLink') })}
              placeholder="Enter URL"
            />
            <Spacer />
            <ToggleControl
              label={__("Open In New Tab ", "section-collection")}
              checked={footerData?.buttonNewTab || false}
              onChange={(value) => setAttributes({ footerData: updateData(footerData, value, 'buttonNewTab') })}
            />
            <Spacer />
          </PanelBody>
        </>
      )}
    </>



  )
}

export default General