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
        { file: "IMG_0394.thumb.jpg", groups: ["melbourne", "dandenongs"] },
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
        { file: "IMG_0594.jpg", groups: ["melbourne"] },
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
        { file: "IMG_1119.jpg", groups: ["sydney"] },
        { file: "IMG_1125.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1127.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1137.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1141.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1144.thumb.jpg", groups: ["sydney"] }
      ]
    },
    {
      dir: getDir("7").location.dir,
      description: getDir("7").description,
      images: [
        { file: "IMG_1193.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1200.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1238.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1240.thumb.jpg", groups: ["sydney"], best: "main" },
        { file: "IMG_1245.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1261.jpg", groups: ["sydney"] },
        { file: "IMG_1279.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1293.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1296.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1307.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1317.thumb.jpg", groups: ["sydney"] },
        { file: "IMG_1332.thumb.jpg", groups: ["sydney"] }
      ]
    }
  ];

  const images = imagesDirs.reduce((a, dir) => {
    //if (dir.skip) return a;
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

  return images;
};
