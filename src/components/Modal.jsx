import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background: #111;
  padding: 20px;
  border-radius: 16px;
  width: 80%;
  max-width: 400px;
  color: white;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 12px;
  width: 100%;
  background: #00ff88;
  border: none;
  border-radius: 8px;
  font-weight: bold;
`;

export default function Modal({ data, onNext }) {
  return (
    <Overlay>
      <Card>
        <Image src={data.image} />
        <Button onClick={onNext}>Next stop 🚴</Button>
      </Card>
    </Overlay>
  );
}
