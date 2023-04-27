import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../common/Header";
import { LeftArrowIcon } from "../../assets/icons";
import CardItem from "../Card/CardItem";
import CardForm from "../CardRegistrationPage/CardForm";
import { CardPublicInfo } from "../../types/Card";
import { useCardItemValue } from "../provider/CardItemProvider";
import CompanyModal from "../CardRegistrationPage/Modal/CompanyModal";

interface CardRegistrationPageProps {
  addCardItem: (cardItem: CardPublicInfo) => void;
}

const CardRegistrationPage = ({ addCardItem }: CardRegistrationPageProps) => {
  const { cardNumber, expirationDate, name, company } = useCardItemValue();

  const cardItem = {
    id: Date.now(),
    cardNumber: cardNumber,
    expirationDate: expirationDate,
    name: name,
    company: company,
  };

  const handleSubmitForm = () => {
    addCardItem(cardItem);
  };

  return (
    <>
      <Header title="카드추가" leftChild={<BackButton />} />
      <CardItemContainer>
        <CardItem card={cardItem} />
      </CardItemContainer>
      <CardForm onSubmitForm={handleSubmitForm} />
      <CompanyModal />
    </>
  );
};

const BackButton = () => {
  return (
    <Link to={"/"}>
      <LeftArrowIcon />
    </Link>
  );
};

const CardItemContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export default CardRegistrationPage;
