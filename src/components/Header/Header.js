import "./Header.css";
import {
	onlyMagpie,
	downArrow,
	pendleImg,
	carretDown,
	arbi,
	downWhiteArrow,
	moonLogo,
	magpieName,
	MagpieLogo,
	bear,
	wallet,
} from "../../assests";

const Header = () => {
	return (
		<>
			<header className="main-header">
				<div className="left-header">
					<div className="magpie-logo-div">
						<img src={MagpieLogo} alt="" />
					</div>

					<div className="pendle-main-container">
						<div className="pendle-sub-container">
							<div className="pendle-img-div">
								<img src={pendleImg} alt="" />
							</div>
							<p>Pendle</p>
							<div className="down-arrow-div">
								<img src={downArrow} alt="" />
							</div>
						</div>
					</div>

					<div className="header-menu">
						<div className="outer">
							<p className="inner-text">Stake</p>
						</div>

						<div className="outer">
							<p className="inner-text">Claim</p>
						</div>

						<div className="outer">
							<p className="inner-text">Lock</p>
						</div>

						<div className="outer">
							<p className="inner-text">More</p>
							<div className="carrent-down-div">
								<img src={carretDown} alt="" />
							</div>
						</div>
					</div>
				</div>

				<div className="right-header">
					<p className="language">EN</p>

					<div className="pendle-main-container">
						<div className="pendle-sub-container">
							<div className="pendle-img-div">
								<img src={arbi} alt="" />
							</div>
							<p>Arbitrum</p>
							<div className="down-arrow-div">
								<img src={downArrow} alt="" />
							</div>
						</div>
					</div>

					<div className="connect-wallet">
						<div className="wallet-address">0xFA42.......439de</div>
						<div className="connect-wallet-down-arrow">
							<img src={downWhiteArrow} alt="" />
						</div>
					</div>

					<div className="moon-div">
						<img src={moonLogo} alt="" />
					</div>
				</div>
			</header>

			<header className="main-left-header-mobile">
				<img src={magpieName} alt="" />
				<div className="main-right-header-mobile">
					<div className="logo-and-dollor-container">
						<img src={onlyMagpie} alt="" />
						<p>$0.0</p>
					</div>

					<div className="logo-and-dollor-container">
						<img src={bear} alt="" />
						<p>$0.0</p>
					</div>

					<div>
						<img src={wallet} alt="" />
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
