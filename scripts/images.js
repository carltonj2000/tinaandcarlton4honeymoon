const path = require("path");
const fs = require("fs");
module.exports = (host = "CARLTONs-MacBook-Pro.local") => {
  const imageDirsAll = [
    {
      index: "1", // could be uuid but incrementing for now
      description: "Australia Melbourne",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir:
            "/Users/carltonjoseph/cj/cjpics2018/australia/australia1melbourne/107_0322/",
          description: "Dandenongs Mountains"
        },
        {
          machine: "workstation",
          dir: "tbd"
        }
      ]
    },
    {
      index: "2",
      description: "Australia Melbourne",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir:
            "/Users/carltonjoseph/cj/cjpics2018/australia/australia1melbourne/108_0323/"
        }
      ]
    },
    {
      index: "3",
      description: "Australia Melbourne Great Ocean Road",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir:
            "/Users/carltonjoseph/cj/cjpics2018/australia/australia2greatOceanRd/108_0922/"
        }
      ]
    },
    {
      index: "4",
      description: "Australia Melbourne",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir:
            "/Users/carltonjoseph/cj/cjpics2018/australia/australia2greatOceanRd/109_0923/"
        }
      ]
    },
    {
      index: "5",
      description: "Australia Melbourne Downtown",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir:
            "/Users/carltonjoseph/cj/cjpics2018/australia/australia3mlbrnDownTown/"
        }
      ]
    },
    {
      index: "6",
      description: "Australia Sydney",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir: "/Users/carltonjoseph/cj/cjpics2018/australia/australia4Sydney1/"
        }
      ]
    },
    {
      index: "7",
      description: "Australia Sydney",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir: "/Users/carltonjoseph/cj/cjpics2018/australia/australia5Sydney2/"
        }
      ]
    },
    {
      index: "8",
      description: "Australia Sydney Bondi Beach",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir: "/Users/carltonjoseph/cj/cjpics2018/australia/australia6Sydney3/"
        }
      ]
    },
    {
      index: "9",
      description: "Australia Sydney",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir: "/Users/carltonjoseph/cj/cjpics2018/australia/australia7Sydney4/"
        }
      ]
    },
    {
      index: "10",
      description: "Australia Sydney Blue Mountains",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir: "/Users/carltonjoseph/cj/cjpics2018/australia/australia8Sydney5/"
        }
      ]
    },
    {
      index: "11",
      description: "Port Macquarie",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir:
            "/Users/carltonjoseph/cj/cjpics2018/australia/australia9Syd2Bris/"
        }
      ]
    },
    {
      index: "12",
      description: "Brisbane",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir:
            "/Users/carltonjoseph/cj/cjpics2018/australia/australia91Brisbane/"
        }
      ]
    },
    {
      index: "13",
      description: "Cairns",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir: "/Users/carltonjoseph/cj/cjpics2018/australia/australia92Cairns/"
        }
      ]
    },
    {
      index: "14",
      description: "Cairns",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir: "/Users/carltonjoseph/cj/cjpics2018/australia/australia93Cairns/"
        }
      ]
    },
    {
      index: "15",
      description: "Cairns",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir: "/Users/carltonjoseph/cj/cjpics2018/australia/australia94Cairns/"
        }
      ]
    },
    {
      index: "16",
      description: "Brisbane",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir:
            "/Users/carltonjoseph/cj/cjpics2018/australia/australia95Brisbane/"
        }
      ]
    },
    {
      index: "17",
      description: "Brisbane",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir:
            "/Users/carltonjoseph/cj/cjpics2018/australia/australia96Brisbane/"
        }
      ]
    },
    {
      index: "18",
      description: "Brisbane",
      locations: [
        {
          machine: "CARLTONs-MacBook-Pro.local",
          dir:
            "/Users/carltonjoseph/cj/cjpics2018/australia/australia97Brisbane/"
        }
      ]
    }
  ];

  const imageDir = imageDirsAll.reduce((a, d) => {
    const location = d.locations.filter(l => l.machine === host);
    delete d.locations;
    d.location = location[0];
    a.push(d);
    return a;
  }, []);
  const getDir = index => imageDir.filter(i => index === i.index)[0];
  const imagesDirs = [
    {
      skip: true,
      dir: getDir("1").location.dir,
      description: getDir("1").description,
      images: [
        {
          file: "IMG_0394.thumb.jpg",
          groups: ["melbourne", "dandenongs"],
          main: "image"
        },
        { file: "IMG_0419.thumb.jpg", groups: ["melbourne", "dandenongs"] },
        { file: "IMG_0428.thumb.jpg", groups: ["melbourne", "dandenongs"] },
        { file: "IMG_0449.thumb.jpg", groups: ["melbourne", "dandenongs"] },
        { file: "IMG_0484.thumb.jpg", groups: ["melbourne", "dandenongs"] },
        {
          file: "IMG_0494.thumb.jpg",
          groups: ["melbourne"],
          description: "Aunts House"
        }
      ]
    },
    {
      skip: true,
      dir: getDir("2").location.dir,
      description: getDir("2").description,
      images: [
        {
          file: "IMG_0509.thumb.jpg",
          groups: ["melbourne"],
          description: "Temple"
        }
      ]
    },
    {
      skip: true,
      dir: getDir("3").location.dir,
      description: getDir("3").description,
      images: [
        { file: "IMG_0526.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0531.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0548.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0569.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0578.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0590.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0594.JPG", groups: ["melbourne"] },
        { file: "IMG_0603.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0609.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0610.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0613.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0626.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0643.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0652.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0657.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0672.thumb.jpg", groups: ["melbourne"] }
      ]
    },
    {
      skip: true,
      dir: getDir("4").location.dir,
      description: getDir("4").description,
      images: [{ file: "IMG_0727.thumb.jpg", groups: ["melbourne"] }]
    },
    {
      skip: true,
      dir: getDir("5").location.dir,
      description: getDir("5").description,
      images: [
        { file: "IMG_0755.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0763.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0776.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0793.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0814.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0827.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0839.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0859.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0868.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0908.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0917.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0920.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0931.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0963.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_0981.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_1069.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_1093.thumb.jpg", groups: ["melbourne"] },
        { file: "IMG_1103.thumb.jpg", groups: ["melbourne"] }
      ]
    },
    {
      skip: true,
      dir: getDir("6").location.dir,
      description: getDir("6").description,
      images: [
        { file: "IMG_1119.JPG", groups: ["sydney"] },
        { file: "IMG_1125.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1127.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1137.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1141.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1144.thumb.jpg", groups: ["sydney"] }
      ]
    },
    {
      skip: true,
      dir: getDir("7").location.dir,
      description: getDir("7").description,
      images: [
        { file: "IMG_1193.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1200.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1238.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1240.thumb.jpg", groups: ["sydney"], main: "image" },
        { file: "IMG_1245.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1261.JPG", groups: ["sydney"] },
        { file: "IMG_1279.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1293.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1296.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1307.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1317.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1332.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1343.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1355.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1357.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1381.thumb.jpg", groups: ["sydney"] }
      ]
    },
    {
      skip: true,
      dir: getDir("8").location.dir,
      description: getDir("8").description,
      images: [
        { file: "IMG_1389.thumb.jpg", groups: ["sydney", "bondi"] },
        { file: "IMG_1392.thumb.jpg", groups: ["sydney", "bondi"] },
        { file: "IMG_1404.thumb.jpg", groups: ["sydney", "bondi"] },
        { file: "IMG_1405.thumb.jpg", groups: ["sydney", "bondi"] },
        { file: "IMG_1415.thumb.jpg", groups: ["sydney", "bondi"] },
        { file: "IMG_1427.thumb.jpg", groups: ["sydney", "bondi"] },
        { file: "IMG_1445.thumb.jpg", groups: ["sydney", "bondi"] },
        { file: "IMG_1458.thumb.jpg", groups: ["sydney", "bondi"] },
        { file: "IMG_1462.thumb.jpg", groups: ["sydney", "bondi"] },
        {
          file: "IMG_1497.thumb.jpg",
          groups: ["sydney"],
          description: "Opera House"
        }
      ]
    },
    {
      skip: true,
      dir: getDir("9").location.dir,
      description: getDir("9").description,
      images: [
        { file: "IMG_1521.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1524.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1546.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1553.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1555.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1563.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1567.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1571.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1573.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1581.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1582.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1589.thumb.jpg", groups: ["sydney"] }
      ]
    },
    {
      skip: true,
      dir: getDir("10").location.dir,
      description: getDir("10").description,
      images: [
        { file: "IMG_1613.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1618.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1631.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1646.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1651.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1663.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1672.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1680.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1687.thumb.jpg", groups: ["sydney"] }
      ]
    },
    {
      skip: true,
      dir: getDir("11").location.dir,
      description: getDir("11").description,
      images: [
        { file: "IMG_1704.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1707.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1709.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1710.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1714.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1720.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1731.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1733.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1751.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1780.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1790.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1793.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1797.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1808.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1809.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1814.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1818.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1823.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1831.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1833.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1837.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1839.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1840.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1846.thumb.jpg", groups: ["macquarie"] },
        { file: "IMG_1856.thumb.jpg", groups: ["macquarie"] }
      ]
    },
    {
      skip: true,
      dir: getDir("12").location.dir,
      description: getDir("12").description,
      images: [
        { file: "IMG_1878.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_1880.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_1883.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_1890.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_1895.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_1904.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_1905.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_1914.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_1920.thumb.jpg", groups: ["brisbane"] }
      ]
    },
    {
      skip: true,
      dir: getDir("13").location.dir,
      description: getDir("13").description,
      images: [
        { file: "IMG_1928.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_1929.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_1943.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_1957.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_1961.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_1966.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_1974.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_1983.thumb.jpg", groups: ["cairns"] }
      ]
    },
    {
      skip: true,
      dir: getDir("14").location.dir,
      description: getDir("14").description,
      images: [
        { file: "IMG_2000.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2001.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2015.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2018.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2020.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2038.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2058.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2066.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2106.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2109.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2118.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2127.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2137.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2145.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2179.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2192.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2194.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2199.thumb.jpg", groups: ["cairns"] }
      ]
    },
    {
      skip: true,
      dir: getDir("15").location.dir,
      description: getDir("15").description,
      images: [
        { file: "IMG_2206.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2209.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2220.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2223.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2227.thumb.jpg", groups: ["cairns"] },
        { file: "IMG_2231.thumb.jpg", groups: ["cairns"] }
      ]
    },
    {
      dir: getDir("16").location.dir,
      description: getDir("16").description,
      images: [
        { file: "IMG_2239.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2248.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2256.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2265.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2266.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2282.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2300.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2306.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2316.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2328.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2330.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2338.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2343.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2350.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2354.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2374.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2375.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2393.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2396.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2407.thumb.jpg", groups: ["brisbane"] }
      ]
    },
    {
      dir: getDir("17").location.dir,
      description: getDir("17").description,
      images: [
        { file: "IMG_2409.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2410.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2417.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2420.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2424.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2425.thumb.jpg", groups: ["brisbane"] }
      ]
    },
    {
      dir: getDir("18").location.dir,
      description: getDir("18").description,
      images: [
        { file: "IMG_2426.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2429.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2439.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2448.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2476.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2497.thumb.jpg", groups: ["brisbane"] },
        { file: "IMG_2499.thumb.jpg", groups: ["brisbane"] }
      ]
    }
  ];

  const images = imagesDirs.reduce((a, dir) => {
    // if (dir.skip) return a; // uncomment not to convert file repetitively
    const images = dir.images.reduce((a2, img) => {
      a2.push({
        dir: dir.dir,
        description: img.description || dir.description,
        ...img
      });
      return a2;
    }, []);
    a.push(...images);
    return a;
  }, []);

  const uniqueIndex = () => {
    imageDirsAll.reduce((a, d) => {
      if (a.includes(d.index)) {
        console.log(`index ${d.index} is not allowed to be used twice`);
        process.exit(-1);
      }
      a.push(d.index);
      return a;
    }, []);
  };

  const imagesExists = images => {
    images.reduce((a, d) => {
      const file = path.join(d.dir, d.file);
      if (!fs.existsSync(file)) {
        console.log(`file ${d.file} not found in ${d.dir}`);
        process.exit(-1);
      }
      if (a.includes(file)) {
        console.log(`duplicate definition for file ${d.file} in ${d.dir}`);
        process.exit(-1);
      }
      a.push(file);
      return a;
    }, []);
  };

  uniqueIndex();
  imagesExists(images);

  return images;
};
