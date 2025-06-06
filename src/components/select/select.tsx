import { useState } from "react";
import {
  ContainerOptions,
  ContainerSelect,
  SelectButton,
  Option,
  SelectOption,
  ButtonOption,
} from "./styles";
import { arrowDown, arrowUp } from "../../assets";

type Props = {
  options: string[];
};

const Select = ({ options }: Props) => {
  const [pressButton, setPressButton] = useState(false);
  const [selectOption, setSelectOption] = useState("");

  return (
    <ContainerSelect>
      <SelectButton
        hasContent={selectOption.length > 0 || pressButton}
        onClick={() => setPressButton(!pressButton)}
      >
        <SelectOption>{selectOption}</SelectOption>
        {pressButton ? (
          <img src={arrowDown} alt="Arrow Down" />
        ) : (
          <img src={arrowUp} alt="Arrow Up" />
        )}
      </SelectButton>
      {pressButton && (
        <ContainerOptions>
          {options.map((val, index) => (
            <ButtonOption
              key={index}
              onClick={() => {
                setSelectOption(val), setPressButton(!pressButton);
              }}
            >
              <Option>{val}</Option>
            </ButtonOption>
          ))}
        </ContainerOptions>
      )}
    </ContainerSelect>
  );
};

export default Select;
