import React, { useRef, useState, useEffect } from 'react';

import Buy from "../../components/nami/buy"


function Sale() {
	const [copySuccess, setCopySuccess] = useState('Copy address');
	const [leftToSell, setLeftToSell] = useState();
	const textAreaRef = useRef(null);

	useEffect(() => {
		async function setNftStock(){
			var res = await fetch("https://getaanarchynftstock.azurewebsites.net/api/GetNftLeftFunction")
			var leftStock = parseInt(await res.json())
			if(!isNaN(leftStock))
			{
				if(leftStock < 1) leftStock = 0

				setLeftToSell(leftStock)
			}
		}
		setNftStock()
	}, []);

	function copyToClipboard(e) {
		textAreaRef.current.select();
		document.execCommand('copy');
		e.target.focus();
		if (copySuccess !== 'Copied!') {
			setCopySuccess('Copied!');
		} else {
			setCopySuccess('Copy address')
		}
	};

	return (
		<div className="container">
			<div className="row d-flex justify-content-center">
				<div style={{ minHeight: "45vh" }} className="col-lg-8 d-flex flex-column align-items-center text-center">
					<img src="/images/sale-qr.png" alt="Cardano ADA payment address" style={{ marginTop: "10vh", marginBottom: "3vh" }} />
					{/* <div style={{ marginTop: "10vh", marginBottom: "3vh", width: "300px", height: "300px", background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)" }} />  */}
					<h5 style={{ width: "100%" }}>Address:</h5>
					<div>
						<form>
							<textarea
								ref={textAreaRef}
								style={{ height: "2rem", width: "100%" }}
								readOnly
								value='addr1vxmnswltkk0gnm3h7f6nupmdn2t34dfrz60ftswrt3rw4aq632z82'
							/>
						</form>
						{
							document.queryCommandSupported('copy') &&
							<div>
								<button style={{ marginBottom: "3vh", marginTop: "1vh", width: "100%" }} className="btn btn-light" onClick={copyToClipboard}>{copySuccess}</button>
							</div>
						}

					</div>
					<h5>Price:</h5>
					<p style={{ width: "100%" }} className="strong">35₳</p>
					<Buy />
					<br/>
					<h6>Do not send funds form an exchange! Use Cardano native tokens supporting wallet.</h6>
					<br/>
					<br/>
					<h7>SYNCING NEW NODE AFTER ALONSO, MIGHT TAKE COUPLE HOURS!</h7>
					<h7>To see your new NFT, check your address on <a href="https://pool.pm">pool.pm</a>.</h7>
					<h7>With any problems, send us message on Twitter or an email!</h7>
				</div>
			</div>
			<div style={{ minHeight: "25vh" }} className="row d-flex align-items-center justify-content-center">
				<h2>{leftToSell} of 600 left</h2>
			</div>
		</div>
	)
}

export default Sale;
