import Button from 'components/Button';
import { ItemCollapse } from 'components/itemCollapse';
import { stringDays } from 'constants/stringDays';
import { stringMonths } from 'constants/stringMonths';
import { Command } from 'models/command';
import { useState } from 'react';
import { ArrowDownIcon } from '../../../../../public/assets';
import * as S from './styles';

interface OpenProps {
  requests: Array<Command>;
}

const Open = ({ requests }: OpenProps) => {
  const [openCollapse, setOpenCollapse] = useState(false);
  const [commandsSelected, setCommandsSelected] = useState<Array<string>>(['']);

  const handleOpenCollapse = () => setOpenCollapse(!openCollapse);

  const handleSelect = (e: string) => console.log('aqui');

  return (
    <S.Container>
      {requests.map(request => {
        const formattedDate = new Date(request.start);
        return (
          <S.Content>
            <S.Command>
              <S.Check
                type="checkbox"
                value={request.id}
                onChange={e => handleSelect(e.target.value)}
              />
              <S.Date>
                <S.DateText>Data</S.DateText>
                <S.DayWeekly>{stringDays[formattedDate.getDay()]}</S.DayWeekly>
                <S.DayMonth>
                  {formattedDate.getDay()} de{' '}
                  {stringMonths[formattedDate.getMonth()]}
                </S.DayMonth>
              </S.Date>
              <S.Services>
                <S.ServiceText>Serviço / Produto</S.ServiceText>
                <S.Service>Quantidade: {request.items?.length}</S.Service>
              </S.Services>
              <S.Value>
                <S.ValueText>Valor</S.ValueText>
                <S.Price>39,00</S.Price>
              </S.Value>
              <S.Arrow onClick={handleOpenCollapse} direction={openCollapse}>
                <img src={ArrowDownIcon.src} alt="Mostrar serviços deste kit" />
              </S.Arrow>
            </S.Command>
            {openCollapse && (
              <div>
                {request.items?.map(item => (
                  <ItemCollapse date={item.date} service={item} />
                ))}
              </div>
            )}
          </S.Content>
        );
      })}
      <S.Button>
        <Button text="Pagar comanda" />
      </S.Button>
    </S.Container>
  );
};

export default Open;
