import "./Content.css";
import { arrow, tokenLogo, zap, arrow2 } from "../../assests";

const Content = () => {
	return (
		<section className="main-content-section">
			<div className="refer-texts-container">
				{/* 1st box */}
				<div className="inner-content-section">
					<div className="first">
						<p>Refer Friends.</p>
						<p>
							Earn <span className="mgp"> $MGP</span> Together.
						</p>
					</div>
					<p className="about-earn">
						Earn up to 15% of the $MGP that your friends earn on Magpie.
					</p>

					<div className="rule">
						<p>View referral rules</p>
						<div className="arrow-img">
							<img src={arrow} alt="" />
						</div>
					</div>

					<div className="group-container">
						<div className="referral-info">
							<p className="numbers">0</p>
							<p className="friend">Friends</p>
						</div>

						<div className="mgp-info">
							<img src={tokenLogo} alt="" />
							<div className="inner-mgp">
								<p className="mgp-number">0 MGP</p>
								<p className="reward">Your Rewards</p>
							</div>
							<button className="btn-claim">Claim</button>
						</div>
					</div>
				</div>

				{/* 2nd box */}
				<div className="main-referral-data-container">
					{/* tier boost upgrade */}
					<div className="to-boost-container">
						<div className="group-of-2-boost">
							<button className="tier">Tier 1</button>
							<button className="boost-container">
								<img src={zap} alt="" />
								<span className="boost-5">Boost 5%</span>
							</button>
						</div>
						<div className="upgrade-text-parent">
							<p className="upgrade-text">Upgrade to higher tier</p>
							<div className="arrow-img-2">
								<img src={arrow2} alt="" />
							</div>
						</div>
					</div>

					{/* recieve & freinds */}
					<div className="recieve-and-friends-container">
						<div className="referral-info">
							<p className="numbers">5%</p>
							<p className="friend">Your Receive</p>
						</div>
						<div className="referral-info">
							<p className="numbers">0%</p>
							<p className="friend">Friends Receive</p>
						</div>
					</div>

					{/* referallink */}
					<div className="referral-link-main-container">
						<div className="sub-container">
							<p className="referral-link-text-p1">Referral Link</p>
							<p className="referral-link-text-p2">
								http://accounts...dhuywuyd
							</p>
						</div>
						<p className="alrady-got-link-p">You already got code.</p>

						<div className="referal-code-container">
							<div className="blank-box"></div>
							<div className="referal-button-div-container">
								<p>Use Referral code</p>
							</div>
						</div>
						<p className="alrady-got-link-p">
							User friend's code and share bonus
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Content;
