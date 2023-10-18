const fortunesCookies=[
    "orem   dolor sit amet, consectetur adip",
    "lorem ipsum dolor sit amet, con",
    "ipsun  sit amet, consectetur adip",
    "amet, consectetur adip",
];

exports.getFortune = () =>{
    const idx =Math.floor(Math.random()*fortunesCookies.length)
    return fortunesCookies[idx];
}
