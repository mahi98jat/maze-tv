import { FC } from "react";
import Carousel, { ReactElasticCarouselProps } from "react-elastic-carousel";
import ShowCard from "../../shared/ShowCard";
import { ShowTypes } from "../../Store";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./index.css";
import { ArrowForwardIos } from "@mui/icons-material";

type CarouselProps = {
  genre: string;
  data: ShowTypes[];
};

export const ShowContainer: FC<CarouselProps> = ({ genre, data }) => {
  const props: ReactElasticCarouselProps = {
    isRTL: false,
    itemsToShow: 3,
    itemsToScroll: 3,
    showEmptySlots: false,
    pagination: false,
    breakPoints: [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 5 },
      { width: 1750, itemsToShow: 6 },
    ],
    autoPlaySpeed: 1500,
    enableAutoPlay: true,
  };

  const Items = data.map((show) => <ShowCard show={show} />);
  return (
    <>
      <h1>{genre}</h1>
      <Carousel {...props}>{Items}</Carousel>
    </>
  );
};
