import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import SaveIcon from "@material-ui/icons/SaveAlt";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import InfiniteScroll from "react-infinite-scroller";

import InfoPopOver from "./InfoPopOver";

export const ITEMS_PER_SCROLL = 8;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "wrap",
    transform: "translateZ(0)",
    width: "100%"
  },
  title: {
    color: "white"
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));

const imageArray = [
  {
    id: "0",
    author: "Alejandro Escamilla",
    width: 5616,
    height: 3744,
    url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url: "https://picsum.photos/id/0/5616/3744"
  },
  {
    id: "1",
    author: "Alejandro Escamilla",
    width: 5616,
    height: 3744,
    url: "https://unsplash.com/photos/LNRyGwIJr5c",
    download_url: "https://picsum.photos/id/1/5616/3744"
  },
  {
    id: "10",
    author: "Paul Jarvis",
    width: 2500,
    height: 1667,
    url: "https://unsplash.com/photos/6J--NXulQCs",
    download_url: "https://picsum.photos/id/10/2500/1667"
  },
  {
    id: "100",
    author: "Tina Rataj",
    width: 2500,
    height: 1656,
    url: "https://unsplash.com/photos/pwaaqfoMibI",
    download_url: "https://picsum.photos/id/100/2500/1656"
  },
  {
    id: "1000",
    author: "Lukas Budimaier",
    width: 5626,
    height: 3635,
    url: "https://unsplash.com/photos/6cY-FvMlmkQ",
    download_url: "https://picsum.photos/id/1000/5626/3635"
  },
  {
    id: "1001",
    author: "Danielle MacInnes",
    width: 5616,
    height: 3744,
    url: "https://unsplash.com/photos/1DkWWN1dr-s",
    download_url: "https://picsum.photos/id/1001/5616/3744"
  },
  {
    id: "1002",
    author: "NASA",
    width: 4312,
    height: 2868,
    url: "https://unsplash.com/photos/6-jTZysYY_U",
    download_url: "https://picsum.photos/id/1002/4312/2868"
  },
  {
    id: "1003",
    author: "E+N Photographies",
    width: 1181,
    height: 1772,
    url: "https://unsplash.com/photos/GYumuBnTqKc",
    download_url: "https://picsum.photos/id/1003/1181/1772"
  },
  {
    id: "1004",
    author: "Greg Rakozy",
    width: 5616,
    height: 3744,
    url: "https://unsplash.com/photos/SSxIGsySh8o",
    download_url: "https://picsum.photos/id/1004/5616/3744"
  },
  {
    id: "1005",
    author: "Matthew Wiebe",
    width: 5760,
    height: 3840,
    url: "https://unsplash.com/photos/tBtuxtLvAZs",
    download_url: "https://picsum.photos/id/1005/5760/3840"
  },
  {
    id: "1006",
    author: "Vladimir Kudinov",
    width: 3000,
    height: 2000,
    url: "https://unsplash.com/photos/-wWRHIUklxM",
    download_url: "https://picsum.photos/id/1006/3000/2000"
  },
  {
    id: "1008",
    author: "Benjamin Combs",
    width: 5616,
    height: 3744,
    url: "https://unsplash.com/photos/5L4XAgMSno0",
    download_url: "https://picsum.photos/id/1008/5616/3744"
  },
  {
    id: "1009",
    author: "Christopher Campbell",
    width: 5000,
    height: 7502,
    url: "https://unsplash.com/photos/CMWRIzyMKZk",
    download_url: "https://picsum.photos/id/1009/5000/7502"
  },
  {
    id: "101",
    author: "Christian Bardenhorst",
    width: 2621,
    height: 1747,
    url: "https://unsplash.com/photos/8lMhzUjD1Wk",
    download_url: "https://picsum.photos/id/101/2621/1747"
  },
  {
    id: "1010",
    author: "Samantha Sophia",
    width: 5184,
    height: 3456,
    url: "https://unsplash.com/photos/NaWKMlp3tVs",
    download_url: "https://picsum.photos/id/1010/5184/3456"
  },
  {
    id: "1011",
    author: "Roberto Nickson",
    width: 5472,
    height: 3648,
    url: "https://unsplash.com/photos/7BjmDICVloE",
    download_url: "https://picsum.photos/id/1011/5472/3648"
  },
  {
    id: "1012",
    author: "Scott Webb",
    width: 3973,
    height: 2639,
    url: "https://unsplash.com/photos/uAgLGG1WBd4",
    download_url: "https://picsum.photos/id/1012/3973/2639"
  },
  {
    id: "1013",
    author: "Cayton Heath",
    width: 4256,
    height: 2832,
    url: "https://unsplash.com/photos/D8LcRLwZyPs",
    download_url: "https://picsum.photos/id/1013/4256/2832"
  },
  {
    id: "1014",
    author: "Oscar Keys",
    width: 6016,
    height: 4000,
    url: "https://unsplash.com/photos/AmPRUnRb6N0",
    download_url: "https://picsum.photos/id/1014/6016/4000"
  },
  {
    id: "1015",
    author: "Alexey Topolyanskiy",
    width: 6000,
    height: 4000,
    url: "https://unsplash.com/photos/-oWyJoSqBRM",
    download_url: "https://picsum.photos/id/1015/6000/4000"
  },
  {
    id: "1016",
    author: "Philippe Wuyts",
    width: 3844,
    height: 2563,
    url: "https://unsplash.com/photos/_h7aBovKia4",
    download_url: "https://picsum.photos/id/1016/3844/2563"
  },
  {
    id: "1018",
    author: "Andrew Ridley",
    width: 3914,
    height: 2935,
    url: "https://unsplash.com/photos/Kt5hRENuotI",
    download_url: "https://picsum.photos/id/1018/3914/2935"
  },
  {
    id: "1019",
    author: "Patrick Fore",
    width: 5472,
    height: 3648,
    url: "https://unsplash.com/photos/V6s1cmE39XM",
    download_url: "https://picsum.photos/id/1019/5472/3648"
  },
  {
    id: "102",
    author: "Ben Moore",
    width: 4320,
    height: 3240,
    url: "https://unsplash.com/photos/pJILiyPdrXI",
    download_url: "https://picsum.photos/id/102/4320/3240"
  },
  {
    id: "1020",
    author: "Adam Willoughby-Knox",
    width: 4288,
    height: 2848,
    url: "https://unsplash.com/photos/_snqARKTgoc",
    download_url: "https://picsum.photos/id/1020/4288/2848"
  },
  {
    id: "1021",
    author: "Frances Gunn",
    width: 2048,
    height: 1206,
    url: "https://unsplash.com/photos/8BmNurlVR6M",
    download_url: "https://picsum.photos/id/1021/2048/1206"
  },
  {
    id: "1022",
    author: "Vashishtha Jogi",
    width: 6000,
    height: 3376,
    url: "https://unsplash.com/photos/bClr95glx6k",
    download_url: "https://picsum.photos/id/1022/6000/3376"
  },
  {
    id: "1023",
    author: "William Hook",
    width: 3955,
    height: 2094,
    url: "https://unsplash.com/photos/93Ep1dhTd2s",
    download_url: "https://picsum.photos/id/1023/3955/2094"
  },
  {
    id: "1024",
    author: "Мартин Тасев",
    width: 1920,
    height: 1280,
    url: "https://unsplash.com/photos/7ALI0RYyq6s",
    download_url: "https://picsum.photos/id/1024/1920/1280"
  },
  {
    id: "1025",
    author: "Matthew Wiebe",
    width: 4951,
    height: 3301,
    url: "https://unsplash.com/photos/U5rMrSI7Pn4",
    download_url: "https://picsum.photos/id/1025/4951/3301"
  }
];

