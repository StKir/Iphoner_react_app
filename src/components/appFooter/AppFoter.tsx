import './appFooter.scss';
import logo_white from '../../assets/logo/logo_white.png';
import map from '../../assets/icons/bx_map-white.svg';
import phone from '../../assets/icons/ci_phone-outline_white.svg';
import time from '../../assets/icons/access-time_hitw.svg';

import React, { useState } from 'react';
import AppModal from '../appModal/AppModal';
import { Link } from 'react-router-dom';

const AppFooter: React.FC = () => {
	const [active, setActive] = useState<boolean>(false);
	return (
		<footer>
			<AppModal active={active} setActive={setActive} />
			<div className='container'>
				<Link to={`/`} className='footer_logo'>
					<img src={logo_white} alt='logo' />
					<h3>Айфонер</h3>
				</Link>
				<div className='footer_contacts'>
					<div className='footer-item'>
						<img src={map} alt='map' />
						<span className='head_info info-footer'>
							г.Нижний Новгород ул. Заярская 99
						</span>
					</div>
					<div className='footer-item'>
						<img src={phone} alt='phone' />
						<div className='phone_info info-footer'>
							<span className='phone_number'>+7(950)-603-XX-XX</span>
							<span
								className='phone_call-footer'
								onClick={() => {
									setActive(true);
								}}
							>
								Обратный звонок
							</span>
						</div>
					</div>
					<div className='footer-item'>
						<img src={time} alt='time' />
						<span className='time_info info-footer'>
							Пн-Пт 10:00 - 20:00 Сб-Вс 10:00 - 18:00
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default AppFooter;
