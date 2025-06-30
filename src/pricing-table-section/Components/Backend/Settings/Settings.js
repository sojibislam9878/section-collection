// import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../../bpl-tools/utils/functions';
import { generalStyleTabs, themePreview } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';
import { themeSwitch } from '../../../utils/functions';
import BplBlockPreview from './Panel/BplBlockPreview';


const Settings = ({ attributes, setAttributes, device }) => {
	const{themeStyle}=attributes;
	return <>
		<InspectorControls>
			<div className='bBlocksInspectorInfo'>
				Need more block like this? Checkout the bundle ➡ <a href='https://wordpress.org/plugins/b-blocks' target='_blank' rel='noopener noreferrer'>B Blocks</a>
			</div>

			<TabPanel className='bPlTabPanel wp-block-bpptst-pricing-table-section' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}
			>
				{
					tab => <>
						{'general' === tab.name && <General attributes={attributes} setAttributes={setAttributes} device={device} />}

						{'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} device={device}/>}
					</>
				}
			</TabPanel>

		</InspectorControls>

		<BlockControls>
			{/* BplBlockPreview  */}
			<BplBlockPreview
				options={themePreview}
				value={themeStyle?.theme}
				onChange={(val) => setAttributes(themeSwitch(val, attributes))}
			/>
		</BlockControls>
	</>;
};
export default Settings;