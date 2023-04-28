import styled from "styled-components";
import { Company } from "../../../types/Card";
import { useCardItemAction } from "../../provider/CardItemProvider";
import { companyLogo } from "../../../assets/companyLogo";
import { useModalAction } from "../../provider/ModalProvider";

interface CompanyButtonProps {
  company: Company;
}

const CompanyButton = ({ company }: CompanyButtonProps) => {
  const { setCompany } = useCardItemAction();
  const { closeModal } = useModalAction();

  const handleClickButton = () => {
    setCompany(company);
    closeModal();
  };

  return (
    <CompanyButtonContainer onClick={handleClickButton}>
      {company && companyLogo[company]}
      {company}
    </CompanyButtonContainer>
  );
};

const CompanyButtonContainer = styled.button`
  width: 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  background: none;
  border: none;

  font-weight: 500;
  font-size: 12px;
  color: #525252;

  cursor: pointer;
`;

export default CompanyButton;
