import { ConfigProvider } from 'antd';
import React from 'react';

const AntdConfigProvider: React.FC<React.PropsWithChildren> = ({
	children
}) => {
	return (
		<ConfigProvider
			theme={{
				components: {
					Carousel: {
						colorBgContainer: '#000',
						dotActiveWidth: 40,
						dotOffset: -20
					},
					Button: {
						colorPrimary: 'rgb(251 146 60)',
						colorPrimaryHover: 'rgb(253 186 116)',
						colorPrimaryActive: 'rgb(254 215 170)',
						fontSize: 16,
						colorTextDisabled: 'rgb(253 186 116)',
						borderColorDisabled: 'rgb(253 186 116)',
						colorBgContainerDisabled: 'transparent',
						borderRadius: 5
					},
					Tabs: {
						fontSize: 24,
						itemColor: '#A4ACAD',
						inkBarColor: '#000',
						itemSelectedColor: '#000',
						itemHoverColor: '#000'
					},
					Select: {
						colorBgContainer: '#fff',
						colorBorder: 'transparent',
						colorPrimaryHover: 'transparent',
						colorPrimary: 'transparent',
						controlOutline: 'transparent',
						optionFontSize: 18,
						borderRadiusLG: 16,
						paddingContentVertical: 40,
						optionSelectedBg: 'transparent',
						optionSelectedColor: 'rgb(251 146 60)',
						optionActiveBg: 'transparent',
						zIndexPopup: 9
					},
					Checkbox: {
						colorPrimary: 'rgb(251 146 60)',
						colorPrimaryHover: 'rgb(253 186 116)'
					},
					Typography: {
						colorLink: 'rgb(251 146 60)',
						colorLinkHover: 'rgb(253 186 116)',
						colorLinkActive: 'rgb(254 215 170)'
					},
					Input: {
						fontSize: 18,
						colorBorder: '#fff',
						colorPrimary: '#fff',
						controlOutline: 'transparent'
					},
					Radio: {
						fontSize: 18,
						colorPrimary: 'rgb(251 146 60)',
						buttonSolidCheckedHoverBg: 'rgb(251 146 60)',
						colorBorder: '#fff',
						controlOutline: 'transparent'
					}
				}
			}}
		>
			{children}
		</ConfigProvider>
	);
};

export default AntdConfigProvider;
