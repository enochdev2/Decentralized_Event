import Link from 'next/link';
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from 'react-icons/ti';

const Footer = () => {
  const social = [
    {
      link: '#',
      name: 'Facebook',
      icon: <TiSocialFacebook />,
    },
    {
      link: '#',
      name: 'Twitter',
      icon: <TiSocialTwitter />,
    },
    {
      link: '#',
      name: 'Linkedin',
      icon: <TiSocialLinkedin />,
    },
    {
      link: '#',
      name: 'Instagram',
      icon: <TiSocialInstagram />,
    },
  ];

  return (
    <footer className="fopter py-10 text-center items-start bg-dark-2 border-t-[#ffba00] border-t ">
      <div className="containers">
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
            <div className="widget w-info">
              {/* <Link href="/" className="site-logo">
                <ing src={logoprimary} alt="" />
              </Link> */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit tempora quaerat maxime mollitia provident aperiam
                nostrum qui minus, porro libero accusamus hic est fugit ! Vel
                iusto quisquam perferendis amet ipsa?
              </p>
            </div>

            <div className=" widget w-contacts">
              <ul className=" socials social--white flex w-full justify-center space-x-5">
                {social.map((social, index) => (
                  <li key={index} className="social-item">
                    <Link href={social.link} className="woox-icon">
                      {social.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer mb-8">
        <div className="containers">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
              <span>@ All right reserved 2024</span>
              <span>
                <Link href="/" className="text-[#ffba00]">
                  Enoch Tech
                </Link>{' '}
                - Decentralized Real_Estate
              </span>

              <div className="logo-design">
                {/* <ing src="img/logo-fire.png" alt="" /> */}
                <div className="design-wrap">
                  <div className="sub-title"> Design By</div>
                  <Link
                    href="https://theblockchainc.com"
                    className="logo-title text-[#ffba00]"
                  >
                    @DeFi Prince
                  </Link>
                </div>
              </div>

              <div className="logo-desgin logo-design-crumina">
                {/* <ing src="img/crumina-logo.png" alt="" /> */}
                <div className="design-wrap">
                  <div className=""> Design By</div>
                  <Link href="https://theblockchainco.com" className="logo-title">
                    @The BlockChain
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
