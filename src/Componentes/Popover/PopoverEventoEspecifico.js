import { Popover, OverlayTrigger, Button } from 'react-bootstrap'



const popover = (
    <Popover id="popover-basic">
      <Popover.Title className="text-center" as="h3">Aviso!</Popover.Title>
      <Popover.Content>
        Evento não verificado pela nossa equipe, confirme as informações antes de participar.
      </Popover.Content>
    </Popover>
  );

const PopoverEventoEspecifico = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button className="my-2" variant="warning" size="sm" block><strong>Aviso.</strong></Button>
    </OverlayTrigger>
);

export default PopoverEventoEspecifico;