import ceoImage from "../assets/images/ceo.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import c4 from "../assets/images/c4.png";
import c5 from "../assets/images/c5.png";
import c6 from "../assets/images/c6.png";
import blogHolderImage from "../assets/images/blog_hold.jpg";

const getPosts = async () => {
  return [
    {
      id: 1,
      type: "FEATURED POST",
      title: "The Future of Finance",
      date: "2021-10-10",
      imageUrl: blogHolderImage,
    },
    {
      id: 2,
      type: "FEATURED POST",
      title: "What is a Hedge Fund?",
      date: "2021-10-10",
      imageUrl: blogHolderImage,
    },
    {
      id: 3,
      type: "BLOG",
      title: "The Future of Finance",
      date: "2021-10-10",
      imageUrl: blogHolderImage,
    },
    {
      id: 4,
      type: "BLOG",
      title: "The Future of Finance",
      date: "2021-10-10",
      imageUrl: blogHolderImage,
    },
    {
      id: 5,
      type: "BLOG",
      title: "The Future of Finance",
      date: "2021-10-10",
      imageUrl: blogHolderImage,
    },
    {
      id: 6,
      type: "BLOG",
      title: "The Future of Finance",
      date: "2021-10-10",
      imageUrl: blogHolderImage,
    },
    {
      id: 7,
      type: "BLOG",
      title: "The Future of Finance",
      date: "2021-10-10",
      imageUrl: blogHolderImage,
    },
    {
      id: 8,
      type: "BLOG",
      title: "The Future of Finance",
      date: "2021-10-10",
      imageUrl: blogHolderImage,
    },
    {
      id: 9,
      type: "BLOG",
      title: "The Future of Finance",
      date: "2021-10-10",
      imageUrl: blogHolderImage,
    },
    {
      id: 10,
      type: "BLOG",
      title: "The Future of Finance",
      date: "2021-10-10",
      imageUrl: blogHolderImage,
    },
  ];
};

const getPostDetails = async (id: number) => {
  console.log(id);
  return {
    id: 1,
    type: "FEATURED POST",
    title: "The Future of Finance",
    date: "2021-10-10",
    author: "John Doe",
    imageUrl: blogHolderImage,
    content:
      "Lorem ipsum dolor sit amet consectetur. Pretium dolor sapien leo viverra. Mi sit purus enim quam vestibulum mi amet." +
      "Volutpat vitae urna quisque quam risus.Eget ut vel amet quis vestibulum tempor ut.Iaculis quis iaculis vitae id vestibulum morbi" +
      "aliquam a.Ac sed posuere leo gravida morbi laoreet.Aliquet et diam tristique luctus.Nibh morbi accumsan velit quam.Metus sed cras " +
      "eu a interdum ultricies ipsum.Nullam ipsum est bibendum tristique.Molestie leo porta mollis sit sed at interdum mattis.Nisi mi" +
      "faucibus erat sit.Nunc congue tempor placerat magna nunc mauris metus vestibulum.Volutpat urna pulvinar id sit duis morbi.Odio ac" +
      "quis lectus eros.Viverra ac enim at sed.Nisl orci ante scelerisque vulputate.Urna duis arcu aenean ac hendrerit at mauris.Eleifend" +
      "consectetur adipiscing sed sed nunc magna quis scelerisque.Ridiculus laoreet orci leo mollis in praesent.Purus pellentesque in " +
      "volutpat metus senectus ante.Erat aliquam risus nulla quam.Iaculis at nulla faucibus eget.Elementum nunc lectus egestas blandit nisi" +
      " ac.Neque facilisis pharetra sodales magna. Nulla morbi interdum orci tincidunt vitae netus neque ultrices. Ultricies dignissim " +
      "tincidunt egestas nec purus. Adipiscing in sed id habitant commodo. Ut nisl suspendisse dolor lectus convallis amet vitae elementum " +
      "nulla. Sed urna amet ac commodo vitae ultricies lacus ultricies. Sed donec lobortis enim at ac mi. Elit cursus suspendisse ultrices " +
      "mattis duis tortor tristique. Enim feugiat sagittis aliquam imperdiet porta enim. Quam morbi tortor montes venenatis ullamcorper dui" +
      " rhoncus neque. Vel vitae sit aliquam nulla ut lobortis eget ultrices mauris. Odio commodo amet pellentesque volutpat sapien massa." +
      "Sed faucibus volutpat euismod dignissim ullamcorper phasellus. Sed lectus eget eget feugiat malesuada nisl turpis sit mi. Ornare libero" +
      " non molestie enim nunc nibh commodo faucibus.Eget porttitor commodo aliquet arcu.",
    related: [
      {
        id: 8,
        type: "BLOG",
        title: "The Future of Finance",
        date: "2021-10-10",
        imageUrl: blogHolderImage,
      },
      {
        id: 9,
        type: "BLOG",
        title: "The Future of Finance",
        date: "2021-10-10",
        imageUrl: blogHolderImage,
      },
      {
        id: 10,
        type: "BLOG",
        title: "The Future of Finance",
        date: "2021-10-10",
        imageUrl: blogHolderImage,
      },
    ],
  };
};

const getExecutiveSummary = async () => {
  return {
    data: {
      0: {
        name: "FRANCIS CARLOS",
        title: "MANAGING DIRECTOR",
        imageUrl: ceoImage,
      },
      1: {
        name: "OMZIN WUNKAEW",
        title: "DIRECTOR OF EDUCATION",
        imageUrl: c2,
      },
      2: {
        name: "BHAVESH KUMAR",
        title: "DIRECTOR OF OPERATIONS",
        imageUrl: c3,
      },
      3: {
        name: "THOMAS ZENG",
        title: "VP OF OUTREACH",
        imageUrl: c4,
      },
      4: {
        name: "CHARLES CARDOT",
        title: "ASSOCIATE OF COMPETITION",
        imageUrl: c5,
      },
      5: {
        name: "ANDREW FANG XIONG",
        title: "MANAGING DIRECTORD",
        imageUrl: c6,
      },
    },
  };
};

const getPortfolio = async () => {
  return {
    data: {
      0: {
        name: "Portfolio 1",
        amount: 1000000,
        change: 0.1,
      },
      1: {
        name: "Portfolio 2",
        amount: 2000000,
        change: 0.2,
      },
      2: {
        name: "Portfolio 3",
        amount: 3000000,
        change: 0.3,
      },
      3: {
        name: "Portfolio 4",
        amount: 4000000,
        change: 0.4,
      },
    },
  };
};

const getPaths = async () => {
  return [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: "BLOG",
      url: "/blog",
    },
    {
      name: "PORTFOLIO",
      url: "/portfolio",
    },
  ];
};

export {
  getExecutiveSummary,
  getPortfolio,
  getPaths,
  getPostDetails,
  getPosts,
};
