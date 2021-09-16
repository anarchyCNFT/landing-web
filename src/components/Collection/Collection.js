import React, { useState } from "react"

const nfts = [
	{
		name: "anarchy1CNFT",
		text: "Chaotic mess on the verge of collapse. Just like our society.",
		pictureUrl: "/images/anarchy1.jpg",
		galleryUrl: "https://arweave.net/PLA0CH7faoAXMdWexO6wweiUqe5cutHc4O2ztOMItIc"

	},
	{
		name: "anarchy2CNFT",
		text: "Birds, reptiles, nature. You can find anything in it. Definitely better then watching TV.",
		pictureUrl: "/images/anarchy2.jpg",
		galleryUrl: "https://arweave.net/3-2uKW9vp7xv5O7qtZhzo33_ZMPQwVTp2s_Z1cjTIg0"
	},
	{
		name: "anarchy3CNFT",
		text: "Blood in the wind. Animals can relate, some people too.",
		pictureUrl: "/images/anarchy3.jpg",
		galleryUrl: "https://arweave.net/tX_8wN11I2K5q_TDpeRcMgeYU0B_dloCQ7IWGnd1-eA"
	},
	{
		name: "anarchy4CNFT",
		text: "Empty inside. But shining.",
		pictureUrl: "/images/anarchy4.jpg",
		galleryUrl: "https://arweave.net/raQ4eawe0SgHa_rO2vHiKamfO6FvCx2DhuL5c6RI4UA"
	},
	{
		name: "anarchy5CNFT",
		text: "Everybody is just fighting for their piece.",
		pictureUrl: "/images/anarchy5.jpg",
		galleryUrl: "https://arweave.net/y3DW5k9cUN33uzb2wu6dd-7PYCBQleoXv9mYXJnMQJ8"
	},
	{
		name: "anarchy6CNFT",
		text: "Eyes looking out while all the horrible things are happening inside their inner circle.",
		pictureUrl: "/images/anarchy6.jpg",
		galleryUrl: "https://arweave.net/-ceOnfJZyUHbfkf4JGl9Xf4_hYg4v9MJQkyGG4rRVt8"
	},
	{
		name: "anarchy7CNFT",
		text: "Nature is taking revenge with flames.",
		pictureUrl: "/images/anarchy7.jpg",
		galleryUrl: "https://arweave.net/aeB-6650uPyBbARmFS908-PssHp8e5pMjyxNVCm072k"
	},
	{
		name: "anarchy8CNFT",
		text: "Thorny road through life. Whose fault is it?",
		pictureUrl: "/images/anarchy8.jpg",
		galleryUrl: "https://arweave.net/P32Da7TJJvn-toEiNRHYgk8S-d9Wzf7HtISw-iIpl5E"
	},
	{
		name: "anarchy9CNFT",
		text: "A Farewell to Arms",
		pictureUrl: "/images/anarchy9.jpg",
		galleryUrl: "https://arweave.net/KCCTcWeNBSSGfmjaZNzFOos8sXJ8zSYEcTw1a8LNb34"
	},
	{
		name: "anarchy10CNFT",
		text: "So deep into comfort that it's uncomfortable.",
		pictureUrl: "/images/anarchy10.jpg",
		galleryUrl: "https://arweave.net/5Qp1aKG04gdXhxMLLmzsh9ixrcuhrCHCayGL-LLHa9U"
	},
	{
		name: "anarchy11CNFT",
		text: "Nature's elements destroying man's pride like nothing.",
		pictureUrl: "/images/anarchy11.jpg",
		galleryUrl: "https://arweave.net/YOLwG9DFF8ibhPLutF4_Wzte77tBs9-YYfN-QgmgPyA"
	},
	{
		name: "anarchy12CNFT",
		text: "Surrounded by all the colors you can't recognize one.",
		pictureUrl: "/images/anarchy12.jpg",
		galleryUrl: "https://arweave.net/LBMwv7L5Zxbo4l1vwG706MZVKq7u9NUn7NNymKwQN8I"
	},
	{
		name: "anarchy13CNFT",
		text: "Hidden sadness and cry - it shouldn't be normal.",
		pictureUrl: "/images/anarchy13.jpg",
		galleryUrl: "https://arweave.net/p4AmkX8nunKa1LGms4faTFiqmmnSGAERtFC8p9IwZAg"
	},
	{
		name: "anarchy14CNFT",
		text: "The Art of Destruction - power of the society to destroy itself is developed collectivelly every day.",
		pictureUrl: "/images/anarchy14.jpg",
		galleryUrl: "https://arweave.net/zy_6CeIR-Eqrh95MUMAvszzF08GcjaWxhvTmyNggCjY"
	},
	{
		name: "anarchy15CNFT",
		text: "Ocean life hidden under blanket from mess.",
		pictureUrl: "/images/anarchy15.jpg",
		galleryUrl: "https://arweave.net/_X6tiHOWRNHjgAcWqovO_c51CDKbVnohERebEtuW-d4"
	}
]


function Collection() {
	const [nft, changeNftSelection] = useState(nfts[0])

	const selectNft = (e) => {
		const selectedValue = e.target.value
		changeNftSelection(nfts[selectedValue])
	}

	return (
		<div className="container">
			<div className="row" style={{ marginTop: "5vh" }}>
				<div className="col-lg-12">
					<select style={{ marginBottom: "2vh", minHeight: "4vh", minWidth: "15vh" }} onChange={(val) => selectNft(val)} className="form-select" aria-label="Select NFT">
						{nfts.map((nft, i) => <option value={i} key={i}>{nft.name}</option>)}
					</select>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-6 text-center">
					<img style={{ width: "100%" }} alt={nft.name} src={nft.pictureUrl}></img>
				</div>
				<div className="col-lg-1"></div>
				<div style={{ marginBottom: "25%" }} className="col-lg-5 d-flex align-items-center">
					<div className="align-middle d-flex flex-column">
						<h3>{nft.name}</h3>
						<p>{nft.text}</p>
						{nft.galleryUrl ?
							<a href={nft.galleryUrl} style={{ marginTop: "20px" }}  target="_blank" className="btn btn-info">Gallery <br /> (Arweave permaweb)</a>
							:
							<> </>
						}
					</div>

				</div>
			</div>

			<h6 style={{ width: "100%", marginTop: "10vh" }} className="strong text-center">policy: 8be48195b34601787ff4db3439198dab6f687eb2f12d8389da6c457f</h6>
		</div>

	);
}
export default Collection
