import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Rnd } from "react-rnd";
import { components } from "ComponentRenderer.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import {
	Container,
	Content2Xl,	
} from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";

import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";
import { ReactComponent as HandleIcon } from "images/handle-icon.svg";

import heroScreenshotImageSrc from "images/demo/MainLandingPageHero.png";
import useInView from "helpers/useInView";
import Header from "components/headers/light"
import MiniCenteredFooter from "components/footers/MiniCenteredFooter";

/* Hero */
const Row = tw.div`flex`;
const HeroRow = tw(
	Row
)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;

const Column = tw.div`flex-1`;

const UpdateNotice = tw(
	Column
)`w-full flex-auto mb-4 sm:mb-8 rounded px-4 py-3 sm:px-5 sm:py-4 bg-orange-100 text-orange-800 flex items-center sm:items-start md:items-center justify-center lg:justify-start border border-orange-200 text-xs sm:text-sm text-center sm:text-left md:leading-none`;
const UpdateNoticeIcon = tw(RadioIcon)`w-0 sm:w-5 sm:mr-3`;

const TextColumn = tw(
	Column
)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(
	HeadingBase
)`text-center lg:text-left text-primary-900 leading-snug`;
const Description = tw(
	DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start`;
const ActionButton = tw(
	AnchorLink
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton = tw(ActionButton)``;
const SecondaryButton = tw(
	ActionButton
)`mt-6 sm:mt-12 sm:ml-8 bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900`;
const FeatureList = tw.ul`mt-6 leading-loose flex flex-wrap max-w-xl mx-auto lg:mx-0`;
const Feature = tw.li`mt-2 flex items-center flex-shrink-0 w-full sm:w-1/2 justify-center lg:justify-start`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded`;

const ComponentsContainer = tw.div`mt-24`;
const ComponentsType = tw.h3`text-4xl font-black text-primary-500 border-b-4 border-primary-500 inline-block`;
const Components = tw.div``;
const Component = tw.div`mt-12 border rounded-lg bg-white`;
const ComponentContent = tw.div`flex justify-between overflow-hidden rounded-b-lg bg-gray-600 relative`;
const ResizableBox = styled(Rnd)`
	${tw`relative! bg-white pr-4`}
	.resizeHandleWrapper > div {
		${tw`w-4! right-0!`}
	}
`;
const ResizeHandleButton = tw.button`cursor-col-resize focus:outline-none w-4 border-l bg-gray-100 absolute right-0 inset-y-0`;

export default ({
	features = null,
	primaryButtonUrl = "#landingPageDemos",
	primaryButtonText = "Explore Demos",
	secondaryButtonUrl = "#componentDemos",
	secondaryButtonText = "View Components",
	buttonRoundedCss = "",	
	innerPages = components.innerPages,
	blocks = components.blocks,
	heading = "Free Modern React Templates for every need.",
	description = "Easily customizable modern React UI Templates and Components built using TailwindCSS which are also lightweight and simple to setup. All components are modular and fully responsive for great mobile experience as well as big desktop screens.  Brand Colors are also fully customizable. Free for personal as well as commercial use.",
}) => {
	/*
	 * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
	 * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
	 */
	useEffect(() => {
		window.gtag("js", new Date());
		window.gtag("config", "UA-45799926-9");
	}, []);

	const noOfInnerPages = Object.keys(innerPages).length;
	const noOfComponentBlocks = Object.values(blocks).reduce(
		(acc, block) => acc + Object.keys(block.elements).length,
		0
	);

	features = features || [		
		`${noOfInnerPages} Inner Pages`,
		`${noOfComponentBlocks} Components`,
		"Uses TailwindCSS",
		"Fully Responsive",
		"Fully Customizable",
	];

	return (
		<AnimationRevealPage disabled>
			<Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
				<Content2Xl>
					<Header />					
					<HeroRow>
						<UpdateNotice>
							<UpdateNoticeIcon />
							Last updated on 10th September, 2022 - Added support for React v18
							and TailwindCSS v3!
						</UpdateNotice>
						<TextColumn>
							<Heading as="h1">{heading}</Heading>
							<Description>{description}</Description>
							<FeatureList>
								{features.map((feature, index) => (
									<Feature key={index}>
										<FeatureIcon />
										<FeatureText>{feature}</FeatureText>
									</Feature>
								))}
							</FeatureList>
							<Actions>
								<PrimaryButton href={primaryButtonUrl} css={buttonRoundedCss}>
									{primaryButtonText}
								</PrimaryButton>
								<SecondaryButton href={secondaryButtonUrl}>
									{secondaryButtonText}
								</SecondaryButton>
							</Actions>
						</TextColumn>
						<ImageColumn>
							<ImageContainer>
								<Image src={heroScreenshotImageSrc} />
							</ImageContainer>
						</ImageColumn>
					</HeroRow>
					<div id="componentDemos">						
						<BlocksRenderer blocks={Object.values(blocks)} />
					</div>
				</Content2Xl>
			</Container>
      <MiniCenteredFooter />
		</AnimationRevealPage>
	);
};

const BlocksRenderer = ({ blocks }) => {
	const [lastVisibleBlockIndex, setLastVisibleBlockIndex] = useState(0);

	const updateLastVisibleBlockIndex = (index) => {
		console.log("LAST WAS ", lastVisibleBlockIndex);
		if (index > lastVisibleBlockIndex) setLastVisibleBlockIndex(index);
	};

	return (
		<ComponentsContainer>
			{blocks.map(
				(block, index) =>
					lastVisibleBlockIndex + 1 >= index && (
						<Block
							key={index}
							components={block}
							notifyIsVisible={() => updateLastVisibleBlockIndex(index)}
						/>
					)
			)}
		</ComponentsContainer>
	);
};

const Block = ({ notifyIsVisible, components }) => {
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) notifyIsVisible();
	}, [inView, notifyIsVisible]);

	const ResizeHandle = (
		<ResizeHandleButton>
			<HandleIcon tw="w-4 h-4 text-gray-600" />
		</ResizeHandleButton>
	);

	const componentBlockRefs = {};

	const updateComponentBlockIframeHeight = (iframe) => {
		iframe.style.height = "auto";
		iframe.style.height =
			iframe.contentWindow.document.body.scrollHeight + "px";
	};

	return (
		<div ref={ref}>
			<ComponentsType>{components.type}</ComponentsType>
			<Components>
				{Object.values(components.elements).map((component, componentIndex) => (
					<Component key={componentIndex}>					
						<ComponentContent>
							<ResizableBox
								minWidth={310}
								default={{
									width: "100%",
									height: "100%",
								}}
								bounds="parent"
								disableDragging={true}								
								resizeHandleComponent={{ right: ResizeHandle }}
								resizeHandleWrapperClass={`resizeHandleWrapper`}
								onResize={() =>
									updateComponentBlockIframeHeight(
										componentBlockRefs[component.url]
									)
								}
							>
								<iframe
									src={component.url}
									title="Hero"
									width="100%"
									ref={(ref) => (componentBlockRefs[component.url] = ref)}
									onLoad={(e) => updateComponentBlockIframeHeight(e.target)}
								/>
							</ResizableBox>
						</ComponentContent>
					</Component>
				))}        
			</Components>
		</div>
	);
};
