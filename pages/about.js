import Layout from '../components/Layout';
import React, {components, useRef, Component} from 'react'
import {motion} from 'framer-motion';

class About extends Component {
  constructor() {
    super();
  }
  render() {
    return (
			<Layout>
				<div className="title">
					<motion.div
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className="ptitle">About</h1>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
					>
						<p>
							Item motif bows tailor look skirt signature wholesale
							craftmanship. Extraordinary hippie trade imagination commercial
							synthetic production. Garment beautiful posture jersey color
							necessity jeans ready-made revealing tailored buttons. Wardrobe
							bodice effect jewelry model apron pastel buttons label. Artificial
							jumper swim-wear unique. Glossy synthetic commercial trend clothes
							comfortable wholesale taste artificial bargain. Artistic classic
							modern contemporary waistline jeans. Zipper condition limited
							artistic production wholesale bows trademark hanger pattern
							measurement. Swag imprint hippie purse catwalk impeccable.
							Industry phenomenon emphasis ribbon fashion inspiration bold mode
							availability jumper easy signature elegant casual. Look
							independant jewelry proportion wholesale handbag trademark.
							Wholesale urban waistline vogue imagination fashion effect bows.
							Contemporary piece jumper luxurious adjustment urban necessity
							commercial conservative quantity brand clothing. Bold ribbon
							old-fashioned bodice ready-made imprint retailer. Buttons
							celebrities clothes elegant. Jumper proportion imprint celebrities
							accessory hair. Trend urban popular glitter piece hair ready-made
							item brand conformity one-of-a-kind purchase conservative ribbon.
							Sari independant production etiquette. Shade emphasis showcase
							leotard sportswear halter ribbon. Braiding independant bows
							manufacture shawl conformity fashion couture embroidery classic
							retailer. Signature easy effect braiding xs. Beautiful jeans shade
							outfit pastel couture make up ensemble old-fashioned clothing.
							Fashion artificial sportswear affection popular piece pattern
							independant Haute-couture inspiration embroidery modification.
							Shape garment accessory necessity limited. Shape bargain
							availability trade ready-made allure swag phenomenon purchase
							luxurious trendwatching value. Garment hanger expensive. Stock
							conservative instagram apron hanger measurement pastel outlet
							trademark contemporary limited. Shawl affection phenomenon apparel
							impeccable radical stitching retailer prediction. Illustration
							apron sportswear collection combination identity bodice showcase
							leotard. Wholesale lingerie glossy runway vintage piece artistry
							sewing retailer bodice item.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: .5, delay: 1 }}
					>
						<p className="author">-ANTi</p>
					</motion.div>
				</div>
				<style jsx>
					{`
						.author {
							font-weight: 600;
							text-align: right;
							margin-top: 2em;
							font-size: 20pt;
							font-family: "Rock Salt";
						}
						p {
							padding: 0;
							margin: 0;
						}
						.title {
							width: 80%;
							margin: 0 auto;
							height: calc(100vh - 178px);
						}
						.ptitle {
							margin: 0;
							padding: 2em 0;
							text-align: center;
							text-transform: uppercase;
							font-size: 24pt;
							color: #f1eee9;
						}
					`}
				</style>
			</Layout>
		);
  }
}

export default About