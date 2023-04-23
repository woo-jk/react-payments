import styled from "styled-components";
import { CardPublicInfo } from "../../types/Card";
import CardItem from "../common/CardItem";

interface CardListProps {
  cardList: CardPublicInfo[];
}

const CardList = ({ cardList }: CardListProps) => {
  return (
    <CardListContainer>
      {cardList.map((card, id) => (
        <CardItem card={card} key={id} />
      ))}
    </CardListContainer>
  );
};

const CardListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 45px;

  margin-bottom: 45px;

  &:empty {
    margin-bottom: 0;
  }
`;

export default CardList;
