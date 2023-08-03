import { color } from "@mui/system";
import styled from "styled-components";

export const CardTextDiv = styled.div`
  height: 100%;
  width: 50%;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 5%;
`;

export const CardTitle = styled.h2`
  color: #9a9c9d;
  font-size: 1.5rem;
`;

export const CardHeader = styled.h1`
  font-size: 2rem;
  color: black;
`;

export const CardParagraph = styled.p`
  font-size: 1rem;
  color: #9a9c9d;
`;
export const PriceDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const NewPrice = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  color: #32664f;
`;

export const OldPrice = styled.p`
  font-size: 1.2rem;
  text-decoration: line-through;
  color: #9a9c9d;
`;

export const CardButton = styled.button`
  color: white;
  background-color: #32664f;
  font-size: 1.2rem;
  border-radius: 5px;
  height: 55px;
  cursor: pointer;
  border-color: transparent;
`;
