import { Title, Img } from './HomeView.styled';
import homeImg from '../../image/homeImg.jpg';

export default function HomeView() {
  return (
    <>
      <Title>Rick and Morty App</Title>
      <Img src={homeImg} alt="Rick and Morty" />
    </>
  );
}
