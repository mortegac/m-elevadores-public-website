import PropTypes from 'prop-types'
import Link from "next/link";
import { hrefResolver } from '../../../../../prismicio';
import { FooterListContainer } from './FooterListStyles';

// eslint-disable-next-line no-unused-vars
const FooterList = ({ title = "", items = [], socialLinks }) => {
	const { data: { linkgroup } } = items
	return (
		<FooterListContainer>
			<p style={{fontSize:"18px", textColor:"#FFFFFF", marginTop:62}}>
				<i style={{marginRight:12}}><svg width="15" height="18" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.15119 0C3.15573 0 0.71875 2.43698 0.71875 5.43241C0.71875 9.14984 5.58025 14.6072 5.78723 14.8377C5.98165 15.0543 6.32108 15.0539 6.51514 14.8377C6.72213 14.6072 11.5836 9.14984 11.5836 5.43241C11.5836 2.43698 9.14662 0 6.15119 0ZM6.15119 8.16561C4.6441 8.16561 3.41802 6.9395 3.41802 5.43241C3.41802 3.92532 4.64413 2.69924 6.15119 2.69924C7.65825 2.69924 8.88433 3.92535 8.88433 5.43244C8.88433 6.93953 7.65825 8.16561 6.15119 8.16561Z" fill="white"/>
</svg>

</i>
<a href='https://www.google.com/maps/place/Marchant+Pereira+150,+OF+1002,+7500523+Providencia,+Regi%C3%B3n+Metropolitana/@-33.4261949,-70.6156841,1070m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9662cf6455d7e1d9:0x5b0b63f4a2047ce4!8m2!3d-33.4261994!4d-70.6131038!16s%2Fg%2F11qqn92s6c?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'>
<span style={{color:"#FFFFFF"}}>Marchant Pereira 150 of 1002</span>
</a>
</p>
<p style={{fontSize:"18px", textColor:"#FFFFFF", marginTop:22}}>
	<span style={{color:"#FFFFFF"}}>contacto@melevadores.cl</span>
</p>
			<h3>{title}</h3>
			
			<ul>
				{linkgroup.map((item, id) => (
					<li key={id}>
						{item?.link?.slug &&
							<Link href={hrefResolver(item.link)} scroll={false} passHref>
								{item.label}
							</Link>
						}
					</li>
				))
				}
			</ul>
		</FooterListContainer>
	)
}


FooterList.propTypes = {
	title: PropTypes.string,
	items: PropTypes.array
};

FooterList.defaultProps = {
	title: "Company",
	items: [
		{ name: "item-1", url: "/url-1" },
		{ name: "item-2", url: "/url-2" },
		{ name: "item-3", url: "/url-3" },
		{ name: "item-4", url: "/url-4" }
	]
};

export default FooterList