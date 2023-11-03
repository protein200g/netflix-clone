import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(
    to right,
    rgb(255, 0, 183),
    rgb(229, 29, 240)
  );
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 600px;
  gap: 10px;
`;

const TempDiv = styled.div`
  grid-column: span 2;
  text-align: center;
`;
const CenteredButton = styled(motion.button)`
  border: none;
  margin-top: 50px;
  width: 60px;
  height: 35px;
  border-radius: 5px;
`;

const Box = styled(motion.div)`
  height: 150px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper>
      <Grid>
        <Box
          whileHover={{ x: -13, y: -7, scale: 1.1 }}
          onClick={() => setId('1')}
          layoutId={'1'}
        ></Box>
        <Box>
          {!clicked ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box>
          {clicked ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box
          whileHover={{ x: 13, y: 7, scale: 1.1 }}
          onClick={() => setId('2')}
          layoutId={'2'}
        ></Box>
        <TempDiv>
          <CenteredButton
            animate={{ scale: clicked ? 1.3 : 1 }}
            onClick={toggleClicked}
            style={{ color: clicked ? 'red' : 'blue ' }}
          >
            switch
          </CenteredButton>
        </TempDiv>
      </Grid>

      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
            animate={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
          >
            <Box
              layoutId={id}
              style={{
                width: 300,
                height: 150,
                backgroundColor: 'white',
              }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
