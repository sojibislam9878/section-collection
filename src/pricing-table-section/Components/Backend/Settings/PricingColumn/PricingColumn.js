import { __ } from "@wordpress/i18n";
import { TextControl, __experimentalSpacer as Spacer, TextareaControl, ToggleControl, __experimentalNumberControl as NumberControl, PanelBody, SelectControl, PanelRow } from '@wordpress/components';
import { updateData } from '../../../../../../../bpl-tools/utils/functions';
import { ColorControl, Device, IconLibrary, Label, } from "../../../../../../../bpl-tools/Components";

export const PricingColumn = ({ attributes, setAttributes, arrKey, index, device }) => {
    const { colorToggle, style, themeStyle, featuresColumn } = attributes;
    const MinimalPriceCardData = attributes[arrKey];
 

    const addFeature = (index) => {
        const updatedPlans = JSON.parse(JSON.stringify(MinimalPriceCardData));
        const newFeature =
            themeStyle?.theme === "style-1" ?
        {
            title: " New 5GB storage",
            icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"#53df55\" d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>", "iconColor": "#53df55" 
        }
        : {
            title: " New 100GB storage",
            icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>", "iconColor": "#10b981"
        };
        updatedPlans[index].features.push(newFeature);
        setAttributes({ [arrKey]: updatedPlans });
    };

    const duplicateFeature = (index, featureIndex) => {
        const updatedPlans = JSON.parse(JSON.stringify(MinimalPriceCardData));

        const featureToDuplicate = updatedPlans[index].features[featureIndex];
        const duplicatedFeature = { ...featureToDuplicate };
        updatedPlans[index].features.splice(featureIndex + 1, 0, duplicatedFeature);
        setAttributes({ [arrKey]: updatedPlans });
    };

    const removeFeature = (index, featureIndex) => {
        const updatedPlans = JSON.parse(JSON.stringify(MinimalPriceCardData));
        updatedPlans[index].features.splice(featureIndex, 1);
        setAttributes({ [arrKey]: updatedPlans });
    };



    return (
        <div>
            <Spacer />
            {themeStyle?.theme === "style-1" && (
                <>
                    <ToggleControl
                        label={__("Highlight Card", "section-collection")}
                        checked={MinimalPriceCardData[index]?.highlighted || false}
                        onChange={(value) => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, value, index, 'highlighted') })}
                    />
                    <Spacer />
                    {MinimalPriceCardData[index]?.highlighted && (
                        <TextControl
                            value={MinimalPriceCardData[index]?.highlightText.replace(/<[^>]*>/g, '')}
                            label={__("Highlight Text", "section-collection")}
                            placeholder="Enter Your Text"
                            onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'highlightText') })}
                        />
                    )}
                    <Spacer />
                    <ToggleControl
                        label={__("Button Highlight", "section-collection")}
                        checked={MinimalPriceCardData[index]?.id || false}
                        onChange={(value) => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, value, index, 'id') })}
                    />
                </>
            )}
            {themeStyle?.theme === "style-2" && (
                <>
                    <ToggleControl
                        label={__("Make Popular ", "section-collection")}
                        checked={MinimalPriceCardData[index]?.featured || false}
                        onChange={(value) => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, value, index, 'featured') })}
                    />
                </>
            )}
            <Spacer />

            <TextControl
                value={MinimalPriceCardData[index]?.name.replace(/<[^>]*>/g, '')}
                label={__("Name", "section-collection")}
                placeholder="Enter Card Name"
                onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'name') })}
            />
            <Spacer />
            {themeStyle?.theme === "style-1" ? (
                <>
                    <TextControl
                        value={MinimalPriceCardData[index]?.currency.replace(/<[^>]*>/g, '')}
                        label={__("Currency", "section-collection")}
                        placeholder="Enter Your Currency"
                        onChange={(val) =>
                            setAttributes({
                                MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'currency'),
                            })
                        }
                    />
                </>
            ) : themeStyle?.theme === "style-2" ? (
                <>
                        <IconLibrary
                            label={__("Currency Icon :", "section-collection")}
                            value={MinimalPriceCardData[index]?.currencyTwo}
                            onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'currencyTwo') })}
                        />                   
                </>
            ) : null}


            <Spacer />
            <NumberControl
                min={0}
                value={MinimalPriceCardData[index]?.price.replace(/<[^>]*>/g, '')}
                label={__("Price", "section-collection")}
                placeholder="Enter Your Price"
                onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'price') })}
            />
            <Spacer />
            <TextControl
                value={MinimalPriceCardData[index]?.period.replace(/<[^>]*>/g, '')}
                label={__("Period", "section-collection")}
                placeholder="Enter Your Period"
                onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'period') })}
            />
            <Spacer />
            <TextareaControl
                label={__("Description", "section-collection")}
                value={MinimalPriceCardData[index]?.description.replace(/<[^>]*>/g, '')}
                onChange={dec => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, dec, index, 'description') })}
                placeholder="Enter Your Description"
            />
            <Spacer />

            <TextControl
                value={MinimalPriceCardData[index]?.buttonText.replace(/<[^>]*>/g, '')}
                label={__("Button Name", "section-collection")}
                placeholder="Enter Your Button Name"
                onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'buttonText') })}
            />
            <Spacer />
            <TextControl
                label={__("Button URL", "section-collection")}
                value={MinimalPriceCardData[index]?.buttonLink || '#'}
                onChange={url => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, url, index, 'buttonLink') })}
                placeholder="Enter URL"
            />
            <Spacer />
            <ToggleControl
                label={__("Open In New Tab", "section-collection")}
                checked={MinimalPriceCardData[index]?.buttonNewTab || false}
                onChange={(value) => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, value, index, 'buttonNewTab') })}
            />
            <Spacer />
            {/* Feature */}
            <PanelBody className="bPlPanelBody" title={__("Features", "section-collection")} initialOpen={false}>
                {themeStyle?.theme === "style-2" && (
                    <>
                        <PanelRow>
                            <Label className="">{__(" Feature Column :", "section-collection")}</Label>
                            <Device />
                        </PanelRow>
                        <SelectControl
                            options={[
                                { label: __("Select Feature Column", "section-collection"), disabled: true },
                                { label: __("Two Column", "section-collection"), value: "2" },
                                { label: __("One Column", "section-collection"), value: "1" }
                            ]}
                            value={featuresColumn?.[device]}
                            onChange={(val) => {
                              setAttributes({  featuresColumn: updateData(featuresColumn, parseInt(val), device) });
                            }}
                        />
                    </>
                )}

                <Spacer />
                <ToggleControl
                    label={colorToggle ? __("Icon Global Color", "section-collection") : __("Icon Single Color", "section-collection")}
                    checked={colorToggle || false}
                    onChange={(value) => setAttributes({ colorToggle: value })}
                />
                {colorToggle && (
                    <ColorControl
                        label={__("Global Icon Color :", "section-collection")}
                        defaultColor={themeStyle?.theme === "style-1" ? "#53df55" : themeStyle?.theme === "style-2" ? "#10b981": null }
                        value={style?.iconGobalColor}
                        onChange={(color) =>
                            setAttributes({
                                style: updateData(style, color, 'iconGobalColor'),
                            })
                        }
                    />
                )}
                {MinimalPriceCardData[index]?.features?.map((feature, featureIndex) => {
                    const { title, icon, iconColor } = feature;
                    return (
                        <div key={featureIndex} className=''>
                            <Spacer />
                            <IconLibrary
                                label={__("Icon", "section-collection")}
                                value={icon}
                                onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, "features", featureIndex, 'icon') })}
                            />
                            <Spacer />
                            {colorToggle === false
                                ? (
                                    <ColorControl
                                        label={__("Icon Color :", "section-collection")}
                                        defaultColor={themeStyle?.theme === "style-1" ? "#53df55" : themeStyle?.theme === "style-2" ? "#10b981" : null}
                                        value={iconColor}
                                        onChange={(color) => { setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, color, index, 'features', featureIndex, 'iconColor') }); }}
                                    />
                                ) : null
                            }
                            <Spacer />

                            <TextControl value={title} placeholder="Enter Feature"
                                onChange={vl => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, vl, index, 'features', featureIndex, "title") })}
                            />
                            <Spacer />
                            <div className="featuresButton">
                                {/* Features Duplicate Button */}
                                <button className="duplicate" onClick={() => duplicateFeature(index, featureIndex)}>Duplicate
                                </button>
                                {/* Features Remove Button */}
                                <button className="remove" onClick={() => removeFeature(index, featureIndex)}>Delete
                                </button>
                            </div>
                        </div>
                    )
                })}
                <Spacer />
                {/* New Features Added */}
                <div className="button-wrapper">
                    <button className="addButton" onClick={() => addFeature(index)}>
                        + Add Feature
                    </button>
                </div>

            </PanelBody>
            <Spacer />
        </div>
    )
}
