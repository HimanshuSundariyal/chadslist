import React from 'react';

import Section from '../../components/sections/Section';
import Title from '../../components/sections/Title';
import SubTitle from '../../components/sections/SubTitle';
import ProgressBar from '../../components/forms/ProgressBar';
import Button from '../../components/forms/Button';
import Select from '../../components/forms/Select';
import { EarIcon, BallIcon, BrowIcon, HandRightIcon, HandLeftIcon, NoseIcon } from '../../components/icons';

import demoImage1 from '../../assets/images/demo/image_1.png';
import demoImage2 from '../../assets/images/demo/image_2.png';
import demoImage3 from '../../assets/images/demo/image_3.png';
import demoImage5 from '../../assets/images/demo/image_5.png';
import demoImage6 from '../../assets/images/demo/image_6.png';
import demoImage7 from '../../assets/images/demo/image_7.png';
import demoImage8 from '../../assets/images/demo/image_8.png';
import demoImage9 from '../../assets/images/demo/image_9.png';
import demoImage10 from '../../assets/images/demo/image_10.png';
import demoImage11 from '../../assets/images/demo/image_11.png';
import faqImage from '../../assets/images/faq.png'

const Homepage = () => {
  return (
    <>
      <Section>
        <Title>What do we look like?</Title>
        <SubTitle>(fucking handsome, obviously)</SubTitle>
        <div className="row my-5">
          <div className="col-md-4 mb-5">
            <img src={demoImage1} width="100%" alt="Demo1" />
          </div>
          <div className="col-md-4 mb-5">
            <img src={demoImage2} width="100%" alt="Demo2" />
          </div>
          <div className="col-md-4 mb-5">
            <img src={demoImage5} width="100%" alt="Demo5" />
          </div>
        </div>
        <div>
          <ProgressBar percent={'80%'}>
            0 / 10,000 MINTED
          </ProgressBar>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-center mt-5">
          <Select className="mx-2" label={'# Of Chads'} />
          <Button className="mx-2" size="large" arrow="right">MINT CHADS</Button>
        </div>
      </Section>
      <Section>
        <Title>About the Chads</Title>
        <SubTitle>who is asking?!</SubTitle>
        <p className="text-center">
          Chads are a set of 10,000 algorithmically generated non fungible degenerates from a set of 80+ handdraw traits
          <br />
          Chads are a set of 10,000 algorithmically generated non fungible degenerates from a set of 80+ handdraw traits
          <br />
          Chads are a set of 10,000 algorithmically generated non fungible degenerates from a set of 80+ handdraw traits
          <br />
        </p>
        <div className="my-5 text-center">
          <img src={demoImage3} width="600" alt="Demo3" />
        </div>
        <Title>Honorary Degenerates</Title>
        <SubTitle>i mean don’t you agree?</SubTitle>
        <div className="row">
          <div className="col-md-4">
            <img src={demoImage6} width="100%" alt="Demo6" />
            <p className="my-3 text-center">Emin</p>
          </div>
          <div className="col-md-4">
            <img src={demoImage7} width="100%" alt="Demo7" />
            <p className="my-3 text-center">CryptoCobie</p>
          </div>
          <div className="col-md-4">
            <img src={demoImage8} width="100%" alt="Demo8" />
            <p className="my-3 text-center">Ledger</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <img src={demoImage9} width="100%" alt="Demo9" />
            <p className="my-3 text-center">Trader Joe</p>
          </div>
          <div className="col-md-4">
            <img src={demoImage10} width="100%" alt="Demo10" />
            <p className="my-3 text-center">Sizechad</p>
          </div>
          <div className="col-md-4">
            <img src={demoImage11} width="100%" alt="Demo11" />
            <p className="my-3 text-center">Jay</p>
          </div>
        </div>
      </Section>

      <Section>
        <Title>Tockenomics</Title>
        <SubTitle>who do you know here?</SubTitle>
        <p>
          We don’t give a F**k about nothin’......Except CHICKS and MONEY!!!!
          <br />
          Ever wanted to spray champagne on some hot chicks tits on a yacht, well you’re one step closer with our REWARDS Program:
          4% of every AVAX Chad that is sold in our marketplace will be redistributed between all AVAX Chad studs.  
          <br />
          That means:
          <br />
          MORE money for gas on the Yacht! 
          <br />
          MORE money for your girlfriends boobjob!
          <br />
          MORE money for child support!
          <br />
          and
          <br />
          MORE money for bangin hot chicks
        </p>
      </Section>

      <Section>
        <Title>Rarity Ranking</Title>
        <SubTitle>are those real calf implants?</SubTitle>
        <div className="row">
          <div className="col-md-10 col-lg-4">
            <img src={demoImage5} width="100%" alt="Demo5" />
          </div>
          <div className="col-md-10 col-lg-8">
            <p className="pt-5 pl-3 pl-lg-5">
              Are you GMI?
              <br />
              All the AVAX Chads are baddass MFs, but they can’t all be the Sigma Alpha. Not all Chads have swag, some say it’s not fair, we say they just arent as RARE. 
              <br />
              All traits are generated on chain to create your special AVAXChad. Rarities will be provided on our marketplace based on Metadata on-Chain
            </p>
            <div className="d-flex align-items-center flex-wrap pl-md-5 mt-5">
              <HandRightIcon className="m-3" size={30} />
              <HandLeftIcon className="m-3" size={30} />
              <BallIcon className="m-3" size={30} />
              <BrowIcon className="m-3" size={30} />
              <NoseIcon className="m-3" size={30} />
              <EarIcon className="m-3" size={30} />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <Title>Roadmap</Title>
        <SubTitle>what’s the plan for the night?</SubTitle>
        <p className="mt-5">
          A portion of our AVAX Chads will be airdropped and distributed to early adopters and supporters. 
          <br />
          <br />
          <br />
          AVAX Chad giveaway time!! Prizes will include AVAXChads and AVAX tokens. and FOOK DA MAYWEADERS!!!!!!!!!
          <br />
          <br />
          <br />
          Yacht party in Mykonos bcuz we made money
          <br />
          <br />
          <br />
          Time to Party! Marketplace will be live, so you can continue to trade your AVAXChads should you choose to part from your badass Chad. Do you even CHAD?
        </p>
      </Section>

      <Section>
        <Title>FAQ</Title>
        <div className="d-flex align-items-center faq-wrapper">
          <img src={faqImage} className="mr-5" width="80px" alt="FAQ" />
          <p className="font-weight-bold ml-5">
            WHAT DOES MY AVAXCHAD DO?
            <br />
            It’s a Chad bro, you take him to every single party you go to and get hammered together. You have full commerical rights so throw that guy on a hoddie and lets go!!
            <br />
            HOW MUCH DO THEY COST?
            <br />
            Mint Price will be released in the coming days prior to the launch
            <br />
            <br />
            <br />
            WHAT DOES MY AVAXCHAD DO?
            <br />
            It’s a Chad bro, you take him to every single party you go to and get hammered together. You have full commerical rights so throw that guy on a hoddie and lets go!!
            <br />
            HOW MUCH DO THEY COST?
            <br />
            Mint Price will be released in the coming days prior to the launch
            <br />
          </p>
        </div>
      </Section>
    </>
  );
};
export default Homepage;