export default function ImageGrid(props) {
  const classes = useStyles();
  const tileData = imageArray;
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [popOverOpen, setPopOverOpen] = useState(false);
  const [popOverData, setPopOverData] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [imageArr, setImageArr] = useState([]);
  const [ref, setRef] = useState(null);

  const handleModalClose = () => {
    setOpen(false);
    setSelectedImage({});
  };

  const imageClickHandler = tile => event => {
    setSelectedImage(tile);
    setOpen(true);
  };

  const handleClick = tile => event => {
    setAnchorEl(event.currentTarget);
    setPopOverOpen(true);
    const data = [
      {
        value: tile.author,
        label: "Author",
        format: ""
      }
    ];
    setPopOverData(data);
  };

  function handlePopOverClose() {
    setAnchorEl(null);
    setPopOverOpen(false);
  }

  const closeButtonStyles = {
    position: "absolute",
    // top: '0%',
    left: "100%",
    transform: `translate(-100%, 0%)`,
    color: "white",
    backgroundColor: "#0004"
  };
  const saveButtonStyles = {
    position: "absolute",
    // top: '0%',
    left: "100%",
    transform: `translate(-250%, 0%)`,
    color: "white",
    backgroundColor: "#0004"
  };

  const loader = (
    <div className="loader" key={0}>
      <LinearProgress />
    </div>
  );

  const loadItems = page => {
    const tempArr = tileData
      .slice((page - 1) * ITEMS_PER_SCROLL, page * ITEMS_PER_SCROLL)
      .map((tile, index) => (
        <GridListTile key={imageArr.length + index}>
          <img
            src={tile.download_url}
            alt={tile.id}
            onClick={imageClickHandler(tile)}
          />
          <GridListTileBar
            title={tile.id}
            classes={{
              root: classes.titleBar,
              title: classes.title
            }}
            actionIcon={
              <IconButton
                aria-label={`star ${tile.id}`}
                onClick={handleClick(tile)}
              >
                <InfoIcon className={classes.title} />
              </IconButton>
            }
          />
        </GridListTile>
      ));

    setImageArr([...imageArr, ...tempArr]);

    if (page * ITEMS_PER_SCROLL >= tileData.length) {
      setHasMoreItems(false);
    }
  };

  return tileData.length ? (
    <div className={classes.root}>
      <Dialog
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleModalClose}
        maxWidth="lg"
        scroll={"body"}
        PaperComponent={"div"}
      >
        <div>
          <IconButton
            aria-label="close"
            onClick={handleModalClose}
            style={closeButtonStyles}
            size={"small"}
          >
            <CloseIcon />
          </IconButton>
          <a
            href={selectedImage.download_url}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <IconButton
              aria-label="close"
              style={saveButtonStyles}
              size={"small"}
            >
              <SaveIcon />
            </IconButton>
          </a>
          <img
            src={selectedImage.download_url}
            alt={selectedImage.id}
            style={{ borderRadius: "10px" }}
          />
        </div>
      </Dialog>
      <Grid
        container
        style={{ overflow: "scroll", height: 400 }}
        ref={ref => {
          setRef(ref);
        }}
      >
        <InfiniteScroll
          pageStart={0}
          loadMore={loadItems}
          hasMore={hasMoreItems}
          loader={loader}
          useWindow={false}
          initialLoad={true}
          getScrollParent={() => ref}
          style={{ width: "100%" }}
        >
          <GridList className={classes.gridList} cols={4} rows={3} spacing={10}>
            {imageArr}
          </GridList>
        </InfiniteScroll>
      </Grid>
      <InfoPopOver
        data={popOverData}
        popOverOpen={popOverOpen}
        handlePopOverClose={handlePopOverClose}
        anchorEl={anchorEl}
      />
    </div>
  ) : (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={1} rows={2}>
        <Typography style={{ textAlign: "center", alignSelf: "center" }}>
          {"No Data"}
        </Typography>
      </GridList>
    </div>
  );
}
