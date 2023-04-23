import { useEffect, useRef } from "react";
import Input from "../common/Input";
import InputBox from "../common/InputBox";
import InputGroup from "../common/InputGroup";
import InputSeparator from "../common/InputSeparator";
import { isNumber, isOverMaxLength } from "../../utils";

interface ExpirationDateInputProps {
  expirationDate: string[];
  setExpirationDate: (expirationDate: string[]) => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
}

const ExpirationDateInput = ({
  expirationDate,
  setExpirationDate,
  errorMessage,
  setErrorMessage,
}: ExpirationDateInputProps) => {
  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  useEffect(() => {
    if (!expirationDate[0].length && !expirationDate[1].length) return;

    if (expirationDate[0].length < 2 || expirationDate[1].length < 2) {
      setErrorMessage("만료일은 MM/YY 형식으로 입력해주세요");
      return;
    }

    if (expirationDate[0].length === 2 && !isValidMonth(expirationDate[0])) {
      setErrorMessage("유효한 달을 입력해주세요");
      return;
    }
  }, [expirationDate, setErrorMessage]);

  const handleChangeInput = (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (isOverMaxLength(inputValue, 2)) return;

    if (!isNumber(inputValue)) {
      setErrorMessage("숫자만 입력해주세요");
      return;
    }

    const newInputs = [...expirationDate];
    newInputs[inputIndex] = inputValue;

    setExpirationDate(newInputs);
    setErrorMessage("");

    if (isNextInputFocusable(inputValue, inputIndex)) {
      refs[inputIndex + 1].current?.focus();
    }
  };

  const isValidMonth = (monthValue: string) => {
    return Number(monthValue) <= 12 && Number(monthValue) >= 1;
  };

  const isNextInputFocusable = (inputValue: string, inputIndex: number) => {
    return inputValue.length > 1 && inputIndex < 1;
  };

  return (
    <InputGroup labelValue="만료일" errorMessage={errorMessage}>
      <InputBox width="137px" isError={!!errorMessage}>
        <Input placeholder="MM" ref={refs[0]} value={expirationDate[0]} onChange={handleChangeInput(0)} />
        <InputSeparator color="#737373" isActive>
          /
        </InputSeparator>
        <Input placeholder="YY" ref={refs[1]} value={expirationDate[1]} onChange={handleChangeInput(1)} />
      </InputBox>
    </InputGroup>
  );
};

export default ExpirationDateInput;
