import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import { Link } from 'react-router-dom';

const cardItems = [
  {
    id: 1,
    title: " School Student Monitoring App",
    description: "A mobile app bridging the gap between school and home giving parents real-time visibility into their child's daily activities and notifications.",
    image: "/src/assets/images/card-image.jpg",
    alt: "image description",
    url: '/case-study/one'
  },
  {
    id: 2,
    title: "Food Delivery App Redesign",
    description: "A food delivery app redesign focused on pricing transparency and smarter customer support rebuilding user trust at every step.",
    image: "/src/assets/images/card-image1.jpg",
    alt: "image description 2",
    url: '/case-study/two'
  },
  {
    id: 3,
    title: "Heading",
    description: "UI/UX Designer with 3+ years of experience building intuitive, accessible web applications for B2B enterprises.",
    image: "/src/assets/images/card-image2.jpg",
    alt: "image description 2",
    url:  '/case-study/three'
  },
  {
    id: 4,
    title: "Heading",
    description: "UI/UX Designer with 3+ years of experience building intuitive, accessible web applications for B2B enterprises.",
    image: "/src/assets/images/card-image3.jpg",
    alt: "image description 2",
    url:  '/case-study/four'
  },
];
function GradientCover() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 flex-wrap justify-center">
      {cardItems.map((cardItem) => (
       <Link to={cardItem.url} key={cardItem.id} style={{ textDecoration: 'none' }}>
        <Card key={cardItem.id} variant="outlined" sx={{ minHeight: '280px', width: '100%' }} className="!border-[#343434] cursor-pointer">
          <CardCover><img src={cardItem.image} loading="lazy" alt={cardItem.alt}/></CardCover>
          <CardCover sx={{background:'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',}}/>
          <CardContent sx={{ justifyContent: 'flex-end' }}>
            <h4 className="text-[22px] font-bold text-white">{cardItem.title}</h4>
            <p className="text-white font-normal text-base">{cardItem.description}</p>
          </CardContent>
        </Card>
        </Link>
        ))
      }
    </div>
  );
}
export default GradientCover;