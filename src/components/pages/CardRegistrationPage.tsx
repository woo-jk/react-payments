import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../common/Header";
import { LeftArrowIcon } from "../../assets/icons";
import CardItem from "../Card/CardItem";
import CardForm from "../CardRegistrationPage/CardForm";
import { CardPublicInfo } from "../../types/Card";
import { useCardItemValue } from "../provider/CardItemProvider";
import CompanyModal from "../CardRegistrationPage/Modal/CompanyModal";
import { useModalAction } from "../provider/ModalProvider";

interface CardRegistrationPageProps {
  addCardItem: (cardItem: CardPublicInfo) => void;
}

const CardRegistrationPage = ({ addCardItem }: CardRegistrationPageProps) => {
  const navigate = useNavigate();
  const { cardNumber, expirationDate, name, company } = useCardItemValue();
  const { isOpenModal } = useModalAction();

  const cardItem = {
    id: Date.now(),
    cardNumber: cardNumber,
    expirationDate: expirationDate,
    name: name,
    company: company,
  };

  const handleSubmitForm = () => {
    addCardItem(cardItem);
    navigate(`/complete/${cardItem.id}`);
  };

  return (
    <>
      <Header title="카드추가" leftChild={<BackButton />} />
      <CardItemContainer>
        <CardItem card={cardItem} />
      </CardItemContainer>
      <CardForm onSubmitForm={handleSubmitForm} />
      {isOpenModal && <CompanyModal />}
    </>
  );
};

const BackButton = () => {
  return (
    <Link to={"/"}>
      <LeftArrowIconWrapper>
        <LeftArrowIcon />
      </LeftArrowIconWrapper>
    </Link>
  );
};

const CardItemContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const LeftArrowIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 9px 14px;
  border-radius: 50%;

  transition: 0.2s;

  &:hover {
    background-color: #e4e4e4;
  }
`;

export default CardRegistrationPage;
