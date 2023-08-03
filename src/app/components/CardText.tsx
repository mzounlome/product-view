import {
  CardButton,
  CardHeader,
  CardParagraph,
  CardTextDiv,
  CardTitle,
  NewPrice,
  OldPrice,
  PriceDiv,
} from "./CardText-styles";

export default function CardText() {
  return (
    <CardTextDiv>
      <CardTitle>PERFUME</CardTitle>
      <CardHeader>Gabrielle Essence Eau De Parfum</CardHeader>
      <CardParagraph>
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the house of CHANEL
      </CardParagraph>
      <PriceDiv>
        <NewPrice>$149.99</NewPrice>
        <OldPrice>$169.99</OldPrice>
      </PriceDiv>
      <CardButton>Add to Cart</CardButton>
    </CardTextDiv>
  );
}
