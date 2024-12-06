function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     XYLON/male0001.png
     XYLON/male0002.png
     XYLON/male0003.png
     XYLON/male0004.png
     XYLON/male0005.png
     XYLON/male0006.png
     XYLON/male0007.png
     XYLON/male0008.png
     XYLON/male0009.png
     XYLON/male0010.png
     XYLON/male0011.png
     XYLON/male0012.png
     XYLON/male0013.png
     XYLON/male0014.png
     XYLON/male0015.png
     XYLON/male0016.png
     XYLON/male0017.png
     XYLON/male0018.png
     XYLON/male0019.png
     XYLON/male0020.png
     XYLON/male0021.png
     XYLON/male0022.png
     XYLON/male0023.png
     XYLON/male0024.png
     XYLON/male0025.png
     XYLON/male0026.png
     XYLON/male0027.png
     XYLON/male0028.png
     XYLON/male0029.png
     XYLON/male0030.png
     XYLON/male0031.png
     XYLON/male0032.png
     XYLON/male0033.png
     XYLON/male0034.png
     XYLON/male0035.png
     XYLON/male0036.png
     XYLON/male0037.png
     XYLON/male0038.png
     XYLON/male0039.png
     XYLON/male0040.png
     XYLON/male0041.png
     XYLON/male0042.png
     XYLON/male0043.png
     XYLON/male0044.png
     XYLON/male0045.png
     XYLON/male0046.png
     XYLON/male0047.png
     XYLON/male0048.png
     XYLON/male0049.png
     XYLON/male0050.png
     XYLON/male0051.png
     XYLON/male0052.png
     XYLON/male0053.png
     XYLON/male0054.png
     XYLON/male0055.png
     XYLON/male0056.png
     XYLON/male0057.png
     XYLON/male0058.png
     XYLON/male0059.png
     XYLON/male0060.png
     XYLON/male0061.png
     XYLON/male0062.png
     XYLON/male0063.png
     XYLON/male0064.png
     XYLON/male0065.png
     XYLON/male0066.png
     XYLON/male0067.png
     XYLON/male0068.png
     XYLON/male0069.png
     XYLON/male0070.png
     XYLON/male0071.png
     XYLON/male0072.png
     XYLON/male0073.png
     XYLON/male0074.png
     XYLON/male0075.png
     XYLON/male0076.png
     XYLON/male0077.png
     XYLON/male0078.png
     XYLON/male0079.png
     XYLON/male0080.png
     XYLON/male0081.png
     XYLON/male0082.png
     XYLON/male0083.png
     XYLON/male0084.png
     XYLON/male0085.png
     XYLON/male0086.png
     XYLON/male0087.png
     XYLON/male0088.png
     XYLON/male0089.png
     XYLON/male0090.png
     XYLON/male0091.png
     XYLON/male0092.png
     XYLON/male0093.png
     XYLON/male0094.png
     XYLON/male0095.png
     XYLON/male0096.png
     XYLON/male0097.png
     XYLON/male0098.png
     XYLON/male0099.png
     XYLON/male0100.png
     XYLON/male0101.png
     XYLON/male0102.png
     XYLON/male0103.png
     XYLON/male0104.png
     XYLON/male0105.png
     XYLON/male0106.png
     XYLON/male0107.png
     XYLON/male0108.png
     XYLON/male0109.png
     XYLON/male0110.png
     XYLON/male0111.png
     XYLON/male0112.png
     XYLON/male0113.png
     XYLON/male0114.png
     XYLON/male0115.png
     XYLON/male0116.png
     XYLON/male0117.png
     XYLON/male0118.png
     XYLON/male0119.png
     XYLON/male0120.png
     XYLON/male0121.png
     XYLON/male0122.png
     XYLON/male0123.png
     XYLON/male0124.png
     XYLON/male0125.png
     XYLON/male0126.png
     XYLON/male0127.png
     XYLON/male0128.png
     XYLON/male0129.png
     XYLON/male0130.png
     XYLON/male0131.png
     XYLON/male0132.png
     XYLON/male0133.png
     XYLON/male0134.png
     XYLON/male0135.png
     XYLON/male0136.png
     XYLON/male0137.png
     XYLON/male0138.png
     XYLON/male0139.png
     XYLON/male0140.png
     XYLON/male0141.png
     XYLON/male0142.png
     XYLON/male0143.png
     XYLON/male0144.png
     XYLON/male0145.png
     XYLON/male0146.png
     XYLON/male0147.png
     XYLON/male0148.png
     XYLON/male0149.png
     XYLON/male0150.png
     XYLON/male0151.png
     XYLON/male0152.png
     XYLON/male0153.png
     XYLON/male0154.png
     XYLON/male0155.png
     XYLON/male0156.png
     XYLON/male0157.png
     XYLON/male0158.png
     XYLON/male0159.png
     XYLON/male0160.png
     XYLON/male0161.png
     XYLON/male0162.png
     XYLON/male0163.png
     XYLON/male0164.png
     XYLON/male0165.png
     XYLON/male0166.png
     XYLON/male0167.png
     XYLON/male0168.png
     XYLON/male0169.png
     XYLON/male0170.png
     XYLON/male0171.png
     XYLON/male0172.png
     XYLON/male0173.png
     XYLON/male0174.png
     XYLON/male0175.png
     XYLON/male0176.png
     XYLON/male0177.png
     XYLON/male0178.png
     XYLON/male0179.png
     XYLON/male0180.png
     XYLON/male0181.png
     XYLON/male0182.png
     XYLON/male0183.png
     XYLON/male0184.png
     XYLON/male0185.png
     XYLON/male0186.png
     XYLON/male0187.png
     XYLON/male0188.png
     XYLON/male0189.png
     XYLON/male0190.png
     XYLON/male0191.png
     XYLON/male0192.png
     XYLON/male0193.png
     XYLON/male0194.png
     XYLON/male0195.png
     XYLON/male0196.png
     XYLON/male0197.png
     XYLON/male0198.png
     XYLON/male0199.png
     XYLON/male0200.png
     XYLON/male0201.png
     XYLON/male0202.png
     XYLON/male0203.png
     XYLON/male0204.png
     XYLON/male0205.png
     XYLON/male0206.png
     XYLON/male0207.png
     XYLON/male0208.png
     XYLON/male0209.png
     XYLON/male0210.png
     XYLON/male0211.png
     XYLON/male0212.png
     XYLON/male0213.png
     XYLON/male0214.png
     XYLON/male0215.png
     XYLON/male0216.png
     XYLON/male0217.png
     XYLON/male0218.png
     XYLON/male0219.png
     XYLON/male0220.png
     XYLON/male0221.png
     XYLON/male0222.png
     XYLON/male0223.png
     XYLON/male0224.png
     XYLON/male0225.png
     XYLON/male0226.png
     XYLON/male0227.png
     XYLON/male0228.png
     XYLON/male0229.png
     XYLON/male0230.png
     XYLON/male0231.png
     XYLON/male0232.png
     XYLON/male0233.png
     XYLON/male0234.png
     XYLON/male0235.png
     XYLON/male0236.png
     XYLON/male0237.png
     XYLON/male0238.png
     XYLON/male0239.png
     XYLON/male0240.png
     XYLON/male0241.png
     XYLON/male0242.png
     XYLON/male0243.png
     XYLON/male0244.png
     XYLON/male0245.png
     XYLON/male0246.png
     XYLON/male0247.png
     XYLON/male0248.png
     XYLON/male0249.png
     XYLON/male0250.png
     XYLON/male0251.png
     XYLON/male0252.png
     XYLON/male0253.png
     XYLON/male0254.png
     XYLON/male0255.png
     XYLON/male0256.png
     XYLON/male0257.png
     XYLON/male0258.png
     XYLON/male0259.png
     XYLON/male0260.png
     XYLON/male0261.png
     XYLON/male0262.png
     XYLON/male0263.png
     XYLON/male0264.png
     XYLON/male0265.png
     XYLON/male0266.png
     XYLON/male0267.png
     XYLON/male0268.png
     XYLON/male0269.png
     XYLON/male0270.png
     XYLON/male0271.png
     XYLON/male0272.png
     XYLON/male0273.png
     XYLON/male0274.png
     XYLON/male0275.png
     XYLON/male0276.png
     XYLON/male0277.png
     XYLON/male0278.png
     XYLON/male0279.png
     XYLON/male0280.png
     XYLON/male0281.png
     XYLON/male0282.png
     XYLON/male0283.png
     XYLON/male0284.png
     XYLON/male0285.png
     XYLON/male0286.png
     XYLON/male0287.png
     XYLON/male0288.png
     XYLON/male0289.png
     XYLON/male0290.png
     XYLON/male0291.png
     XYLON/male0292.png
     XYLON/male0293.png
     XYLON/male0294.png
     XYLON/male0295.png
     XYLON/male0296.png
     XYLON/male0297.png
     XYLON/male0298.png
     XYLON/male0299.png
     XYLON/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})