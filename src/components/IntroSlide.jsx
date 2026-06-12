import styled, { keyframes } from "styled-components";

const crawl = keyframes`
  0% {
    transform: rotateX(25deg) translateY(100%);
  }

  100% {
    transform: rotateX(25deg) translateY(-250%);
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  background: black;
  color: #fff;
  perspective: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CrawlContainer = styled.div`
  width: 90%;
  max-width: 600px;
  text-align: center;
  transform-style: preserve-3d;
`;

const CrawlText = styled.div`
  font-size: 1.6rem;
  line-height: 1.8;
  animation: ${crawl} 30s linear forwards;
`;

export default function IntroSlide() {
  return (
    <Wrapper>
      <CrawlContainer>
        <CrawlText>
          <p>Još dok si bio mali svi su mislili da ćeš umrijet ko djevac</p>

          <p>Onda se pojavila Petra, a ti si ju odmah odlučio oženit</p>

          <p>Dobro ajde ne odmah, 15 godina poslije, al ko realno broji</p>

          <p>
            Iako svo vrijeme ne stane u samo jedan dan ova vožnja pokušat će
            dočarat zadnjih 15 godina koje si proveo s curom koja ti je prva
            dala.
          </p>
        </CrawlText>
      </CrawlContainer>
    </Wrapper>
  );
}
