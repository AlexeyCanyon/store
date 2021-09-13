import React, { FC } from "react";
import { GeoIcon, ShevronIcon, YoutubeIcon } from "../../assets/icons";
import { convertPhone } from "../../helpers";
import { EColors } from "../../styles/types";
import Button from "../Button";
import { EButtonStyles } from "../Button/types";
import Dropdown from "../Dropdown";
import { EArrowPosition } from "../Dropdown/types";
import CityChoiceForm from "../Form/forms/CityChoiceForm/CityChoiceForm";

import * as S from './styles';

const CallOrderBar: FC = () => {
  console.log();

  return (
    <S.Container>
      <S.CityContainer>
        <Dropdown
          arrow={EArrowPosition.end}
          customStyle={S.DropdownCustom}
          title={(
            <>
              <GeoIcon /><S.CurrentCity>Текущий город</S.CurrentCity><ShevronIcon />
            </>
          )}>
          <CityChoiceForm />
        </Dropdown>
      </S.CityContainer>
      <S.YoutubeContainer>
        <p>
          Новые обзоры каждую неделю, смотри нас на нашем YouTube канале
        </p>
        <S.YoutubeLink href="https://www.youtube.com/watch?v=5vx2PVClSVU">
          <YoutubeIcon />
          YouTube
        </S.YoutubeLink>
      </S.YoutubeContainer>

      <S.CallOrderContainer>
        {convertPhone('+79130491004')}
        <Button
          btnStyle={EButtonStyles.default}
          btnColor={EColors.mainColor}
          customStyle={S.CallOrderButtonCSS}
        >
          Заказать звонок
        </Button>
      </S.CallOrderContainer>
    </S.Container>
  );
};

export default CallOrderBar;